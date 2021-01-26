import React from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { navigate } from '@reach/router'

const Login = () => {
    const loginHandler = (e) => {
        navigate('/home')
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
                            />
                        <Form.Input
                            fluid
                            name='password'
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
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