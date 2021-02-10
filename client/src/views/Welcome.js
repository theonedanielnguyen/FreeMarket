import React, { useEffect } from 'react';
import { Container, Header, Button, Icon, Item} from 'semantic-ui-react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';

const Welcome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:'LOGOUT', payload:null});
    }, [dispatch])

    return(
        <Container fluid >
            <Item 
                style={{
                    height:'100px',

                }}
            >
                <Button animated 
                    size='huge' 
                    color='green' 
                    floated='right' 
                    onClick={()=>navigate('/login')}
                    >
                    <Button.Content visible>Already have an account?</Button.Content>
                    <Button.Content hidden>Login <Icon name='arrow right'/></Button.Content>
                </Button>
            </Item>
            <Header
                content="Welcome to"
                style={{
                    fontSize: '4vw',
                    marginTop: '15vh'
                }}
            />
            <Header
                color='green'
                content='FREEMARKET'
                textAlign='center'
                style={{
                    fontSize: '10vw',
                }}
            />
            <Header
                content="A place to buy and sell"
                style={{
                    fontSize: '4vw'
                }}
            />
            <Button 
                animated 
                size='huge' 
                color='green' 
                style={{marginTop: '1em'}} 
                onClick={()=>navigate('/register')} >
                <Button.Content visible>Get Started <Icon name='arrow right'/></Button.Content>
                <Button.Content hidden>Register</Button.Content>
            </Button>
        </Container>
    )
}

export default Welcome;