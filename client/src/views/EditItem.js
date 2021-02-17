import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import TopNavBar from '../components/TopNavBar';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditItem = (props) => {
    const {productID} = props;
    const user = useSelector(state => state.loggedInUser);
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/item/'+productID)
            .then(res => {
                const productData = res.data[0];
                if (productData.creator_id !== user._id) {
                    navigate('/storeManagement');
                }
                else {
                    setProduct(productData)
                }
            })
            .catch(err => console.log(err))
    })

    return (
        <Container fluid>
            <TopNavBar />

        </Container>
    )
}

export default EditItem;