import React,{Component} from 'react'
import {
  List,
  Grid
} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component{
  static propTypes={
    setHeader:PropTypes.func.isRequired
  }
  
  state={
    icon:null
  }

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

  selectHeader=(el,index)=>{
    this.setState({
      icon:el.icon
    })
    this.props.setHeader(el.text);
  }
  
  render(){
    const {icon} = this.state
    const listHeader = !icon?'请选择头像':(
      <div>
        已选择头像: <img src={icon} style={{width:30+'px',height:30+'px'}} alt="头像" />
      </div>
    )

    return(
      <List renderHeader={() => listHeader} className="my-list">
        <Grid data={this.headerList} columnNum={5} onClick={this.selectHeader}/>
      </List>
    )
  }
}