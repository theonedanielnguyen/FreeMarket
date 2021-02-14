import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import { useSelector } from 'react-redux';
import { Button, Container, Dropdown, Form, Icon, Input, Menu } from 'semantic-ui-react';

const TopNavBar = () => {
    const user = useSelector(state => state.loggedInUser);
    const shoppingCart = useSelector(state => state.shoppingCart);

    const handleSearch = () => {
        navigate('/search')
    }

    const logOutPath = () => {
        const saveUser = {
            ...user,
            cart: {
                total: shoppingCart.total,
                items: [...shoppingCart.items],
            }
        }
        axios.put('http://localhost:8000/api/users/'+user._id, saveUser)
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <Container fluid>
            <Menu inverted color='green' borderless attached='top'>
                <Menu.Item as='a' header onClick={()=>navigate('/home')}>
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
                        Hello, {user.firstName}! 
                    </Menu.Item>
                    <Menu.Item>
                        <Button onClick={()=>navigate('/cart')}>
                            Cart &nbsp;
                            <Icon name='shopping cart' />
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button 
                            onClick={()=>logOutPath()} 
                            animated>
                            <Button.Content visible>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Log Out &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button.Content>
                            <Button.Content hidden>Come back soon!</Button.Content>
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            <Menu borderless attached='bottom' inverted color='grey'>
                <Menu.Menu position='right'>
                    <Menu.Item as='a' onClick={()=>navigate('/home')}>Home</Menu.Item>
                    <Dropdown simple item text='Store Management'>
                        <Dropdown.Menu>
                            <Dropdown.Item content='View Storefront' onClick={()=>navigate('/store/:id')} />
                            <Dropdown.Item content='Edit Storefront' onClick={()=>navigate('/editStorefront')} />
                            <Dropdown.Item content='View Items' onClick={()=>navigate('/storeManagement')} />
                            <Dropdown.Item content='New Product' onClick={()=>navigate('/newProduct')} />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item as='a' onClick={()=>navigate('/personalData')}>Personal Data</Menu.Item>
                </Menu.Menu>
            </Menu>
        </Container>
    )
}

export default TopNavBar;