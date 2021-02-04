// import { navigate } from '@reach/router';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Home = () => {
    const fakeItems = ["601b8f6fecf5634c1c98f9a8"]
    return (
        <Container fluid>
            <TopNavBar />
            <Header size='large'>Some Offered Items</Header>
            <ItemDisplay items={fakeItems}/>
        </Container>
    )
}

export default Home;