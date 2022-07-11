import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedAuthRoute from './ProtectedAuthRoute';

import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Header from '../components/Header';

export const AppRouter = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/login" component={Login} />
        <ProtectedAuthRoute exact path="/products" component={Products} />
        <ProtectedAuthRoute exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};
