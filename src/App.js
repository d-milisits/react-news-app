import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Redirect from="/" to="/home" />
          <Route exact path="/home" component={Homepage}>
            <Homepage />
          </Route>
          <Route exact path="/form" component={Form}>
            <Form />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
