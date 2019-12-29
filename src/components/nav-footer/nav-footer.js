import React, { Component } from 'react';
import {connect} from 'react-redux';
import MyIcon from '../myIcon/myIcon'
class NavFooter extends Component{
  render(){
    return(
      <div>
         <MyIcon type="laoban" /> 
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