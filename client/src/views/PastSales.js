import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PastSalesDisplay from '../components/PastSalesDisplay';
import TopNavBar from '../components/TopNavBar';

const PastSales = () => {
    return(
        <Container>
            <TopNavBar />
            <Header size='large'>Past Sales</Header>
            <PastSalesDisplay />
        </Container>
    )
}

export default PastSales;