import React from 'react';
import axios from 'axios';
import { Button, Container, Grid, Icon, Item, Modal } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardHorizontal from '../components/ProductCardHorizontal';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import { navigate } from '@reach/router';

const ItemDisplayList = () => {
    const user = useSelector(state => state.loggedInUser);
    const shoppingCart = useSelector(state => state.shoppingCart);
    const dispatch = useDispatch();

    const [ addressModalOpen, setAddressModalOpen ] = React.useState(false);
    const [ paymentModalOpen, setPaymentModalOpen ] = React.useState(false);

    const checkout = async () => {
        const itemMap = {};
        const sellers = []
        for (let i = 0; i < shoppingCart.items.length; i++) {
            const databaseAccess = await axios.get("http://localhost:8000/api/item/" + shoppingCart.items[i]);
            const targetItem = databaseAccess.data[0];
            if (itemMap[targetItem.creator_id]) {
                itemMap[targetItem.creator_id].push(targetItem._id);
            }
            else {
                itemMap[targetItem.creator_id] = [targetItem._id];
                sellers.push(targetItem.creator_id);
            }
        }
        const newTransaction = {buyer_id: user._id, items: itemMap, total: shoppingCart.total};

        const transactionConfirmation = await axios.post('http://localhost:8000/api/transaction/new', newTransaction)

        //Insert for loop to iterate through the sellers and add to their sales list


        console.log(transactionConfirmation);

        dispatch({type: 'RESET_CART'})

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