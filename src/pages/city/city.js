import React from 'react';
import { NavBar,Icon} from 'antd-mobile';
import './city.less'

class SearchInput extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return (
      <div>
        <form className="cityForm">

        </form>
      </div>
    )
  }
}

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  goBack=()=>{
    this.props.history.push('/')
  }
  componentDidMount(){
    console.log(this.props.location)
  }
  render(){
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.goBack}
          rightContent={[
            <span key="0">切换城市</span>,
          ]}
        >南京</NavBar>
      </div>
    )
  }
}

class City extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <div className="cityContainer">
        <Header/>
        <SearchInput/>
      </div>
    )
  }
}

export default City