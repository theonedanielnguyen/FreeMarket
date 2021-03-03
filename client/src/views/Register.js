import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});
    const [firstNameError, setFirstNameError] = useState();
    const [lastNameError, setLastNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [confirmPasswordError, setConfirmPasswordError] = useState();


    async function registerHandler(e) {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };

        try {
            const newUserResponse = await axios.post('http://localhost:8000/api/users/new', newUser);
            const targetUser = newUserResponse.data;
            console.log(newUserResponse)
            // if (newUserResponse.data.hasOwnProperty('errors')) {
            //     throw new Error(newUserResponse)
            // }
            // else {
                const newShop = {shopOwner: targetUser._id};
                const newShopResponse = await axios.post('http://localhost:8000/api/shop/new', newShop);
                const targetShop = newShopResponse.data;
                const newPayment = {cardOwner: targetUser._id};
                const newPaymentResponse = await axios.post('http://localhost:8000/api/payment/new', newPayment);
                const targetPayment = newPaymentResponse.data;
                console.log(targetPayment);
                targetUser["shop_id"] = targetShop._id;
                targetUser["payment_id"] = targetPayment._id;
                const updateUserResponse = await axios.put('http://localhost:8000/api/users/'+targetUser._id,   targetUser);
                console.log(updateUserResponse);
                dispatch({type: 'REGISTER', payload: {targetUser, targetShop, targetPayment}});
                navigate('/home');
            // }
            
        }
        catch(error){
            // console.log(error);
            const errorResponse = error.response.data.errors;
            const errorObject = {};
            for (const key of Object.keys(errorResponse)) {
                errorObject[key] = errorResponse[key].message;
            }
            console.log(errorObject);
            setErrors(errorObject);
        }
    }

    useEffect(() => {
        const errorCheck = () => {
            setFirstNameError(errors.hasOwnProperty('firstName')?
                {content: errors.firstName, pointing: 'above'}
                :
                false
            )
            setLastNameError(errors.hasOwnProperty('lastName')?
                {content: errors.lastName, pointing: 'above'}
                :
                false
            )
            setEmailError(errors.hasOwnProperty('email')?
                {content: errors.email, pointing: 'above'}
                :
                false
            )
            setPasswordError(errors.hasOwnProperty('password')?
                {content: errors.password, pointing: 'above'}
                :
                false
            )
            setConfirmPasswordError(errors.hasOwnProperty('confirmPassword')?
                {content: errors.confirmPassword, pointing: 'above'}
                :
                false
            )
        }

        errorCheck()
    }, [errors])

    return(
        <Container fluid>
            <Grid verticalAlign='middle' textAlign='center' style={{height: '100vh'}} >
                <Grid.Column style={{maxWidth: '50vw'}}>
                    <Header style={{fontSize: '3em'}}>
                        REGISTER <Icon name='angle double right' />
                    </Header>
                    <Form onSubmit={registerHandler}>
                        <Segment raised>
                            <Form.Group widths='equal'>
                                <Form.Input fluid 
                                    name='firstName'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e)=>{setFirstName(e.target.value)
                                                    setFirstNameError()}}
                                    type='text'
                                    error={firstNameError}
                                    />
                                <Form.Input fluid
                                    name='lastName'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e)=>{setLastName(e.target.value)
                                                    setLastNameError()}}
                                    type='text'
                                    error={lastNameError}
                                    />
                            </Form.Group>
                            <Form.Input
                                fluid
                                name='email'
                                icon='envelope outline'
                                iconPosition='left'
                                placeholder='E-Mail'
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)
                                                setEmailError()}}
                                type='email'
                                error={emailError}
                                />
                            <Form.Group widths='equal'>
                                <Form.Input fluid
                                    name='password'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)
                                                    setPasswordError()
                                                    setConfirmPasswordError()}}
                                    type='password'
                                    error={passwordError}
                                    />
                                <Form.Input fluid
                                    name='confirmPassword'
                                    icon='key'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e)=>{setConfirmPassword(e.target.value)
                                                    setPasswordError()
                                                    setConfirmPasswordError()}}
                                    type='password'
                                    error={confirmPasswordError}
                                    />
                            </Form.Group>
                            <Button
                                type='submit'
                                size='large'
                                content='Register'
                                color='green'
                                fluid
                                />
                        </Segment>
                    </Form>
                    <Message floating>
                    Already have an account? <a href='/login'>Login</a>
                </Message>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Register;