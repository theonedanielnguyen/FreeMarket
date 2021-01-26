import React from 'react';
import { Button, Container, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { navigate } from '@reach/router'

const Register = () => {
    const registerHandler = (e) => {
        navigate('/home')
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
                                    type='text'
                                    />
                                <Form.Input fluid
                                    name='lastName'
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='Last Name'
                                    type='text'
                                    />
                            </Form.Group>
                            <Form.Input
                                fluid
                                name='email'
                                icon='envelope outline'
                                iconPosition='left'
                                placeholder='E-Mail'
                                type='email'
                                />
                            <Form.Group widths='equal'>
                                <Form.Input fluid
                                    name='password'
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    />
                                <Form.Input fluid
                                    name='lastName'
                                    icon='key'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
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