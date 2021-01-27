import React from 'react';
import { Button, Item } from 'semantic-ui-react';

const ProductCardHorizontal = () => {
    return (
        <Item>
            <Item.Image src='https://images-na.ssl-images-amazon.com/images/I/71zNWbTHzxL._SL1500_.jpg' style={{height:'100px'}} size='tiny' floated='left' />
            <Item.Content>
                <Item.Description as='h1' style={{textAlign:'left', fontSize:'1.5em', marginTop: '0px'}}>Product Name</Item.Description>
                <Item.Description style={{textAlign:'left'}}> Product Description</Item.Description>
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