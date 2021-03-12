import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

const StoreInformationForm = () => {
    const shop = useSelector(state => state.userShop);

    const [ description, setDescription ] = useState(shop.description);
    const [ editable, setEditable ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const handleCancel = () => {
        setDescription(shop.description);
        setEditable(false);
    }

    return (
        <>
            <Header size='large'>
                Store Information
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
        </>
    )
}

export default StoreInformationForm;