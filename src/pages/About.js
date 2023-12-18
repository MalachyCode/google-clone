import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='home'>
      <h1>This is homepage</h1>

      <div className='home__header'>
        <div className='home__headerLeft'>
          <Link to={'/about'}>about</Link>
          {/* Link */}
          {/* Link */}
        </div>
        <div className='home__headerRight'>
          {/* Link */}
          {/* Link */}
          {/* Icon */}
          {/* Avatar */}
        </div>
      </div>
      <div className='home__body'></div>
    </div>
  );
}

export default About;
