import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { rootSlice } from '../../slice';

import LoginForm from '../../components/Login/LoginForm';

const Login = () => {
  
  const history = useHistory();
  const { loginWithRedirect } = useAuth0();

  const onSubmit = formValues => {
    const { login } = rootSlice;
    login(formValues);
    history.push('/')
  };

  const onSubmitAuth0 = () => {
    loginWithRedirect();
  };
 
  return (
    <section className="h-100" style={{ backgroundColor: "#ff8080" }}>
    <div className="container p-5" style={{ height: "55rem" }}>
        <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
          <div className="col-6">
          <div className="d-flex justify-content-center">
            <h3 className="fw-bold mb-5 mt-2 pt-1">Welcome to the WizeStore!</h3>
          </div>
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <div className="row g-0 mt-5">
                <LoginForm onSubmit={onSubmit} onSubmitAuth0={onSubmitAuth0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
};

export default Login;
