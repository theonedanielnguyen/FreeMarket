import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Item, Modal } from 'semantic-ui-react';

const ProductCardHorizontal = (props) => {
    const productID = props.productID;
    const deleteable = props.deleteable;
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();
    const [ product, setProduct ] = useState({})
    const [ reorderSuccessModal, setReorderSuccessModal ] = useState(false);

    const removeItem = () => {
        const newTotal = shoppingCart.total - product.price;
        const newItems = shoppingCart.items.filter(item => item !== productID);
        dispatch({ type: 'REMOVE_FROM_CART', payload: {newTotal, newItems}})
    }

    const reorderItem = () => {
        const newTotal = shoppingCart.total + product.price;
        const newItems = [...shoppingCart.items, productID];
        dispatch({type: 'ADD_ITEM_TO_CART', payload: {newItems, newTotal}});
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/item/" + productID)
            .then(res => {
                setProduct(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [productID]);

    return (
        <>
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
                <Item.Extra>
                    <Button floated='right' color='green' onClick={() =>reorderItem()}>
                        Reorder Item
                    </Button>
                </Item.Extra>
                }
            </Item.Content>
        </Item>
        <Modal
            onClose={() => setReorderSuccessModal(false)}
            onOpen={() => setReorderSuccessModal(true)}
            open={reorderSuccessModal}
            dimmer='blurring'
        >
            <Modal.Header>Successfully Added To Cart</Modal.Header>
            <Modal.Content>
                The item has been readded to your cart.
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=>setReorderSuccessModal(false)}>OK</Button>
                <Button onClick={()=>navigate('/cart')}>To Cart</Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

export default ProductCardHorizontal;