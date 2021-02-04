import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import ItemForm from '../components/ItemForm';
import TopNavBar from '../components/TopNavBar';
import { navigate } from '@reach/router';

const NewItem = () => {
    const user = useSelector(state=> state.loggedInUser);
    const shop = useSelector(state=> state.userShop);
    const dispatch = useDispatch();

    const createItem = async (item) => {
        try {
            const newItem = await axios.post('http://localhost:8000/api/item/new', item);
            let targetItem = newItem.data;
            user.createdItems.push(targetItem._id);
            shop.itemsSold.push(targetItem._id);
            const updatedUser = await axios.put('http://localhost:8000/api/users/'+user._id, user)
            const updatedShop = await axios.put('http://localhost:8000/api/shop/'+shop._id, shop)
            const newUser = updatedUser.data;
            const newShop = updatedShop.data;
            dispatch({ type: 'NEWITEM', payload: {newUser, newShop}});
            navigate('/storeManagement')
        }
        catch(error) {
            console.log(error);
        }
    }

    return(
        <Container fluid>
            <TopNavBar />
            <ItemForm 
                initialName = ""
                initialImageURL = ""
                initialPrice = ""
                initialDescription = ""
                onSubmit={createItem}
            />
        </Container>
    )
}

export default NewItem;