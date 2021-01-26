import 'semantic-ui-css/semantic.min.css';
import './App.css';
import {Router} from '@reach/router'

import Welcome from './views/Welcome.js';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/" />
        <Register path="/register" />
        <Login path="/login" />

        <Home path="/home" />
      </Router>
    </div>
  );
}

export default App;
