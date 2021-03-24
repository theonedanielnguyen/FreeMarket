import React from 'react';
import { Button, Container, Grid, Icon, Item, Modal } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardHorizontal from '../components/ProductCardHorizontal';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { navigate } from '@reach/router';

const ItemDisplayList = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    const [ addressModalOpen, setAddressModalOpen ] = React.useState(false);
    const [ paymentModalOpen, setPaymentModalOpen ] = React.useState(false);

    const checkout = async () => {
        //Create a log of the transaction?

        //Remove items from cart
        dispatch({type: 'RESET_CART'})
        //Redirect to home page.
        navigate('/home')
    }

    return (
        <Container fluid style={{paddingTop:'1em', paddingRight: '20px', paddingLeft:'20px'}}>
            <Grid centered style={{marginTop:'1em'}}>
                <Grid.Row>
                    <Item.Group divided style={{width:'60vw'}}>
                        {shoppingCart.items.map((item, index) => {
                            return (
                                <ProductCardHorizontal productID={item} key={index} /> 
                            )
                        })}
                    </Item.Group>
                </Grid.Row>
                <Grid.Row style={{textAlign:'right'}}>
                    <Grid.Column>
                        <Item style={{marginRight: '20vw'}}>
                            <Item.Content>
                                <Item.Description style={{textAlign:'right'}}>
                                    <h3><strong>Total:</strong> $ {shoppingCart.total}</h3>
                                </Item.Description>
                            </Item.Content>
                            <Item.Extra>
                                <Button floated='right' color='twitter' style={{marginTop: '1em'}} onClick={() => setAddressModalOpen(true)}>
                                    Checkout
                                </Button>
                            </Item.Extra>
                        </Item>
                    </Grid.Column>
                    
                </Grid.Row>
                
            </Grid>
            <Modal
                onClose={() => setAddressModalOpen(false)}
                onOpen={() => setAddressModalOpen(true)}
                open={addressModalOpen}
                dimmer='blurring'
            >
                <Modal.Header>Confirm Personal Information</Modal.Header>
                <Modal.Content>
                    <AddressForm />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setAddressModalOpen(false)} color='red'>Cancel</Button>
                    <Button onClick={() => setPaymentModalOpen(true)} color='green'>Looks good! <Icon name='right chevron' /></Button>
                </Modal.Actions>

                {/*Sub Modal*/}
                <Modal
                    onClose={()=>setPaymentModalOpen(false)}
                    open={paymentModalOpen}
                    dimmer='blurring'
                >
                    <Modal.Content>
                        <PaymentForm />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => {setAddressModalOpen(false); setPaymentModalOpen(false)}} color='red'>Cancel</Button>
                        <Button onClick={() => setPaymentModalOpen(false)} color='yellow'>Back</Button>
                        <Button onClick={() => checkout()} color='green'>Checkout</Button>
                    </Modal.Actions>
                </Modal>
            </Modal>
        </Container>
    )
}

export default ItemDisplayList;