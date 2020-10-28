import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebProducts from './components/pages/WebProducts';
import Marketing from './components/pages/Marketing';
import SignUp from './components/pages/SignUp';
import RestaurantDemo from './components/pages/RestaurantDemo';


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/web-products' component={WebProducts} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/restaurant-demo' component={RestaurantDemo} />
        </Switch>
      </Router>
  );
}

export default App;
