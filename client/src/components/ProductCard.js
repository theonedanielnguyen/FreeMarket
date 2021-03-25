import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Icon, Image, Label, Modal } from 'semantic-ui-react';

const ProductCard = (props) => {
    const productID = props.productID;
    const shoppingCart = useSelector(state => state.shoppingCart);
    const user = useSelector(state => state.loggedInUser);
    const dispatch = useDispatch();
    const [ product, setProduct ] = useState({});
    const [ productOwnerID, setProductOwnerID ] = useState('')
    const [ productOwner, setProductOwner ] = useState('');
    const [ rejectModal, setRejectModal ] = useState(false);

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
                setProductOwnerID(owner.data[0]._id);
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
        if(user._id === productOwnerID) {
            setRejectModal(true);
        }
        else{
            const newTotal = shoppingCart.total + product.price;
            const newItems = [...shoppingCart.items, productID];
            console.log(user._id)
            console.log(productOwnerID)
            dispatch({type: 'ADD_ITEM_TO_CART', payload: {newItems, newTotal}});
            navigate('/cart')
        }
    }

    return (
        <>
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
        <Modal
            onClose={() => setRejectModal(false)}
            onOpen={() => setRejectModal(true)}
            open={rejectModal}
            dimmer='blurring'
        >
            <Modal.Header>Add to Cart Rejected</Modal.Header>
            <Modal.Content>
                You cannot add your own item to your cart.
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=>setRejectModal(false)}>OK</Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

export default ProductCard;