import React from 'react';
import '../styles/Loading.css'
import { Animated } from 'react-animated-css';

function Loading() {

  // Simple loading bar animation. Triggered on component render. (DEPRECATED.)
  // function fillBar(seconds) {
  //   const loading = document.querySelector('.progress');
  //   loading.style.transition = `${seconds}s linear width`;
  //   loading.style.width = '99.5%';
  // }

  return (
    <div className="loading-box">
      <Animated animationIn="flipInX" animationInDelay={200} animationInDuration={1000} isVisible={true}>
        <p>One moment<br></br><span>react-news is thinking...</span></p>
      </Animated>
      <Animated animationIn="flipInX" animationInDelay={350} animationInDuration={1000} isVisible={true}>
        <div className="loading">
          <div className="progress" />
        </div>      
      </Animated>
    </div>
  );
}

export default Loading;