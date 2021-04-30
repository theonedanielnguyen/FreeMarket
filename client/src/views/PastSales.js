import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import TopNavBar from '../components/TopNavBar';

const PastSales = () => {
    return(
        <Container>
            <TopNavBar />
            <Header size='large'>Past Sales</Header>

        </Container>
    )
}

export default PastSales;