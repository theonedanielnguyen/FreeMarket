import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Header, Icon, Segment } from 'semantic-ui-react';

const PaymentForm = () => {
    const payment = useSelector(state=>state.userPayment);
    const dispatch = useDispatch();

    const [ cardNumber, setCardNumber ] = useState(payment.cardNumber);
    const [ expirationDate, setExpirationDate ] = useState(moment(payment.expirationDate).format('yyyy-MM'));
    const [ securityCode, setSecurityCode ] = useState(payment.securityCode);
    const [ editable, setEditable ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPayment = {
            ...payment,
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            securityCode: securityCode,
        }

        try {
            const updatedPayment = await axios.put('http://localhost:8000/api/payment/'+payment._id, newPayment);
            dispatch({ type: 'UPDATE_PAYMENT', payload: {updatedPayment:updatedPayment.data}})
        }
        catch (error) {
            console.log(error);
        }

        setEditable(false);
    }

    const handleCancel = () => {
        setCardNumber(payment.cardNumber);
        setExpirationDate(moment(payment.expirationDate).format('yyyy-MM'));
        setSecurityCode(payment.securityCode);
        setEditable(false);
    }

    return (
        <>
            <Header>
                <Icon name='credit card' /> Payment Information
            </Header>
            <Form onSubmit={handleSubmit}>
                <Segment raised>
                    {editable ? 
                        <>
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
                                type='month'
                            />
                            <Form.Input fluid
                                name='security code'
                                placeholder='Security Code'
                                value={securityCode}
                                onChange={(e)=>setSecurityCode(e.target.value)}
                                type='number'
                            />
                        </Form.Group>
                        <Button.Group fluid>
                            <Button
                                type='button'
                                size='large'
                                content='Cancel'
                                color='grey'
                                onClick={handleCancel}
                            />
                            <Button.Or />
                            <Button
                                type='submit'
                                size='large'
                                content='Save Payment'
                                color='green'
                            />
                        </Button.Group>
                        </>
                        :
                        <>
                        <Form.Input fluid readOnly
                            name='cardNumber'
                            placeholder='Card Number'
                            value={cardNumber}
                            onChange={(e)=>setCardNumber(e.target.value)}
                            type='number'
                        />
                        <Form.Group widths='equal'>
                            <Form.Input fluid readOnly
                                name='expirationDate'
                                placeholder='Expiration Date'
                                value={expirationDate}
                                onChange={(e)=>setExpirationDate(e.target.value)}
                                type='month'
                            />
                            <Form.Input fluid readOnly
                                name='security code'
                                placeholder='Security Code'
                                value={securityCode}
                                onChange={(e)=>setSecurityCode(e.target.value)}
                                type='number'
                            />
                        </Form.Group>
                        <Button fluid
                            size='large'
                            content='Edit Payment Information'
                            color='green'
                            onClick={() => setEditable(true)}
                        />
                        </>
                    }
                </Segment>
            </Form>
        </>
    )
}

export default PaymentForm;