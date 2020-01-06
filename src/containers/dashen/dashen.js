import React, { Component } from 'react';
import {connect} from 'react-redux'
import UserList from '../../components/user-list/user-list'
import {getUserList} from '../../redux/actions'

class Dashen extends Component{

  componentDidMount(){
    this.props.getUserList('dashen');
  }

  render(){
    return(
      <div>
        <UserList userList={this.props.userList}></UserList>
      </div>
    )
  }
}

export default connect(
  state=>{
    return{
      userList:state.userList
    }
  },
  {getUserList}
)(Dashen)