import React, { useState } from 'react';

const LoginForm = ({ onSubmit, onSubmitAuth0 }) => {

    const [user, setUser] = useState({ email: '', password: '' });

    const handleUserChange = e => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };

      const handleOnSubmit = e => {
        e.preventDefault();
        if (!user.email || !user.password) return;
        onSubmit(user);
        setUser({ email: '', password: '' });
      };
  return (
    <form onSubmit={handleOnSubmit}>
      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="form2Example1" name="email" class="form-control" value={user.email} onChange={handleUserChange} />
        <label class="form-label" for="form2Example1">
          Email address
        </label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" name="password" class="form-control" value={user.password} onChange={handleUserChange} />
        <label class="form-label" for="form2Example2">
          Password
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <div class="d-flex justify-content-center align-items-center">
        <button type="submit" class="btn btn-block mb-3" style={{ backgroundColor: "#ff8080", color: "#ffffff" }}>
            Sign in
        </button>
      </div>

      {/* <!-- Register buttons --> */}
      <div class="text-center">
        <p>
          Sign in with ? <button class="btn btn-dark m-3" onClick={() => onSubmitAuth0()}>Auth0</button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
