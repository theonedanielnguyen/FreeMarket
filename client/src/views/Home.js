// import { navigate } from '@reach/router';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Home = () => {
    return (
        <Container fluid>
            <TopNavBar />
            <Header size='large'>Some Offered Items</Header>
            <ItemDisplay />
        </Container>
    )
}

export default Home;