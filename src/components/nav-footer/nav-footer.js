import React, { Component } from 'react';
import {connect} from 'react-redux';
import './icon.js';


class NavFooter extends Component{
  render(){
    return(
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dashen"></use>
        </svg>
      </div>
    )
  }
}

export default connect(
  state=>{
    return{
      
    }
  }
)(NavFooter)