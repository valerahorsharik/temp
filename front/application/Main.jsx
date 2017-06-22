
import '../css/bootstrap.min.css'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router ,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Test from './components/Test'
ReactDOM.render(
  <Router>
    <div>
      <Header/>
      <Route exact name="home" path="/" component={Home}/>
      <Route name="test" path="/test" component={Test}/>
      <Route name="test2" path="/test2" component={()=><div>asdasd</div>}/>
      <div id="footer">Hey, im footer</div>
    </div>
  </Router>
  ,
  document.getElementById('app')
);
