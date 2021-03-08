import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Header, Loader } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Shop = (props) => {
    const shopID = props.shopID;
    const [ shopItems, setShopItems ] = useState([])
    const [ shopOwner, setShopOwner ] = useState('')
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        const pageLoader = async () => {
            try{
                const targetShop = await axios.get('http://localhost:8000/api/shop/' + shopID);
                const shop = targetShop.data[0];
                const newItems = shop.itemsSold;
                const shopOwner = await axios.get('http://localhost:8000/api/users/'+ shop.owner_id);
                const ownerData = shopOwner.data[0];
                setShopOwner(`${ownerData.firstName} ${ownerData.lastName}`)
                setShopItems(newItems);
                setLoaded(true);
            }
            catch(err) {
                console.log(err);
            }
        }

        pageLoader()
    }, [shopID])
    return(
        <Container fluid>
            <TopNavBar />
            <Header size='huge'>
                {shopOwner}'s Shop
            </Header>
            {loaded?
                <ItemDisplay items={shopItems} />
                :
                <Loader indeterminate size='massive' />
            }
        </Container>
    )
}

export default Shop;