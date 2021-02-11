import React, { useState } from 'react';
import { Button, Grid, Item } from 'semantic-ui-react';

const ProductCardHorizontal = (props) => {
    const productID = props.productID;
    const [ product, setProduct ] = useState({})

    const fakeItem = {
        name: "Product Name",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg",
        price: 25.00,
        description: "A nice buncha flow'rs",
    }

    return (
        <Item>
            <Item.Image src={fakeItem.imageURL} style={{height:'100px'}} size='tiny' floated='left' />
            <Item.Content>
                <Item.Content>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Item.Description as='h1' style={{textAlign:'left', fontSize:'1.5em', marginTop: '0px'}}>{fakeItem.name}</Item.Description>
                        </Grid.Column>
                        <Grid.Column textAlign='right'>
                            <Item.Description>$ {fakeItem.price}</Item.Description>
                        </Grid.Column>
                    </Grid>
                </Item.Content>
                <Item.Description style={{textAlign:'left'}}>{fakeItem.description}</Item.Description>
                <Item.Extra>
                    <Button floated='right' color='red'>
                        Remove
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default ProductCardHorizontal;