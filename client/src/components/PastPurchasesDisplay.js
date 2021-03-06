import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import TransactionDisplay from './TransactionDisplay';

const PastPurchasesDisplay = () => {
    const user = useSelector(state => state.loggedInUser);

    return(
        <Container fluid>
            {user.transactions_buyer.map((transaction, key) => {
                return(
                    <TransactionDisplay transactionID={transaction} key={key} purchases={true} />
                )
            })}
        </Container>
    )
}

export default PastPurchasesDisplay;