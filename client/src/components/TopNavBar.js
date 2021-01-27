import { navigate } from '@reach/router';
import React from 'react';
import { Button, Container, Input, Menu } from 'semantic-ui-react';

const TopNavBar = () => {
    return (
        <Container fluid>
            <Menu fixed='top' borderless compact>
                <Menu.Item as='a' header>
                    <h1>FreeMarket</h1>
                </Menu.Item>
                <Menu.Item>
                    <Input 
                        type='text'
                        icon='search'
                        placeholder='Search FreeMarket...' 
                        />
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item position='right'>
                        Hello, "user.name" 
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button onClick={()=>navigate('/')} animated>
                            <Button.Content visible>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log Out &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button.Content>
                            <Button.Content hidden>Come back soon!</Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
}

export default TopNavBar;