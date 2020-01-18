import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
// import { w3cwebsocket as W3CWebSocket } from "websocket"
import Ws from '@adonisjs/websocket-client'

let client

export class WebSocketChat extends Component {

  constructor () {
    super()
    this.ws = Ws('ws://localhost:3333', {
      reconnection: true,
      query: {
        message: 'This is a test'
      }
    })
    this.client = this.ws.connect()
    this.chat = this.ws.subscribe('chat')
    this.state = {
      chat: {

      } ,
      input: '',
      isConnected: false
    }

    this.ws.on('open', () => {

      this.setState({
        isConnected: true
      })
    })

    this.ws.on('close', () => {
      this.setState({
        isConnected: false
      })
    })
    this.chat.on('ready', () => {
      this.chat.emit('message', 'hello')
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
    this.client.onopen = () => {
    console.log('WebSocket Client Connected');
    };
    this.client.onmessage = (message) => {
      const { chat } = this.state
      const response = JSON.parse(message.data);
      console.log('response: ', response)
      this.setState({
        chat: {
          ...chat,
          [response.timestamp]: `${response.username}: ${response.content}`
        }
      })
    }
  }

  onClickSubmit = () => {
    const { input } = this.state
    if (!input) return
    const { username } = this.props
    console.log('sending to websockets')
    client.send(JSON.stringify({
      type: "chatSubmission",
      username,
      content: input
    }))
    this.setState({
      input: ''
    })
  }

  onChangeInput = (e) => {
    const { value } = e.target
    console.log('value is: ', value)
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
      <div>
        <div>
          {Object.keys(chat).sort().map(timestamp => {
            return <Fragment key={timestamp}><span>{chat[timestamp]}</span><br /></Fragment>
          })}
        </div>
        <input type='text' value={input} onChange={this.onChangeInput} />
        <Button onClick={this.onClickSubmit} color="primary" className="mb-4">
          Submit
        </Button>
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