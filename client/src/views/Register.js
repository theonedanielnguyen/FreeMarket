import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { navigate } from '@reach/router'

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            const newUserId = newUserResponse.data._id;
            const userData = await axios.get('http://localhost:8000/api/users/'+newUserId);
            const user = userData.data[0];
            const newShop = {shopOwner: newUserId};
            const newShopResponse = await axios.post('http://localhost:8000/api/shop/new', newShop);
            const newShopId = newShopResponse.data._id;
            const shopData = await axios.get('http://localhost:8000/api/shop/'+newShopId)
            const shop = shopData.data[0];
            shop["owner_id"] = newUserId;
            const updateShopResponse = await axios.put('http://localhost:8000/api/shop/'+newShopId, shop);
            user["shop_id"] = updateShopResponse.data._id;
            const updateUserResponse = await axios.put('http://localhost:8000/api/users/'+newUserId, user);
            console.log(updateUserResponse.data);
            
        }
        catch(error){
            console.log(error);
        }

        // axios.post('http://localhost:8000/api/users/new', newUser)
        //     .then(res => {
        //         let userId = res.data._id;
        //         let newShop = {shopOwner: userId}
        //         axios.post('http://localhost:8000/api/shop/new', newShop)
        //             .then(res=> {

        //             })
        //     })
        //     .catch(err => console.log(err))
    }

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
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    type='text'
                                    />
                                <Form.Input fluid
                                    name='lastName'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                    type='text'
                                    />
                            </Form.Group>
                            <Form.Input
                                fluid
                                name='email'
                                icon='envelope outline'
                                iconPosition='left'
                                placeholder='E-Mail'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                type='email'
                                />
                            <Form.Group widths='equal'>
                                <Form.Input fluid
                                    name='password'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    type='password'
                                    />
                                <Form.Input fluid
                                    name='confirmPassword'
                                    icon='key'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    type='password'
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