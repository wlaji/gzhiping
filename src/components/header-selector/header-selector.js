import React,{Component} from 'react'
import {
  List,
  Grid
} from 'antd-mobile'

export default class HeaderSelector extends Component{
  constructor(props){
    super(props)
    this.headerList=[];
    for(let i=1;i<=20;i++){
      this.headerList.push({
        text:'头像'+i,
        icon:require(`./images/头像${i}.png`)
      })
    }
  }
 render(){
   return(
     <List renderHeader={() => '请选择头像'} className="my-list">
       <Grid data={this.headerList} columnNum={5}/>
     </List>
   )
 }
}