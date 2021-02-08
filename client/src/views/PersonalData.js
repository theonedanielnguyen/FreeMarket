import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import TopNavBar from '../components/TopNavBar';

const PersonalData = () => {
    return(
        <Container fluid>
            <TopNavBar />
            <Header size='large'>Edit Personal Info</Header>
            <Grid columns={2}>
                <Grid.Column>
                    <AddressForm />
                </Grid.Column>
                <Grid.Column>
                    <PaymentForm />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default PersonalData;