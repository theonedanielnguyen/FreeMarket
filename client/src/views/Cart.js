import React from 'react';
import { Button, Container, Grid, Item } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import ProductCardHorizontal from '../components/ProductCardHorizontal';
import TopNavBar from '../components/TopNavBar';
import ItemDisplayList from '../components/ItemDisplayList';

const Cart = () => {
    return(
        <Container fluid>
            <TopNavBar />
            <ItemDisplayList />
        </Container>
    )
}

export default Cart;