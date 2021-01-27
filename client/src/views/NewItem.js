import { navigate } from '@reach/router';
import React, { useState } from 'react';
import { Button, Card, Container, Form, Grid, Header, Icon, Image, Label, Segment } from 'semantic-ui-react';
import TopNavBar from '../components/TopNavBar';

const NewItem = () => {
    const [productName, setProductName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    return(
        <Container fluid>
            <TopNavBar />
            <Grid columns={2} verticalAlign='middle' style={{paddingTop: '3em', paddingRight:'5vw'}}>
                <Grid.Column>
                    <Grid columns={2} centered>
                        <Card>
                            <Image src={imageURL} style={{height:'250px'}}/>
                            <Card.Content>
                                <Card.Header><h3>{productName}</h3></Card.Header>
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
                    <Form>
                        <Segment raised>
                            <Form.Input
                                fluid
                                name='productName'
                                placeholder='Product Name'
                                type='text'
                                value={productName}
                                onChange={(e)=>setProductName(e.target.value)}
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
                                    onClick={()=>navigate('/storemanagement')}
                                    />
                            </Button.Group>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default NewItem;