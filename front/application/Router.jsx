import React from 'react'
import {
  BrowserRouter ,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Test from './components/Test'
export default (
  <BrowserRouter>
    <Route exact name="home" path="/" component={Home}/>
    <Route name="test" path="/test" component={Test}/>
  </BrowserRouter>
)
