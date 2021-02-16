import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { Container, Segment } from 'semantic-ui-react';
import ItemDisplay from '../components/ItemDisplay';
import TopNavBar from '../components/TopNavBar';

const Search = (props) => {
    const query = props.searchParameters;
    const [ searchItems, setSearchItems ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);


    useEffect(() => {
        const loadQuery = async () => {
            const searchResults = await axios.get('http://localhost:8000/api/item/search/'+query);
            if (searchResults.data.length > 0) {
                const pulledIDs = searchResults.data.map(item => item._id);
                setSearchItems(pulledIDs);
                setLoaded(true);
            }
            else {
                setLoaded(false);
            }
        }
        loadQuery();
    }, [query]);

    return (
        <Container fluid>
            <TopNavBar />
            {loaded ? 
                <>
                    <Segment>
                        Searched for... "{query}"
                    </Segment>
                    <ItemDisplay items={searchItems}/>
                </> 
                : 
                <Segment>
                    Sorry, we can't seem to find anything containing the phrase "{query}". &nbsp;Please try again.
                </Segment>
                }
        </Container>
    )
}

export default Search;