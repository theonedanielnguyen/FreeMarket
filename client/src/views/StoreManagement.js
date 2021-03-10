import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import PersonalItemDisplay from '../components/PersonalItemDisplay';
import StoreInformationForm from '../components/StoreInformationForm';
import TopNavBar from '../components/TopNavBar';

const StoreManagement = () => {
    const shop = useSelector(state => state.userShop);
    
    return (
        <Container fluid>
            <TopNavBar />
            <Header size='huge'>Store Management</Header>
            <StoreInformationForm />
            <Header size='large'>Inventory</Header>
            <PersonalItemDisplay items={shop.itemsSold}/>
        </Container>
    )
}

export default StoreManagement;