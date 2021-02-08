import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';

const AddressForm = () => {
    const user = useSelector(state => state.loggedInUser);
    const dispatch = useDispatch();

    const [ streetAddress, setStreetAddress ] = useState(user.streetAddress);
    const [ city, setCity ] = useState(user.city);
    const [ state, setState ] = useState(user.state);
    const [ zipCode, setZipCode ] = useState(user.zipCode);

    return (
        <>
            <Header>
                <Icon name='home' /> Address
            </Header>
            <Form>
                <Segment raised>
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
                    <Button fluid
                        type='submit'
                        size='large'
                        content='Save Address'
                        color='green'
                    />
                </Segment>
            </Form>
        </>
    )
}

export default AddressForm;