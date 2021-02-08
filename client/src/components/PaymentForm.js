import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';

const PaymentForm = () => {
    const payment = useSelector(state=>state.userPayment);
    const dispatch = useDispatch();

    const [ cardNumber, setCardNumber ] = useState(payment.cardNumber);
    const [ expirationDate, setExpirationDate ] = useState(payment.expirationDate);
    const [ securityCode, setSecurityCode ] = useState(payment.securityCode);

    return (
        <>
            <Header>
                <Icon name='credit card' /> Payment Information
            </Header>
            <Form>
                <Segment raised>
                    <Form.Input fluid
                        name='cardNumber'
                        placeholder='Card Number'
                        value={cardNumber}
                        onChange={(e)=>setCardNumber(e.target.value)}
                        type='number'
                    />
                    <Form.Group widths='equal'>
                        <Form.Input fluid
                            name='expirationDate'
                            placeholder='Expiration Date'
                            value={expirationDate}
                            onChange={(e)=>setExpirationDate(e.target.value)}
                            type='date'
                        />
                        <Form.Input fluid
                            name='security code'
                            placeholder='Security Code'
                            value={securityCode}
                            onChange={(e)=>setSecurityCode(e.target.value)}
                            type='number'
                        />
                    </Form.Group>
                    <Button fluid
                        type='submit'
                        size='large'
                        content='Save Payment'
                        color='green'
                    />
                </Segment>
            </Form>
        </>
    )
}

export default PaymentForm;