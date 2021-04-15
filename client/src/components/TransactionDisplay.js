import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import ProductCardHorizontal from './ProductCardHorizontal';

const TransactionDisplay = (props) => {
    const transactionID = props.transactionID;
    const [ transaction, setTransaction ] = useState({});

    useEffect(() => {
        const loadTransaction = async () => {
            const APICall = await axios.get("http://localhost:8000/api/transaction/"+transactionID);
            setTransaction(APICall.data[0]);
            console.log(APICall.data[0]);
        }
        loadTransaction();
    }, [transactionID])

    return (
        <Segment>
            {Object.keys(transaction.items).map((item, key) => {
                return(
                    transaction.items[item].map((subItem, subKey) => {
                        return(
                            <ProductCardHorizontal key={subKey} productID={subItem} deleteable={false}/>
                        )
                    })
                )
            })
            }
        </Segment>
    )
}

export default TransactionDisplay