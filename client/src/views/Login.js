import React, { useState } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { navigate } from '@reach/router'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        const userLogin = {
            email,
            password,
        }

        try {
            const validLogin = await axios.post('http://localhost:8000/api/users/login', userLogin);
            const user = validLogin.data;
            const userCart = user.cart;
            console.log(userCart);
            const targetShop = await axios.get('http://localhost:8000/api/shop/'+user.shop_id);
            const shop = targetShop.data[0];
            const targetPayment = await axios.get('http://localhost:8000/api/payment/'+user.payment_id);
            const payment = targetPayment.data[0];
            console.log(user)
            dispatch({ type: 'LOGIN', payload: {user, shop, payment, userCart}});
            navigate('/home')
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <Grid verticalAlign='middle' textAlign='center' style={{height:'100vh'}} >
            <Grid.Column style={{maxWidth: '50vw'}}>
                <Header style={{fontSize: '3em'}}>
                    LOGIN <Icon name='angle double right' />
                </Header>
                <Form onSubmit={loginHandler}>
                    <Segment raised>
                        <Form.Input 
                            fluid
                            name='email'
                            icon='envelope outline'
                            iconPosition='left'
                            placeholder='E-Mail'
                            type='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        <Form.Input
                            fluid
                            name='password'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        <Button
                            type='submit'
                            size='large'
                            content='Login'
                            color='green'
                            fluid
                            />
                    </Segment>
                </Form>
                <Message floating>
                    New here? <a href='/register'>Sign Up</a>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default Login;