import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import TransactionDisplay from './TransactionDisplay';

const PastSalesDisplay = () => {
    const user = useSelector(state => state.loggedInUser);

    return (
        <Container>
            {user.transactions_seller.map((transaction, key) => {
                return(
                    <TransactionDisplay transactionID={transaction} key={key} purchases={false} />
                )
            })}
        </Container>
    )
}

export default PastSalesDisplay;