import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Header } from 'semantic-ui-react';

const StoreInformationForm = () => {
    const shop = useSelector(state => state.userShop);

    const [ description, setDescription ] = useState(shop.description);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header size='large'>
                Store Information
            </Header>
            <Form onSubmit={handleSubmit}>

            </Form>
        </>
    )
}

export default StoreInformationForm;