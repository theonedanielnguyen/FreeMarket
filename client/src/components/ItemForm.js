import React, { useState } from 'react';
import { navigate } from '@reach/router'
import { Button, Card, Form, Grid, Header, Icon, Image, Label, Segment } from 'semantic-ui-react';
import { useSelector } from 'react-redux';

const ItemForm = (props) => {
    const { initialName, initialImageURL, initialPrice, initialDescription, onSubmit } = props
    const user = useSelector(state=>state.loggedInUser);
    const shop = useSelector(state=>state.userShop)

    const [name, setName] = useState(initialName);
    const [imageURL, setImageURL] = useState(initialImageURL);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newItem = {
            creator_id: user._id,
            shop_id: shop._id,
            name: name,
            imageURL: imageURL,
            price: price,
            description: description
        }
        onSubmit(newItem);
    }

    return (
        <Grid columns={2} verticalAlign='middle' style={{paddingTop: '3em', paddingRight:'5vw'}}>
            <Grid.Column>
                <Grid columns={2} centered>
                    <Card>
                        <Image src={imageURL} style={{height:'250px'}}/>
                        <Card.Content>
                            <Card.Header><h3>{name}</h3></Card.Header>
                            <Card.Description>
                                {description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button as='div' labelPosition='left'>
                                <Label basic pointing='right'>
                                    $ {price}
                                </Label>
                                <Button icon>
                                    <Icon name='shopping cart' />
                                    &nbsp;&nbsp;Add to Cart
                                </Button>
                            </Button>
                        </Card.Content>
                    </Card>
                </Grid>
            </Grid.Column>
            <Grid.Column>
                <Header 
                    style={{fontSize: '2em'}}
                    content='Create Product'
                    />
                <Form onSubmit={onSubmitHandler}>
                    <Segment raised>
                        <Form.Input
                            fluid
                            name='productName'
                            placeholder='Product Name'
                            type='text'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                        <Form.Input
                            fluid
                            name='imageURL'
                            placeholder='Image URL'
                            type='text'
                            value={imageURL}
                            onChange={(e)=>setImageURL(e.target.value)}
                            />
                        <Form.Input
                            fluid
                            name='price'
                            placeholder='Price'
                            type='number'
                            step='.01'
                            icon='dollar sign'
                            iconPosition='left'
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                            />
                        <Form.TextArea
                            fluid
                            name='description'
                            placeholder='Tell us about your product'
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            />
                        <Button.Group>
                            <Button
                                type='submit'
                                size='large'
                                content='Create Product'
                                color='green'
                                />
                            <Button.Or />
                            <Button
                                size='large'
                                content='Cancel'
                                color='red'
                                onClick={()=>navigate('/storeManagement')}
                                />
                        </Button.Group>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default ItemForm;