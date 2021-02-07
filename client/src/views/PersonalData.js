import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Header } from 'semantic-ui-react';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import TopNavBar from '../components/TopNavBar';

const PersonalData = () => {
    const user = useSelector(state => state.loggedInUser);
    const payment = useSelector(state => state.userPayment);
    const dispatch = useDispatch();

    return(
        <Container fluid>
            <TopNavBar />
            <Header size='large'>Edit Personal Info</Header>
            <Grid columns={2} verticalAlign='middle'>
                <Grid.Column>
                    <AddressForm />
                </Grid.Column>
                <Grid.Column>\
                    <PaymentForm />
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default PersonalData;