import React, {useState, useEffect} from 'react';
import Empty from '../components/Empty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import '../styles/Homepage.css';
import '../styles/News.css'
import { Animated } from 'react-animated-css';

function News({choice, setHasNews, setHidden}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchFromAPI();
  }, []); // Only re-run the effect if news changes

  async function fetchFromAPI() {
    let newsArray = [];
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${choice}&apiKey=70324df6a5c54d618595f1b04b00d1d2`;
    let response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(url);
    // Error handling for null content. If article[content] is null, it does not get added to the array. Array is then set to state.
    for (var i = 0; i < json['articles'].length; i++) {
      if (json['articles'][i]['content'] !== null) {
        newsArray.push(json['articles'][i]);
      } else {
        continue;
      }
    }
    setNews(newsArray); 
  }

  // Re-render category portion of component by altering state.
  function returnToCats() {
    setNews([]);
    setHidden(false);
    setHasNews(false);
  }

  // For below:
  // If there are no articles, error loading module.
  // If there are articles, display them.
  // If counter is above the array's length, display message as such.
  return (
    news.length !== 0 ?
    ((currentIndex >= news.length || currentIndex < 0) ?
    <Empty count={currentIndex} returnToCats={returnToCats} />
     : 
    <div className="news-box">
      <div className="logo-content">
        <h1 id="newshub" onClick={()=>console.log(choice)}>react-news</h1>
        <FontAwesomeIcon id="logo" icon={faNewspaper}/>
      </div>
      <div className="news-intro">
        <h1 className="title">{news[currentIndex]['title'].split(" - ")[0] ?? "No title provided."}</h1>
        <hr></hr>
        <div className="small-text">
          <p><span>SOURCE</span>: {news[currentIndex]['source']['name'] ?? news[currentIndex]['title'].split(" - ")[1]}</p>
          <p><span>PUBLISHED BY</span>: {news[currentIndex]['author'] ?? 'Unknown author'}</p>
        </div>
        <div className="article-img" style={{backgroundImage:`url(${news[currentIndex]['urlToImage']})`}}/>
        <Animated animationIn="flipInX" animationInDelay={500} animationInDuration={1500} isVisible={true}>
          <div className="buttons">
            {currentIndex > 0 ? <p className="btn" onClick={()=>(setCurrentIndex(currentIndex-1))}>back</p> : null}
            {/* <Link to="/form" className="btn">categories</Link>  */}
            <p className="btn" onClick={()=>(returnToCats())}>categories</p>       
            <p className="btn" onClick={()=>(setCurrentIndex(currentIndex+1))}>next</p>
          </div>
        </Animated>
      </div>
      <div className="news-content">
        <div className="news-content-text" id="content">
          <FontAwesomeIcon id="icon" icon={faNewspaper} />
          <p className="para">{news[currentIndex]['content']}</p>
          {/* Unfortunate addition to this application -- public API now requires a premium subscription to allow for full content. 
          However, a link to the full page URL is now provided (hence the a-tag).*/}
          <p className="interested">interested?</p>
          <a href={news[currentIndex]['url']} target="_blank">READ MORE</a>
        </div>
      </div>
    </div>
    ) :
    null
  );
}

export default News;