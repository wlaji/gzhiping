import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  NavBar,
  List,
  InputItem,
  Grid
} from 'antd-mobile'
import { sendMsg } from '../../redux/actions'
import './chat.less'

const Item = List.Item

class Chat extends Component {

  componentWillMount() {
    const emojis = ['😄', '😝', '😍', '😵','😄', '😝', 
    '😍', '😵','😄', '😝', '😍', '😵','😄', '😝', '😍', 
    '😵','😄', '😝', '😍', '😵','😄', '😝', '😍', '😵',
    '😄', '😝', '😍', '😵','😄', '😝', '😍', '😵','😄', 
    '😝', '😍', '😵','😄', '😝', '😍', '😵','😄', '😝', 
    '😍', '😵','😄', '😝', '😍', '😵','😄', '😝', '😍', 
    '😵','😄', '😝', '😍', '😵'];
    this.emojis = emojis.map(emoji => {
      return { text: emoji }
    })
  }


  state = {
    content: '',
    isShowEmoji: false,
  }

  handleSend = () => {
    const from = this.props.user._id;
    const to = this.props.match.params.userid;
    const content = this.state.content.trim();
    if (content) {
      this.props.sendMsg({ from, to, content });
    }
    this.setState({
      content: '',
      isShowEmoji:false
    })
  }

  toggleEmojiGrid=()=>{
    const isShowEmoji=this.state.isShowEmoji;
    this.setState({
      isShowEmoji:!isShowEmoji
    })
    if(!isShowEmoji){
      setTimeout(()=>{
        window.dispatchEvent(new Event('resize'));
      },0)
    }
  }

  render() {
    const { user } = this.props;
    const { users, chatMsgs } = this.props.chat;
    const meId = user._id;
    if (!users[meId]) {
      return null;
    }
    const targetId = this.props.match.params.userid;
    const chatId = [meId, targetId].sort().join('_');
    const msgs = chatMsgs.filter(msg => {
      return msg.chat_id === chatId
    })
    const targetHeader = users[targetId].header;
    const targetIcon = targetHeader ? require(`../../assets/images/${targetHeader}.png`) : null;

    return (
      <div id="chat-page">
        <NavBar className="sticky-header">{user.username}</NavBar>
        <List style={{overflow:'auto', paddingBottom: '50px', paddingTop: '45px' }}>
          {
            msgs.map(msg => {
              //别人发给我的
              if (meId === msg.to) {
                return (
                  <Item
                    key={msg._id}
                    thumb={targetIcon}>
                    {msg.content}
                  </Item>
                )
              } else {//我发给别人的信息
                return (
                  <Item
                    key={msg._id}
                    className="chat-me"
                    extra="我">
                    {msg.content}
                  </Item>
                )

              }
            })
          }
        </List>

        <div className="am-tab-bar">
          <InputItem
            value={this.state.content}
            onChange={val => this.setState({ content: val })}
            onFocus={()=>this.setState({isShowEmoji:false})}
            placeholder="请输入"
            extra={
              <p>
                <span style={{marginRight:10}} onClick={this.toggleEmojiGrid}>😃</span>
                <span onClick={this.handleSend}>发送</span>
              </p>
            }>
          </InputItem>
          {
            this.state.isShowEmoji ?
              (<Grid data={this.emojis}
                columnNum={8}
                isCarousel={true}
                carouselMaxRow={4}
                onClick={item => {
                  this.setState({ content: this.state.content + item.text })
                }}
              />) : null
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      user: state.user,
      chat: state.chat
    }
  },
  { sendMsg }
)(Chat)