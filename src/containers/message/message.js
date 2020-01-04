import React, { Component } from 'react';
import {connect} from 'react-redux'

class Message extends Component{
  render(){
    return(
      <div style={{paddingTop:'45px',paddingBottom:'50px'}}>
        Message
      </div>
    )
  }
}

export default connect(
  state=>{
    return{
      
    }
  }
)(Message)