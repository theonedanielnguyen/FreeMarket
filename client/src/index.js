import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  loggedInUser: null,
  userPayment: null,
  userShop: null,
  shoppingCart: {
    total: 0,
    items: [],
  }
};

/* Calculates new app state. We wont modify existing state directly */
function reducer(state = initialState, action) {
  switch(action.type) {
    /*case 'TOGGLE DARK MODE':
        return {
          ...state,
          darkMode: !state.darkMode,
        }
    */
    case 'REGISTER':
      return {
        ...state,
        loggedInUser: action.payload.targetUser,
        userShop: action.payload.targetShop,
        userPayment: action.payload.targetPayment,
      }

    case 'LOGIN':
      return {
        state,
        loggedInUser: action.payload.user,
        userShop: action.payload.shop,
        userPayment: action.payload.payment,
        shoppingCart: {
          total: action.payload.userCart.total,
          items: action.payload.userCart.items,
        },
      }

    case 'NEWITEM':
      return {
        state,
        loggedInUser: action.payload.newUser,
        userShop: action.payload.newShop,
      }

    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        shoppingCart: {
          total: action.payload.newTotal,
          items: action.payload.newItems,
        }
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        shoppingCart: {
          total: action.payload.newTotal,
          items: action.payload.newItems,
        }
      }

    case 'LOGOUT':
      return {
        ...initialState
      }
    
    case 'UPDATE_ADDRESS':
      return {
        state,
        loggedInUser: action.payload.updatedUser,
      }

    case 'UPDATE_PAYMENT':
      return {
        ...state,
        userPayment: action.payload.updatedPayment,
      }

    default:
      return state;
  }
}

//Global app store
const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    {/* Connecting the store to the app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
