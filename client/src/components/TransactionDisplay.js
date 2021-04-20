import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Grid, Item, Segment } from 'semantic-ui-react';
import ProductCardHorizontal from './ProductCardHorizontal';

const TransactionDisplay = (props) => {
    const transactionID = props.transactionID;
    const [ transaction, setTransaction ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        const loadTransaction = async () => {
            const APICall = await axios.get("http://localhost:8000/api/transaction/"+transactionID);
            setTransaction(APICall.data[0]);
            // console.log(APICall.data[0]);
            setLoaded(true);
        }
        loadTransaction();
    }, [transactionID])

    return (
        <Container centered>
        <Segment compact padded='very' raised>
        {loaded && Object.keys(transaction.items).map((item, key) => {
            return(
                <Container>
                    <Grid centered>
                        <Grid.Row>
                            <Item.Group divided style={{width:'60vw'}}>
                                {transaction.items[item].map((subItem, subKey) => {
                                    return(
                                        <ProductCardHorizontal key={subKey} productID={subItem} deleteable={false}/>
                                    )
                                })}
                            </Item.Group>
                        </Grid.Row>
                    </Grid>
                </Container>
            )
        })
        }
        </Segment>
        </Container>
    )
}

export default TransactionDisplay