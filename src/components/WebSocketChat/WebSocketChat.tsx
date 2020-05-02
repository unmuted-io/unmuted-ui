import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import BountiedChatForm from '../ChatForm/BountiedChatForm'
import ChatForm from '../ChatForm/RegularChatForm'
import { Account, SuperChatData } from '../../types'

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
  uri: string,
  currentTab: string
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
      currentTab: '1'
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

  onChangeSuperChatAmount = (e) => {
    const { value } = e.target
    console.log('superChatAmount: ', value)
    this.setState({
      superChatAmount: value,
    })
  }

  onClickSuperChat = () => {
    const { account, sendSuperChat } = this.props
    const { input, superChatAmount } = this.state
    if (superChatAmount <= 0) return
    console.log('superChatAmount is: ', superChatAmount)
    const data: SuperChatData = {
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

  render() {
    const { rand, edgeAccount } = this.props
    const { chat, input } = this.state
    const isBountiedChatVisible = !!edgeAccount
    return (
      <div className={'chat'} style={{ alignSelf: 'flex-end', width: '100%', flex: 1 }}>
        <div>
          {Object.keys(chat)
            .sort()
            .map((timestamp) => {
              let fontSize = 12
              const amountText = chat[timestamp].amount
              if (amountText) {
                console.log('amountText: ', amountText)
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
        {isBountiedChatVisible ? (
          <BountiedChatForm
            rand={rand}
            input={input}
            onChangeInput={this.onChangeInput}
            onClickSuperChat={this.onChangeSuperChatAmount}
            onSubmit={this.onSubmit}
            onChangeSuperChatAmount={this.onChangeSuperChatAmount}
          />
          ) : (
            <ChatForm
              rand={rand}
              input={input}
              onChangeInput={this.onChangeInput}
              onClickSuperChat={this.onChangeSuperChatAmount}
              onSubmit={this.onSubmit}
              onChangeSuperChatAmount={this.onChangeSuperChatAmount}
            />
          )}

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

const mapDispatchToProps = (dispatch): WebSocketChatDispatchProps => {
  return {
    sendSuperChat: (data: { input: string; amount: string; username: string }) =>
      dispatch({ type: 'SEND_SUPER_CHAT', data }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketChatComponent)
