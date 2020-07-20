import React, {useState} from 'react';
import News from '../components/News';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { Animated } from 'react-animated-css';
import '../styles/Homepage.css';
import '../styles/Form.css';

function Form() {

  // Mobile viewport hack to avoid address bars.
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  // Choice sent to News components in order to request from API by category.
  const [choice, setChoice] = useState("");
  // Ternaries used to hide options onClick & display loading bar. 
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);
  // State used to conditionally render whether or not a user has chosen a category.
  const [hasNews, setHasNews] = useState(false);
  // Article response variable

  // Sends choice to news component, hides form -> renders Loading components -> renders news component on load completion.
  function chooseAndRender(userChoice) {
    setChoice(userChoice);
    // fetchFromAPI();
    setHidden(true);
    setTimeout(() => {
      setShown(true);
      setTimeout(() => {
        setHasNews(true);
        setShown(false);
      }, 2800);
    }, 150);
  }

  return (
    <div>
      {!hasNews ? 
        <div className="homepage dark">
        <div className="logo-content">
          <h1 id="newshub" onClick={()=>console.log(choice)}>react-news</h1>
          <FontAwesomeIcon id="logo" icon={faNewspaper}/>
        </div>
        {/* If hasNews is false, render the form. Else, render the news component. */}
        {shown ? <Loading /> : null}
        <div className={`form-content ${hidden ? "hidden" : ""}`}>
          <Animated animationIn="fadeIn" animationInDelay={200} animationInDuration={800} isVisible={true}>
            <p className="cta">What would you like to read about today?</p>
          </Animated>
          <Animated animationIn="flipInX" animationInDelay={450} animationInDuration={1000} isVisible={true}>
          <p className="chip" onClick={()=>chooseAndRender("business")}>business</p>
          </Animated>
          <Animated animationIn="flipInX" animationInDelay={550} animationInDuration={1000} isVisible={true}>
          <p className="chip" onClick={()=>chooseAndRender("entertainment")}>entertainment</p>
          </Animated>
          <Animated animationIn="flipInX" animationInDelay={650} animationInDuration={1000} isVisible={true}>
          <p className="chip" onClick={()=>chooseAndRender("health")}>health</p>
          </Animated>
          <Animated animationIn="flipInX" animationInDelay={750} animationInDuration={1000} isVisible={true}>
          <p className="chip" onClick={()=>chooseAndRender("science")}>science</p>
          </Animated>
          <Animated animationIn="flipInX" animationInDelay={850} animationInDuration={1000} isVisible={true}>
          <p className="chip" onClick={()=>chooseAndRender("sports")}>sports</p>
          </Animated>
          <Animated animationIn="flipInX" animationInDelay={950} animationInDuration={1000} isVisible={true}>
          <p className="chip" onClick={()=>chooseAndRender("technology")}>technology</p>
          </Animated>
        </div>
        </div>
        :
        <News choice={choice} setHasNews={setHasNews} setHidden={setHidden} />
      }
    </div>
  );
}

export default Form;