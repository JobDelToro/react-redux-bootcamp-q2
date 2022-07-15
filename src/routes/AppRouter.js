import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ProtectedAuthRoute from './ProtectedAuthRoute';
import ProtectedLoginRoute from './ProtectedLoginRoute';

import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Header from '../components/Header';

export const AppRouter = () => {
  
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedLoginRoute isAuthenticated={isAuthenticated} exact path='/login' component={Login} />
        <ProtectedAuthRoute exact path="/products" isAuthenticated={isAuthenticated} component={Products} />
        <ProtectedAuthRoute exact path="/cart" isAuthenticated={isAuthenticated} component={Cart} />
      </Switch>
    </Router>
  );
};
