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
    // True / False statement about whether the transaction data is being accessed for buying or purchasing review
    const [ transaction, setTransaction ] = useState({});
    const [ userItems, setUserItems ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        const loadTransaction = async () => {
            const APICall = await axios.get("http://localhost:8000/api/transaction/"+transactionID);
            const tempTransaction = APICall.data[0];
            // console.log(APICall.data[0]);
            if (!purchases) {
                // Parse item data for items
                for (const userID in tempTransaction.items) {
                    if (userID === user._id) {
                        setUserItems(tempTransaction.items[userID])
                    }
                }
                // Return only items of owner
            }
            setTransaction(tempTransaction);
            setLoaded(true);
        }
        loadTransaction();
    }, [transactionID, purchases, user])

    return (
        <Container centered>
        <Segment compact padded='very' raised>
        {loaded && purchases? Object.keys(transaction.items).map((item, key) => {
            return(
                <Container key={key}>
                    <Grid centered>
                        <Grid.Row>
                            <Item>
                                <Item.Content>
                                    <Item.Description style={{textAlign:'right'}}>
                                        <h3><strong>Ordered On:</strong> {moment(transaction.updatedAt).format('MM/ DD/yyyy')}</h3>
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
            :
            <Container>
                <Grid centered>
                    <Grid.Row>
                        <Item>
                            <Item.Content>
                                <Item.Description style={{textAlign:'right'}}>
                                    <h3><strong>Sold On:</strong> {moment(transaction.updatedAt).format('MM/ DD/yyyy')}</h3>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Grid.Row>
                    <Grid.Row>
                        <Item.Group divided style={{width:'60vw'}}>
                            {userItems.map((item, key) => {
                                return(
                                    <ProductCardHorizontal key={key} productID={item} deleteable={false}/>
                                )
                            })}
                        </Item.Group>
                    </Grid.Row>
                </Grid>
            </Container>
        }
        </Segment>
        </Container>
    )
}

export default TransactionDisplay