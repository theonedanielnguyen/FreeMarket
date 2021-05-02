import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';

const PastSalesDisplay = () => {
    const user = useSelector(state => state.loggedInUser);

    return (
        <Container>

        </Container>
    )
}

export default PastSalesDisplay;