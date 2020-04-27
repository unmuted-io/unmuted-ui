import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Button, Input, InputGroup, InputGroupAddon, Form, FormGroup } from 'reactstrap'
import QRCode from 'qrcode.react'
import io from 'socket.io-client'
import { Account } from '../../types'

let client

interface WebSocketChatOwnProps {
  rand: string
}

interface WebSocketChatStateProps {
  account: Account
  edgeAccount: any
}

interface WebSocketChatDispatchProps {
  sendSuperChat: (data: { input: string; amount: string; username: string }) => void
}

type WebSocketChatProps = WebSocketChatOwnProps & WebSocketChatStateProps & WebSocketChatDispatchProps

interface WebSocketChatState {
  chat: object
  input: string
  isConnected: boolean
  superChatAmount: number
  uri: string
}

export class WebSocketChatComponent extends Component<WebSocketChatProps, WebSocketChatState> {
  ws: any

  constructor(props: WebSocketChatProps) {
    super(props)
    const { rand } = this.props
    console.log('about to connect to websocket')
    this.ws = io(`http://localhost:9825/${rand}`)
    this.state = {
      chat: {},
      input: '',
      isConnected: false,
      superChatAmount: 0,
      uri: '',
    }

    this.ws.on('connect', () => {
      console.log('websocket open')
      this.setState({
        isConnected: true,
      })
    })

    this.ws.on('disconnect', () => {
      console.log('websocket close')
      this.setState({
        isConnected: false,
      })
    })

    this.ws.on('error', (error) => {
      console.log('room error', error)
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
              amount,
            },
          },
        })
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('onClickSubmit triggered, this is: ', this)
    const { input } = this.state
    if (!input) return
    const { account } = this.props
    console.log('sending to websockets')
    this.ws.emit('userMessage', {
      type: 'chatSubmission',
      username: account.username,
      content: input,
    })
    this.setState({
      input: '',
    })
  }

  changeSuperChatAmount = (e) => {
    const { value } = e.target
    console.log('superChatAmount: ', value)
    this.setState({
      superChatAmount: value,
    })
  }

  onClickSuperChat = () => {
    const { account, sendSuperChat } = this.props
    const { input, superChatAmount } = this.state
    console.log('superChatAmount is: ', superChatAmount)
    const data = {
      input,
      amount: superChatAmount.toFixed(4).toString(),
      username: account.username || 'fakeUser',
    }
    sendSuperChat(data)
  }

  onChangeInput = (e) => {
    const { value } = e.target
    this.setState({
      input: value,
    })
  }

  componentWillUnmount = () => {}

  render() {
    const { account } = this.props
    const { chat, input, superChatAmount } = this.state
    const encodedUri = `eos:haytemrtg4ge?amount=${superChatAmount}`
    return (
      <div className={'chat'} style={{ alignSelf: 'flex-end', width: '100%' }}>
        <div>
          {Object.keys(chat)
            .sort()
            .map((timestamp) => {
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
                  </span>
                  <br />
                </Fragment>
              )
            })}
        </div>
        <Form type="submit" onSubmit={this.onSubmit}>
          <div className="chat-area">
            <input
              disabled={!account}
              className={'chat-area-input'}
              type="text"
              value={input}
              onChange={this.onChangeInput}
            />
            <Button color="primary" className="mb-4">
              Submit
            </Button>
          </div>
          <div className="chat-area">
            <InputGroup>
              <Input onChange={this.changeSuperChatAmount} placeholder="Amount" min={0.001} type="number" step=".001" />
              <InputGroupAddon addonType="append">EOS</InputGroupAddon>
            </InputGroup>
            <Button onClick={this.onClickSuperChat} color="success" className="mb-4">
              SuperChat
            </Button>
          </div>
        </Form>
        <QRCode value={encodedUri} />
      </div>
    )
  }
}

const mapStateToProps = (state): WebSocketChatStateProps => {
  return {
    account: state.auth.account,
    edgeAccount: state.auth.edgeAccount,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): WebSocketChatDispatchProps => {
  return {
    sendSuperChat: (data: { input: string; amount: string; username: string }) =>
      dispatch({ type: 'SEND_SUPER_CHAT', data }),
  }
}

export default connect(mapStateToProps)(WebSocketChatComponent)
