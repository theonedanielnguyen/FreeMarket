import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const StoreManagement = () => {
    return (
        <Container fluid>
            <TopNavBar />
            <Header size='huge'>Your Products</Header>
            <ItemDisplay />
        </Container>
    )
}

export default StoreManagement;