import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Item } from 'semantic-ui-react';

const ProductCardHorizontal = (props) => {
    const productID = props.productID;
    const deleteable = props.deleteable;
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();
    const [ product, setProduct ] = useState({})

    const removeItem = () => {
        const newTotal = shoppingCart.total - product.price;
        const newItems = shoppingCart.items.filter(item => item !== productID);
        dispatch({ type: 'REMOVE_FROM_CART', payload: {newTotal, newItems}})
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + productID)
            .then(res => {
                setProduct(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [productID]);

    return (
        <Item>
            <Item.Image src={product.imageURL} style={{height:'100px'}} size='tiny' floated='left' />
            <Item.Content>
                <Item.Content>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Item.Description as='h1' style={{textAlign:'left', fontSize:'1.5em', marginTop: '0px'}}>{product.name}</Item.Description>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                            <Item.Description>$ {product.price}</Item.Description>
                        </Grid.Column>
                    </Grid>
                </Item.Content>
                <Item.Description style={{textAlign:'left'}}>{product.description}</Item.Description>
                {deleteable?
                <Item.Extra>
                    <Button floated='right' color='red' onClick={() =>removeItem()}>
                        Remove
                    </Button>
                </Item.Extra>
                :
                <></>
                }
            </Item.Content>
        </Item>
    )
}

export default ProductCardHorizontal;