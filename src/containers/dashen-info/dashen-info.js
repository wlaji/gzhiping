import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  NavBar,
  List,
  InputItem,
  TextareaItem,
  Button
}from 'antd-mobile'
import HeaderSelector from '../../components/header-selector/header-selector'

class DashenInfo extends Component {
  render(){
    return(
      <div>
        <NavBar mode="dark">大神信息完善</NavBar>
        <HeaderSelector/>
        <List>
          <InputItem placeholder="请输入求职岗位">求职岗位:</InputItem>
          <TextareaItem title="个人介绍" rows={3}/>
          <Button type="primary">保存</Button>
        </List>
      </div>
    )
  }
}

export default connect(
  state=>{
    return {
      
    }
  },
  {}
)(DashenInfo)