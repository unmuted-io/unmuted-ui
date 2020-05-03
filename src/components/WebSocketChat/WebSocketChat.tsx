import React, { Component, Fragment, ReactNode } from 'react'
import { bns } from 'biggystring'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import BountiedChatForm from '../ChatForm/BountiedChatForm'
import ChatForm from '../ChatForm/RegularChatForm'
import { Account, SuperChatData, State, ExchangeRatesReducer } from '../../types'
import { debounce } from '../../utility/utility'

interface WebSocketChatOwnProps {
  rand: string;
}

interface WebSocketChatStateProps {
  account: Account;
  edgeAccount: any;
  exchangeRates: ExchangeRatesReducer;
}

interface WebSocketChatDispatchProps {
  sendSuperChat: (data: { input: string; amount: string; username: string }) => void;
}

type WebSocketChatProps = WebSocketChatOwnProps & WebSocketChatStateProps & WebSocketChatDispatchProps

type WebSocketChatState = {
  chat: object;
  input: string;
  isConnected: boolean;
  superChatAmount: number;
  uri: string;
  currentTab: string;
  isQrCodeVisible: boolean;
  currentWalletId: string;
}

export class WebSocketChatComponent extends Component<WebSocketChatProps, WebSocketChatState> {
  ws: any

  constructor (props: WebSocketChatProps) {
    super(props)
    const { rand, edgeAccount } = props
    const activeWalletIds = (edgeAccount && edgeAccount.activeWalletIds) || []
    this.ws = io(`http://localhost:9825/${rand}`)
    this.state = {
      chat: {},
      input: '',
      isConnected: false,
      superChatAmount: 0,
      uri: '',
      currentTab: '1',
      isQrCodeVisible: false,
      currentWalletId: (activeWalletIds && activeWalletIds[0]) || ''
    }

    this.updateUri = debounce(this.updateUri, 600, false)

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
  }

  componentDidMount (): void {
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

  onSubmit = (e) => {
    e.preventDefault()
    const { input } = this.state
    if (!input) return
    const { account } = this.props
    this.setState({
      input: '',
    }, () => {
      this.ws.emit('userMessage', {
        type: 'chatSubmission',
        username: account.username,
        content: input,
      })
    })
  }

  updateUri = async () => {
    const { edgeAccount, exchangeRates } = this.props
    const { currentWalletId, superChatAmount } = this.state
    // if superChatAmount is zero, exit, because division by zero
    if (!superChatAmount) return
    const wallet = edgeAccount.currencyWallets[currentWalletId]
    const { currencyCode, denominations } = wallet.currencyInfo
    // get fetched exchange rate (crypto to USD)
    const exchangeRate = exchangeRates[currencyCode]
    // convert superChatAmount (in fiat) to the cryptocurrency exchange denomination
    const exchangeAmount = bns.div(superChatAmount.toString(), exchangeRate.price)
    // find the exchange denomination in the currencyInfo for that currency
    const exchangeDenomination = denominations.find(denom => {
      return denom.name === currencyCode
    })
    if (!exchangeDenomination) throw new Error('No Currency Denomination')
    // now go from exchange denomination to native (atomic / smallest units)
    const nativeAmount = bns.mul(exchangeAmount, exchangeDenomination.multiplier)
    const data = {
      publicAddress: 'haytemrtg4ge',
      currencyCode,
      nativeAmount
    }
    const encodedUri = await wallet.encodeUri(data)
    this.setState({
      uri: encodedUri
    })
  }

  onChangeTab = (tab: string) => {
    const { currentWalletId } = this.state
    if (currentWalletId !== tab) {
      this.setState({
        currentWalletId: tab
      }, () => {
        this.updateUri()
      })
    }
  }

  onChangeSuperChatAmount = (e) => {
    const { value } = e.target
    this.setState({
      superChatAmount: parseFloat(value),
    }, () => {
      this.updateUri()
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
      username: account.username,
    }
    sendSuperChat(data)
    this.setState({
      isQrCodeVisible: true
    })
  }

  onChangeInput = (e) => {
    const { value } = e.target
    this.setState({
      input: value,
    }, () => {
      this.updateUri()
    })
  }

  render (): ReactNode {
    const { rand, edgeAccount } = this.props
    const {
      chat,
      input,
      isQrCodeVisible,
      superChatAmount,
      currentWalletId,
      uri
    } = this.state
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
                const amount = parseFloat(amountText.replace(' EOS'))
                const magnitude = Math.ceil(Math.log10(amount) * 2)
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
            onClickSuperChat={this.onClickSuperChat}
            onSubmit={this.onSubmit}
            onChangeSuperChatAmount={this.onChangeSuperChatAmount}
            isQrCodeVisible={isQrCodeVisible}
            superChatAmount={superChatAmount}
            uri={uri}
            onChangeTab={this.onChangeTab}
            currentWalletId={currentWalletId}
          />
        ) : (
          <ChatForm
            rand={rand}
            input={input}
            onChangeInput={this.onChangeInput}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: State): WebSocketChatStateProps => {
  return {
    account: state.auth.account,
    edgeAccount: state.auth.edgeAccount,
    exchangeRates: state.exchangeRates
  }
}

const mapDispatchToProps = (dispatch): WebSocketChatDispatchProps => {
  return {
    sendSuperChat: (data: { input: string; amount: string; username: string }) =>
      dispatch({ type: 'SEND_SUPER_CHAT', data }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebSocketChatComponent)
