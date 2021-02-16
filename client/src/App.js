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
      </Router>
    </div>
  );
}

export default App;
