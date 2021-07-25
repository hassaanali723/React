import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import One from './One';
import Two from './Two';
import NoMatch from './NoMatch';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route  path="/Two">
      <Two/>
    </Route>

    <Route  path="/One">
      <One/>
    </Route>

    <Route exact path="/">
      <App/>
    </Route>

    <Route >
      <NoMatch/>
      
    </Route>

    </Switch>

    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
