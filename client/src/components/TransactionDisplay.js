import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import ProductCardHorizontal from './ProductCardHorizontal';

const TransactionDisplay = (props) => {
    const transactionID = props.transactionID;
    const [ transaction, setTransaction ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        const loadTransaction = async () => {
            const APICall = await axios.get("http://localhost:8000/api/transaction/"+transactionID);
            setTransaction(APICall.data[0]);
            console.log(APICall.data[0]);
            setLoaded(true);
        }
        loadTransaction();
    }, [transactionID])

    return (
        <Container>
        {loaded && Object.keys(transaction.items).map((item, key) => {
            return(
                <Segment>
                {transaction.items[item].map((subItem, subKey) => {
                    return(
                        <ProductCardHorizontal key={subKey} productID={subItem} deleteable={false}/>
                    )
                })}
                </Segment>
            )
        })
        }
        </Container>
    )
}

export default TransactionDisplay