import React, { Component } from 'react';
import {Switch,HashRouter,BrowserRouter,Route,Redirect,withRouter}  from 'react-router-dom'
import home from '../pages/home/home'
import city from '../pages/city/city'

class RouterConfig extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/city/:id" component={city}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

withRouter(RouterConfig)
export default RouterConfig