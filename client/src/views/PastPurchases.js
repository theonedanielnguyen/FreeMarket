import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import PastPurchasesDisplay from '../components/PastPurchasesDisplay';
import TopNavBar from '../components/TopNavBar';

const PastPurchases = () => {
    return(
        <Container fluid>
            <TopNavBar />
            <Header size='large'>Past Purchases</Header>
            <PastPurchasesDisplay />
        </Container>
    )
}

export default PastPurchases;