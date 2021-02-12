import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux'
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';

const ProductCard = (props) => {
    const user = useSelector(state => state.loggedInUser);
    const productID = props.productID;
    const [ product, setProduct ] = useState({});
    
    // const fakeItem = {
    //     name: "Product Name",
    //     imageURL: "https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg",
    //     price: 25,
    //     description: "A nice set of glassware",
    // }

    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + productID)
            .then(res => {
                setProduct(res.data[0]);
                // setProduct(fakeItem);
            })
            .catch(err => console.log(err));
    }, [productID]);

    const addToCart = () => {
        navigate('/cart')
    }

    return (
        <Card>
            <Image src={product.imageURL} 
            size='large'
            // style={{height:'500px'}}
            // href='/details'
            />
            <Card.Content 
                // as='a' 
                // onClick={()=>navigate('/details')}
                >
                <Card.Header><h3>{product.name}</h3></Card.Header>
                <Card.Description>
                    {product.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='left'>
                    <Label basic pointing='right'>
                        ${product.price}
                    </Label>
                    <Button icon onClick={()=>addToCart()} animated='fade'>
                        <Button.Content visible>
                            <Icon name='shopping cart' />
                            &nbsp;&nbsp;Add to Cart
                        </Button.Content>
                        <Button.Content hidden style={{color:'green'}}>
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