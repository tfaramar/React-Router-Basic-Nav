import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>  
        <Link to="/contact">
          <a>Contact</a>
        </Link>
          
      </div>
    </div>
  );
};

export default Navigation;
