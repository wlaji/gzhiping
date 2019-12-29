import React, { Component } from 'react';
import './myIcon.less';
export default class MyIcon extends Component{
  render(){
    return(
      <div>
         <svg className="icon" aria-hidden="true">
              <use xlinkHref={`#icon-${this.props.type}`}></use>
         </svg>
      </div>
    )
  }
}