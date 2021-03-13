import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Form, Header, Segment } from 'semantic-ui-react';

const StoreInformationForm = () => {
    const shop = useSelector(state => state.userShop);
    const dispatch = useDispatch();

    const [ description, setDescription ] = useState(shop.description);
    const [ editable, setEditable ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newShop = {
            ...shop,
            description:description
        }

        try{
            const updatedShop = await axios.put('http://localhost:8000/api/shop/'+shop._id, newShop);
            dispatch({ type: 'UPDATE_SHOP', payload: {updatedShop:updatedShop.data}})
        }
        catch(error){
            console.log(error)
        }

        setEditable(false);
    }

    const handleCancel = () => {
        setDescription(shop.description);
        setEditable(false);
    }

    return (
        <Container>
            <Header size='large'>
                Store Description
            </Header>
            <Form onSubmit={handleSubmit}>
                <Segment raised>
                    {editable ? 
                        <>
                        <Form.Input fluid
                            name='description'
                            type='text'
                            placeholder='Store Description'
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                        <Button.Group fluid>
                            <Button
                                type='button'
                                size='large'
                                content='Cancel'
                                color='red'
                                onClick={()=>{handleCancel()}}
                            />
                            <Button.Or />
                            <Button
                                type='submit'
                                size='large'
                                content='Save Description'
                                color='green'
                            />
                        </Button.Group>
                        </>
                        :
                        <>
                        <Form.Input fluid readOnly
                            name='description'
                            placeholder='Store Description'
                            value={description}
                            type='text'
                        />
                        <Button fluid
                            size='large'
                            content='Edit Description'
                            color='green'
                            onClick={()=>setEditable(true)}
                        />
                        </>
                    }
                </Segment>
            </Form>
        </Container>
    )
}

export default StoreInformationForm;