import { navigate } from '@reach/router';
import React from 'react';
import { Button, Card, Container, Icon, Image, Label } from 'semantic-ui-react';
import ProductCard from './ProductCard';

const ItemDisplay = () => {
    return(
        <Container fluid style={{paddingTop:'6em', paddingRight: '20px', paddingLeft:'20px'}}>
            <Card.Group centered itemsPerRow='5'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Card.Group>
        </Container>
    )
}

export default ItemDisplay;