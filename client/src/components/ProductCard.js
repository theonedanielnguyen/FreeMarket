import React from 'react';
import { navigate } from '@reach/router';
import { Button, Card, Icon, Image, Label } from 'semantic-ui-react';

const ProductCard = (props) => {
    const addToCart = (item) => {
        navigate('/cart')
    }

    return (
        <Card>
            <Image src='#' style={{height:'250px'}}
            // href='/details'
            />
            <Card.Content 
                // as='a' 
                // onClick={()=>navigate('/details')}
                >
                <Card.Header><h3>Product Name</h3></Card.Header>
                <Card.Description>
                    This product is very nice and new and everyone would very much like to have it.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='left'>
                    <Label basic pointing='right'>
                        $ Price
                    </Label>
                    <Button icon onClick={()=>addToCart()} animated='fade'>
                        <Button.Content visible>
                            <Icon name='shopping cart' />
                            &nbsp;&nbsp;Add to Cart
                        </Button.Content>
                        <Button.Content hidden style={{color:'green'}}>
                            <Icon name='shopping cart' />
                            &nbsp;&nbsp;Add to Cart
                        </Button.Content>
                    </Button>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default ProductCard;