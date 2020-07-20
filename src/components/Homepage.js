import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';
import '../styles/Homepage.css';

function Homepage() {

  // Mobile viewport hack to avoid address bars.
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <div className="homepage">
      <div className="logo-content">
        <h1 id="newshub">react-news</h1>
        <FontAwesomeIcon id="logo" icon={faNewspaper}/>
      </div>
      <FontAwesomeIcon id="logo-big" icon={faNewspaper}/>
        <div className="homepage-content">
          <div className="homepage-title">
            <Animated animationIn="fadeInUp" animationInDelay={350} animationInDuration={600} isVisible={true}>
              <h1>Your new<br></br>source of news.</h1>
            </Animated>
          </div>
          <Animated animationIn="fadeInUp" animationInDelay={500} animationInDuration={600} isVisible={true}>
            <p>Daily U.S. news at the tips of your fingers. Click below to begin reading and find our more about your favorite topics!</p>
            <Link to="/form">read now</Link>          
          </Animated>
        </div>
    </div>
  );
}

export default Homepage;