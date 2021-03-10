import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';

const ProductCard = (props) => {
    const productID = props.productID;
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();
    const [ product, setProduct ] = useState({});
    const [ productOwner, setProductOwner ] = useState('');

    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/item/" + productID)
    //         .then(res => {
    //             setProduct(res.data[0]);
    //         })
    //         .catch(err => console.log(err));
    // }, [productID]);

    useEffect(() => {
        const loadProduct = async () => {
            try{
                const target = await axios.get("http://localhost:8000/api/item/" + productID);
                setProduct(target.data[0]);
                const owner = await axios.get("http://localhost:8000/api/users/" + target.data[0]['creator_id']);
                const ownerName = `${owner.data[0].firstName} ${owner.data[0].lastName}`;
                setProductOwner(ownerName);
            }
            catch(err) {
                console.log(err)
            }
        }
        loadProduct();
    }, [productID])

    const addToCart = () => {
        const newTotal = shoppingCart.total + product.price;
        const newItems = [...shoppingCart.items, productID];
        dispatch({type: 'ADD_ITEM_TO_CART', payload: {newItems, newTotal}});
        navigate('/cart')
    }

    return (
        <Card raised>
            <Image src={product.imageURL} 
            size='large'
            />
            <Card.Content style={{paddingTop:'auto'}}
                // as='a' 
                // onClick={()=>navigate('/details')}
                >
                <Card.Header><h3>{product.name}</h3></Card.Header>
                <Card.Description>
                    {product.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                Sold By: <Button onClick={()=>{navigate('/shop/'+product.shop_id)}}>{productOwner}</Button>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' fluid labelPosition='left'>
                    <Label basic pointing='right'>
                        ${product.price}
                    </Label>
                    <Button icon fluid onClick={()=>addToCart()} animated='fade' color='green'>
                        <Button.Content visible>
                            <Icon name='shopping cart' />
                            &nbsp;&nbsp;Add to Cart
                        </Button.Content>
                        <Button.Content hidden style={{color:'black'}}>
                            <Icon name='shopping cart' />
                            &nbsp;&nbsp;Add to Cart
                        </Button.Content>
                    </Button>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default ProductCard;