import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { logout } from '../slice/authSlice';

const Logout = () => {

    const dispatch = useDispatch();
    const logoutAuth0 = useAuth0().logout;

  return (
    <button className="btn btn-dark" onClick={() => { dispatch(logout()); logoutAuth0(); }}>Log Out</button>
  );
};

export default Logout;
