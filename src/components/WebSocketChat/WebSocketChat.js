import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'
// import { w3cwebsocket as W3CWebSocket } from "websocket"
import Ws from '@adonisjs/websocket-client'

let client

export class WebSocketChat extends Component {

  constructor () {
    super()
    this.ws = Ws('ws://localhost:3333', {
      reconnection: true
    })
    this.client = this.ws.connect()
    this.chat = this.ws.subscribe('chat')
    this.state = {
      chat: {

      } ,
      input: '',
      isConnected: false,
      superChatAmount: 0
    }

    this.ws.on('open', () => {
      console.log('websocket open')
      this.setState({
        isConnected: true
      })
    })

    this.ws.on('close', () => {
      console.log('websocket close')
      this.setState({
        isConnected: false
      })
    })
    this.chat.on('ready', () => {
      const output = { message: 'hello' }
      this.chat.emit('message', output)
      console.log('chat ready')
    })

    this.chat.on('error', (error) => {
      console.log('chat error: ', error)
    })

    this.chat.on('close', () => {
      console.log('chat close')
    })
  }

  componentDidMount() {
    this.client.on('open', () => {
      console.log('WebSocket Client Connected')
    })
    this.chat.on('message', (message) => {
      const { chat } = this.state
      console.log('message from server: ', message)
      if (message.username && message.content) {
        this.setState({
          chat: {
            ...chat,
            [message.timestamp]: {
              username: message.username,
              content: message.content,
              amount: message.amount
            }
          }
        })
      }
    })
  }

  onClickSubmit = () => {
    const { input } = this.state
    if (!input) return
    const { username } = this.props
    console.log('sending to websockets')
    this.chat.emit('message', {
      type: "chatSubmission",
      username,
      content: input
    })
    this.setState({
      input: ''
    })
  }

  changeSuperChatAmount = (e) => {
    const { value } = e.target
    console.log('superChatAmount: ', value)
    this.setState({
      superChatAmount: value
    })
  }

  onClickSuperChat = () => {
    const { username } = this.props
    const { input, superChatAmount } = this.state
    console.log('superChatAmount is: ', superChatAmount)
    const data = {
      input,
      amount: parseFloat(superChatAmount).toFixed(4).toString(),
      userame: username || 'fakeUser'
    }
    this.props.sendSuperChat(data)
  }

  onChangeInput = (e) => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }

  componentWillUnmount = () => {
    this.ws.close()
  }

  render() {
    const { chat, input } = this.state
    return (
      <div className={'chat'} style={{ alignSelf: 'flex-end', width: '100%' }}>
        <div>
          {Object.keys(chat).sort().map(timestamp => {
            let fontSize = 12
            const amountText = chat[timestamp].amount
            console.log('chat[timestamp]: ', chat[timestamp])
            if (amountText) {
              const amount = parseFloat(amountText.replace(' EOS'))
              const magnitude = Math.ceil(Math.log10(amount) * 2)
              console.log('magnitude ceiling is: ', magnitude)
              fontSize += magnitude
            }
            return (
              <Fragment key={timestamp}>
                <span style={{ fontSize }}>
                  <strong>{chat[timestamp].username}</strong>: {chat[timestamp].content}
                </span><br />
              </Fragment>
            )
          })}
        </div>
        <div className='chat-area'>
          <input className={'chat-area-input'} type='text' value={input} onChange={this.onChangeInput} />
          <Button onClick={this.onClickSubmit} color="primary" className="mb-4">
            Submit
          </Button>
        </div>
        <div className='chat-area'>
        <InputGroup>
          <Input onChange={this.changeSuperChatAmount} placeholder="Amount" min={.001} type="number" step=".001" />
          <InputGroupAddon addonType="append">EOS</InputGroupAddon>
          </InputGroup>
          <Button onClick={this.onClickSuperChat} color="success" className="mb-4">
            SuperChat
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.account.loginData.user.username
  }
}

export default connect(mapStateToProps)(WebSocketChat);