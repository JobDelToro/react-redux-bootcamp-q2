import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Welcome to WizeStore!</h1>
      <p>
        Browse our <Link to='/products'>products</Link>
      </p>
    </div>
  );
};
