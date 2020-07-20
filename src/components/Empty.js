import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import '../styles/Empty.css'
import { Animated } from 'react-animated-css';

function Empty({count, returnToCats}) {
  return (
    count > 0 ?
    <div className="empty">
      <Animated animationIn="fadeIn" animationInDelay={200} animationInDuration={700} isVisible={true}>
        <h1><span>OOPS!</span><br></br>No more articles in this category.</h1>
        <p className="btn" onClick={()=>(returnToCats())}>categories</p>       
      </Animated>
    </div>
    :
    <div className="empty">
      <Animated animationIn="fadeIn" animationInDelay={200} animationInDuration={700} isVisible={true}>
        <h1><span>OOPS!</span><br></br>You've gone too bar back.</h1>
        <p className="btn" onClick={()=>(returnToCats())}>categories</p>       
      </Animated>
    </div>
  );
}

export default Empty;