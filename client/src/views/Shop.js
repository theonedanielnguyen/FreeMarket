import React, { useState } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Shop = (props) => {
    const shopID = props.shopID;
    const [ shopItems, setShopItems ] = useState([])
    const [ loaded, setLoaded ] = useState(false);
    return(
        <Container fluid>
            <TopNavBar />
            {loaded?
                <ItemDisplay items={shopItems} />
                :
                <Loader indeterminate size='massive' />
            }
        </Container>
    )
}

export default Shop;