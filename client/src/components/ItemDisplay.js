import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import ProductCard from './ProductCard';

const ItemDisplay = (props) => {
    const displayItems = props.items;

    return(
        <Container fluid style={{paddingTop:'1em', paddingRight: '20px', paddingLeft:'20px'}}>
            <Card.Group centered itemsPerRow='5'>
                {displayItems.map((item, key) => {
                    return(
                        <ProductCard key={key} productID={item} />
                    )
                })}
            </Card.Group>
        </Container>
    )
}

export default ItemDisplay;