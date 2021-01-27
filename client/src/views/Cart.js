import React from 'react';
import { Button, Container, Grid, Item } from 'semantic-ui-react';
import ProductCardHorizontal from '../components/ProductCardHorizontal';
import TopNavBar from '../components/TopNavBar';

const Cart = () => {
    return(
        <Container fluid>
            <TopNavBar />
            <Grid centered style={{marginTop:'1em'}}>
                <Grid.Row>
                    <Item.Group divided style={{width:'60vw'}}>
                        <ProductCardHorizontal />
                        <ProductCardHorizontal />
                    </Item.Group>
                </Grid.Row>
                <Grid.Row style={{textAlign:'right'}}>
                    <Grid.Column>
                        <Item style={{marginRight: '20vw'}}>
                            <Item.Content>
                                <Item.Description style={{textAlign:'right'}}>
                                    <h3><strong>Total:</strong> $Total</h3>
                                </Item.Description>
                            </Item.Content>
                            <Item.Extra>
                                <Button floated='right' color='primary' style={{marginTop: '1em'}}>
                                    Checkout
                                </Button>
                            </Item.Extra>
                        </Item>
                    </Grid.Column>
                    
                </Grid.Row>
                
            </Grid>
        </Container>
    )
}

export default Cart;