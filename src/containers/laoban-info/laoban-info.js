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

class LaobanInfo extends Component {
  render(){
    return(
      <div>
        <NavBar mode="dark">老板信息完善</NavBar>
        <HeaderSelector/>
        <List>
          <InputItem placeholder="请输入招聘职位">招聘职位:</InputItem>
          <InputItem placeholder="请输入公司名称">公司名称:</InputItem>
          <InputItem placeholder="请输入职位薪资">职位薪资:</InputItem>
          <TextareaItem title="职位需求" rows={3}/>
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
)(LaobanInfo)