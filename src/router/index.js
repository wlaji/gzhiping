import React, { Component } from 'react';
import {Switch,BrowserRouter,Route,Redirect,withRouter}  from 'react-router-dom'
import Main from '../pages/main/main'
import Login from '../pages/login/login'
import Register from '../pages/register/register'

class RouterConfig extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route component={Main}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

withRouter(RouterConfig)
export default RouterConfig