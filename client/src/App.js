import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Router} from '@reach/router'

import Welcome from './views/Welcome.js';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import NewItem from './views/NewItem';
import StoreManagement from './views/StoreManagement';
import Cart from './views/Cart';
import Search from './views/Search';
import PersonalData from './views/PersonalData';
import EditItem from './views/EditItem';
import Shop from './views/Shop';
import OrderConfirmation from './views/OrderConfirmation';
import PastPurchases from './views/PastPurchases';
import PastSales from './views/PastSales';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/" />
        <Register path="/register" />
        <Login path="/login" />

        <Home path="/home" />
        <Cart path="/cart" />
        <StoreManagement path="/storeManagement" />
        <NewItem path="/newProduct" />
        <PersonalData path="/personalData" />
        <Search path='/search/:searchParameters' />
        <EditItem path='/products/:productID' />
        <Shop path='/shop/:shopID' />
        <OrderConfirmation path='/confirmation/:orderID' />
        <PastPurchases path='/pastPurchases' />
        <PastSales path='/pastSales' />
      </Router>
    </div>
  );
}

export default App;
