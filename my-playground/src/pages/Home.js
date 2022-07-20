import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <Link to={'/userefplayground'}>to useRef</Link>
    </React.Fragment>
  );
};

export default Home;
