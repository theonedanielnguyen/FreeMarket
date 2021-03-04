import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';

const AddressForm = () => {
    const user = useSelector(state => state.loggedInUser);
    const dispatch = useDispatch();

    const [ streetAddress, setStreetAddress ] = useState(user.streetAddress);
    const [ city, setCity ] = useState(user.city);
    const [ state, setState ] = useState(user.state);
    const [ zipCode, setZipCode ] = useState(user.zipCode);
    const [ editable, setEditable ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            ...user,
            streetAddress:streetAddress,
            city:city,
            state:state,
            zipCode:zipCode
        }
        try{
            const updatedUser = await axios.put('http://localhost:8000/api/users/'+user._id, newUser);
            dispatch({ type:'UPDATE_ADDRESS', payload: {updatedUser:updatedUser.data}})
        }
        catch (error) {
            console.log(error);
        }

        setEditable(false);
    }

    const handleCancel = () => {
        setStreetAddress(user.streetAddress);
        setCity(user.city);
        setState(user.state);
        setZipCode(user.zipCode);
        setEditable(false);
    }

    return (
        <>
            <Header>
                <Icon name='home' /> Address
            </Header>
            <Form onSubmit={handleSubmit}>
                <Segment raised>
                    {editable ? 
                        <>
                        <Form.Input fluid
                            name='streetAddress'
                            placeholder='Street Address'
                            value={streetAddress}
                            onChange={(e)=>setStreetAddress(e.target.value)}
                            type='text'
                        />
                        <Form.Input fluid
                            name='city'
                            placeholder='City'
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                            type='text'
                        />
                        <Form.Group widths='equal'>
                            <Form.Input fluid
                                name='state'
                                placeholder='State'
                                value={state}
                                onChange={(e)=>setState(e.target.value)}
                                type='text'
                            />
                            <Form.Input fluid
                                name='zipCode'
                                placeholder='Zip Code'
                                value={zipCode}
                                onChange={(e)=>setZipCode(e.target.value)}
                                type='number'
                            />
                        </Form.Group>
                        <Button.Group fluid>
                            <Button
                                type='button'
                                size='large'
                                content='Cancel'
                                color='grey'
                                onClick={()=>{handleCancel()}}
                            />
                            <Button.Or />
                            <Button
                                type='submit'
                                size='large'
                                content='Save Address'
                                color='green'
                            />
                        </Button.Group>
                        </>
                        :
                        <>
                        <Form.Input fluid readOnly
                            name='streetAddress'
                            placeholder='Street Address'
                            value={streetAddress}
                            onChange={(e)=>setStreetAddress(e.target.value)}
                            type='text'
                        />
                        <Form.Input fluid readOnly
                            name='city'
                            placeholder='City'
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                            type='text'
                        />
                        <Form.Group widths='equal'>
                            <Form.Input fluid readOnly
                                name='state'
                                placeholder='State'
                                value={state}
                                onChange={(e)=>setState(e.target.value)}
                                type='text'
                            />
                            <Form.Input fluid readOnly
                                name='zipCode'
                                placeholder='Zip Code'
                                value={zipCode}
                                onChange={(e)=>setZipCode(e.target.value)}
                                type='number'
                            />
                        </Form.Group>
                        <Button fluid
                            size='large'
                            content='Edit Address'
                            color='green'
                            onClick={()=>setEditable(true)}
                        />
                        </>
                    }
                    
                </Segment>
            </Form>
        </>
    )
}

export default AddressForm;