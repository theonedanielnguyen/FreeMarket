import axios from 'axios';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Container, Grid, Item, Segment } from 'semantic-ui-react';
import ProductCardHorizontal from './ProductCardHorizontal';
import { useSelector } from 'react-redux';

const TransactionDisplay = (props) => {
    const user = useSelector(state => state.loggedInUser);
    const transactionID = props.transactionID;
    const purchases = props.purchases;
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
                            <Item>
                                <Item.Content>
                                    <Item.Description style={{textAlign:'right'}}>
                                        <h3><strong>Ordered On:</strong> {moment(transaction.updatedAt).format('MM/DD/yyyy')}</h3>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Grid.Row>
                        <Grid.Row>
                            <Item.Group divided style={{width:'60vw'}}>
                                {transaction.items[item].map((subItem, subKey) => {
                                    return(
                                        <ProductCardHorizontal key={subKey} productID={subItem} deleteable={false}/>
                                    )
                                })}
                            </Item.Group>
                        </Grid.Row>
                        <Grid.Row style={{textAlign:'right'}}>
                                <Grid.Column>
                                    <Item style={{marginRight: '20vw'}}>
                                    <Item.Content>
                                        <Item.Description style={{textAlign:'right'}}>
                                            <h3><strong>Total:</strong> $ {transaction.total}</h3>
                                        </Item.Description>
                                    </Item.Content>
                                    </Item>
                                </Grid.Column>
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