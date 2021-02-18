import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import TopNavBar from '../components/TopNavBar';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import axios from 'axios';
import ItemForm from '../components/ItemForm';

const EditItem = (props) => {
    const {productID} = props;
    const user = useSelector(state => state.loggedInUser);
    const [ product, setProduct ] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/item/'+productID)
            .then(res => {
                const productData = res.data[0];
                if (productData.creator_id !== user._id) {
                    navigate('/storeManagement');
                }
                else {
                    setProduct(productData)
                    setLoaded(true);
                }
            })
            .catch(err => console.log(err))
    })

    const updateItem = async (item) => {
        try {
            const updatedItem = await axios.put('http://localhost:8000/api/item/'+productID, item);
            console.log("Successfully updated item: " + updatedItem.data.name)
            navigate('/storeManagement');
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <Container fluid>
            <TopNavBar />
            {loaded && <ItemForm
                initialName = {product.name}
                initialImageURL = {product.imageURL}
                initialPrice = {product.price}
                initialDescription = {product.description}
                onSubmit={updateItem}
            />}
        </Container>
    )
}

export default EditItem;