import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const StoreManagement = () => {
    const shop = useSelector(state => state.userShop);
    console.log(shop);
    return (
        <Container fluid>
            <TopNavBar />
            <Header size='huge'>Your Products</Header>
            <ItemDisplay items={shop.itemsSold}/>
        </Container>
    )
}

export default StoreManagement;