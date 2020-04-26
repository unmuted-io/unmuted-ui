import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'
import io from 'socket.io-client'

let client

export class WebSocketChat extends Component {

  constructor (props) {
    super(props)
    const { rand } = this.props
    console.log('about to connect to websocket')
    this.ws = io(`http://localhost:9825/${rand}`)
    this.state = {
      chat: {

      } ,
      input: '',
      isConnected: false,
      superChatAmount: 0
    }

    this.ws.on('connect', () => {
      console.log('websocket open')
      this.setState({
        isConnected: true
      })
    })

    this.ws.on('disconnect', () => {
      console.log('websocket close')
      this.setState({
        isConnected: false
      })
    })

    this.ws.on('error', () => {
      console.log('room error')
    })

    this.ws.on('success', () => {
      console.log('Room success')
    })
  }

  componentDidMount() {
    this.ws.on('open', () => {
      console.log('WebSocket Client Connected')
    })
    this.ws.on('message', (message) => {
      const { chat } = this.state
      console.log('message from server: ', message)
      if (message.username && message.content) {
        const { username, content, amount } = message
        this.setState({
          chat: {
            ...chat,
            [message.timestamp]: {
              username,
              content,
              amount
            }
          }
        })
      }
    })
  }

  onClickSubmit = () => {
    const { input } = this.state
    if (!input) return
    const { account } = this.props
    console.log('sending to websockets')
    this.ws.emit('userMessage', {
      type: "chatSubmission",
      username: account.username,
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
    const { account } = this.props
    const { input, superChatAmount } = this.state
    console.log('superChatAmount is: ', superChatAmount)
    const data = {
      input,
      amount: parseFloat(superChatAmount).toFixed(4).toString(),
      userame: account.username || 'fakeUser'
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

  }

  render() {
    const { account } = this.props
    const { chat, input } = this.state
    return (
      <div className={'chat'} style={{ alignSelf: 'flex-end', width: '100%' }}>
        <div>
          {Object.keys(chat).sort().map(timestamp => {
            let fontSize = 12
            const amountText = chat[timestamp].amount
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
          <input disabled={!account} className={'chat-area-input'} type='text' value={input} onChange={this.onChangeInput} />
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
    account: state.auth.account
  }
}

export default connect(mapStateToProps)(WebSocketChat);