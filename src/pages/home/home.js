import React from 'react';
import Header from '../../components/Header';
import { Flex,List,Button} from 'antd-mobile';
import { Link } from 'react-router-dom';
import HotCity from '../../components/city/HotCity.js';
import GroupCity from '../../components/city/GroupCity.js';
import './home.less';
const Item = List.Item;
const Brief = Item.Brief;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  goCity=()=>{
    this.props.history.push({
      pathname:`/city/1`,
    })
  }
  render(){
    return(
      <div id="App">
        <Header />
        <div className="cityNav">
          <Flex className="cityTip" justify="between">
            <span>当前定位城市:</span>
            <span>定位不准时，请在城市列表中选择</span>
          </Flex>
          <List className="guessCity" onClick={this.goCity}>
            <Item arrow="horizontal"><span style={{'color':'#3190e8'}}>岳阳</span></Item>
          </List>
        </div>
        <HotCity/>
        <GroupCity/>
        <Button type="primary">按钮</Button>    
        
      </div>
    )
  }
};
export default App