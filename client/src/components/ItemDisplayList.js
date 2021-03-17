import React from 'react';
import { Button, Container, Grid, Item } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import ProductCardHorizontal from '../components/ProductCardHorizontal';

const ItemDisplayList = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);

    const checkoutFunction = async () => {
        //This may need to be on a checkout page.
        //Check payment and address Information
        //Create a log of the transaction
        //Remove items from cart
        //Redirect to home page.
    }

    return (
        <Container fluid style={{paddingTop:'1em', paddingRight: '20px', paddingLeft:'20px'}}>
            <Grid centered style={{marginTop:'1em'}}>
                <Grid.Row>
                    <Item.Group divided style={{width:'60vw'}}>
                        {shoppingCart.items.map((item, index) => {
                            return (
                                <ProductCardHorizontal productID={item} key={index} /> 
                            )
                        })}
                    </Item.Group>
                </Grid.Row>
                <Grid.Row style={{textAlign:'right'}}>
                    <Grid.Column>
                        <Item style={{marginRight: '20vw'}}>
                            <Item.Content>
                                <Item.Description style={{textAlign:'right'}}>
                                    <h3><strong>Total:</strong> $ {shoppingCart.total}</h3>
                                </Item.Description>
                            </Item.Content>
                            <Item.Extra>
                                <Button floated='right' color='twitter' style={{marginTop: '1em'}} onClick={checkoutFunction}>
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

export default ItemDisplayList;