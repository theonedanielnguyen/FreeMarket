import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Search = () => {
    return (
        <Container fluid>
            <TopNavBar />
            <Segment>
                Searching for... search parameters.
            </Segment>
            <ItemDisplay />
        </Container>
    )
}

export default Search;