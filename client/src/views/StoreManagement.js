import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import PersonalItemDisplay from '../components/PersonalItemDisplay';
import TopNavBar from '../components/TopNavBar';

const StoreManagement = () => {
    const shop = useSelector(state => state.userShop);
    
    return (
        <Container fluid>
            <TopNavBar />
            <Header size='huge'>Your Products</Header>
            <PersonalItemDisplay items={shop.itemsSold}/>
        </Container>
    )
}

export default StoreManagement;