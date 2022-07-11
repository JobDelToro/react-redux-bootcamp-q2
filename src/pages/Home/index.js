import React from 'react';
import { Link } from 'react-router-dom';

// Image
import shopping from '../../assets/online-shopping.jpg';

const Home = () => {
  return (
    
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundBlendMode: "screen",
          backgroundColor:"#6c757d",
          // color: #fafafa;
          backgroundImage: `url(${shopping})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "50rem"
        }}
        >
        <div className="align-items-center">
          <h1>Welcome to WizeStore!</h1>
          <div className="d-flex justify-content-center">
            <Link className="btn btn-danger btn-large align-self-center" to='/products'>Browse our products</Link>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
