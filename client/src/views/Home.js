// import { navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Header } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Home = () => {
    const [ items, setItems ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    const getItems = async () => {
        const idSet = [];
        let pulledItems = [];
        try {
            const count = await axios.get('http://localhost:8000/api/item/count');
            if (parseInt(count.data)<=10) {
                pulledItems = await axios.get('http://localhost:8000/api/item/all')
                pulledItems.data.forEach(item => idSet.push(item._id));
            }
            else {
                while (idSet.length < 10) {
                    pulledItems = await axios.get('http://localhost:8000/api/item/random/'+(10-idSet.length))
                    //Need to edit here to ensure only UNIQUE items are returned.
                    //If else statement using Array.includes()
                    //POTENTIAL ISSUE TO BE FIXED ONCE ENOUGH ITEMS ARE ENTERED FOR THIS TO TRIGGER!!!
                    pulledItems.data.forEach(item => !idSet.includes(item._id)?idSet.push(item._id): "")
                }
            }
            setItems(idSet);
            setLoaded(true);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <Container fluid>
            <TopNavBar />
            <Header size='large'>Some Offered Items</Header>
            {loaded && <ItemDisplay items={items}/> }
        </Container>
    )
}

export default Home;