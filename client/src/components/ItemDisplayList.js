import React from 'react';
import { Button, Container, Grid, Item } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import ProductCardHorizontal from '../components/ProductCardHorizontal';

const ItemDisplayList = () => {
    // const shoppingCart = useSelector(state => state.shoppingCart);
    const shoppingCart = {
        total: 0,
        items: ["601e40173bdad75004e5547a","601e3f5eeea16b0a5cb1fa07","601e3f2aeea16b0a5cb1fa06"],
    }

    return (
        <Container fluid style={{paddingTop:'1em', paddingRight: '20px', paddingLeft:'20px'}}>
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
                                    <h3><strong>Total:</strong> $ {shoppingCart.total}</h3>
                                </Item.Description>
                            </Item.Content>
                            <Item.Extra>
                                <Button floated='right' color='twitter' style={{marginTop: '1em'}}>
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