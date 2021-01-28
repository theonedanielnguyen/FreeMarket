import React from 'react';
import { Container } from 'semantic-ui-react';
import ItemForm from '../components/ItemForm';
import TopNavBar from '../components/TopNavBar';

const NewItem = () => {
    return(
        <Container fluid>
            <TopNavBar />
            <ItemForm />
        </Container>
    )
}

export default NewItem;