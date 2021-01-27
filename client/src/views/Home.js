// import { navigate } from '@reach/router';
import React from 'react';
import { Container } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Home = () => {
    return (
        <Container fluid>
            <TopNavBar />
            <ItemDisplay />
        </Container>
    )
}

export default Home;