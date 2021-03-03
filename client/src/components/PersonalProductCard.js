import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Image, Label } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

const PersonalProductCard = (props) => {
    const productID = props.productID;
    const shop = useSelector(state => state.userShop);
    const [ product, setProduct ] = useState({});
    const dispatch = useDispatch();

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

    const deleteProduct = async () => {
        try {
            const deleteConfirm = await axios.delete("http://localhost:8000/api/item/" + productID)
            console.log(deleteConfirm);
            const shopItems = [...shop.itemsSold];
            const newShopItems = shopItems.filter(itemID => itemID !== productID);
            shop.itemsSold = newShopItems;
            const newShop = await axios.put("http://localhost:8000/api/shop/"+shop._id, shopItems);
            console.log(newShop);
            dispatch({type:'DELETE_ITEM', payload: {shop}});
            navigate('/storeManagement');
        }
        catch (error) {
            console.log(error);
        }
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
                <Button as='div' fluid labelPosition='left'>
                    <Label basic pointing='right'>
                        ${product.price}
                    </Label>
                    <Button fluid color='yellow' onClick={()=>editProduct()}>
                        Edit Product
                    </Button>
                </Button>
                <Button fluid color='red' onClick={deleteProduct}>
                    Delete Product
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PersonalProductCard;