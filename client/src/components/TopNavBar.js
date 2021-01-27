import { navigate } from '@reach/router';
import React from 'react';
import { Button, Container, Form, Icon, Input, Menu } from 'semantic-ui-react';

const TopNavBar = () => {
    const handleSearch = () => {
        navigate('/search')
    }

    return (
        <Container fluid>
            <Menu inverted color='green' borderless attached='top'>
                <Menu.Item as='a' header>
                    <h1>FreeMarket</h1>
                </Menu.Item>
                <Menu.Item>
                    <Form onSubmit={handleSearch}>
                        <Input 
                            type='text'
                            action={{
                                icon:'search'
                            }}
                            placeholder='Search FreeMarket...' 
                            />
                    </Form>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        Hello, "user.name" 
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={()=>navigate('/cart')}>
                            Cart &nbsp;
                            <Icon name='shopping cart' />
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={()=>navigate('/')} animated>
                            <Button.Content visible>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log Out &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button.Content>
                            <Button.Content hidden>Come back soon!</Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Menu borderless attached='bottom' inverted color='grey'>
                <Menu.Menu position='right'>
                    <Menu.Item as='a' href='/home'>Home</Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
}

export default TopNavBar;