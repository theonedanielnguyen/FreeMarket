import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import TopNavBar from '../components/TopNavBar';
import TransactionDisplay from '../components/TransactionDisplay';

const OrderConfirmation = (props) => {
    const { orderID } = props;

    return (
        <Container fluid>
            <TopNavBar />
            <Header size="large">Order Successful</Header>
            <TransactionDisplay transactionID={orderID} />
        </Container>
    )
}

export default OrderConfirmation;