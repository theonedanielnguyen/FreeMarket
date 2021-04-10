import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

const TransactionDisplay = (props) => {
    const transactionID = props.transactionID;
    const [ transaction, setTransaction ] = useState({});

    useEffect(() => {
        const loadTransaction = async () => {
            const APICall = await axios.get("http://localhost:8000/api/transaction/"+transactionID);
            setTransaction(APICall.data);
        }
    }, [transactionID])

    return (
        <Container fluid>

        </Container>
    )
}

export default TransactionDisplay