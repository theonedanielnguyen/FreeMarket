import React from 'react';
import { Container } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const StoreManagement = () => {
    return (
        <Container fluid>
            <TopNavBar />

            <ItemDisplay />
        </Container>
    )
}

export default StoreManagement;