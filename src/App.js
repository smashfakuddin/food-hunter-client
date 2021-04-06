import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import Admin from './components/Admin/Admin';
import AddProduct from './components/AddProduct/AddProduct';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h2>name: {loggedInUser.email}</h2>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/add-product">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/product/:name">
            <CheckOut></CheckOut>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
