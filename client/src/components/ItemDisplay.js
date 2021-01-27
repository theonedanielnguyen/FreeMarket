import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from './ProductCard';

const ItemDisplay = () => {
    return(
        <Container fluid style={{paddingTop:'1em', paddingRight: '20px', paddingLeft:'20px'}}>
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