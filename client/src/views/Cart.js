import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import TopNavBar from '../components/TopNavBar';
import ItemDisplayList from '../components/ItemDisplayList';

const Cart = () => {
    return(
        <Container fluid>
            <TopNavBar />
            <Header size='huge'>Your Cart</Header>
            <ItemDisplayList />
        </Container>
    )
}

export default Cart;