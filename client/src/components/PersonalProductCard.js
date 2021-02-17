import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Image, Label } from 'semantic-ui-react';
import { navigate } from '@reach/router';

const PersonalProductCard = (props) => {
    const productID = props.productID;
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + productID)
            .then(res => {
                setProduct(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [productID]);

    const editProduct = () => {
        navigate('/products/'+productID);
    }

    return (
        <Card>
            <Image src={product.imageURL} 
            size='large'
            />
            <Card.Content>
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
                    <Button icon onClick={()=>editProduct()}>
                        Edit Product
                    </Button>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PersonalProductCard;