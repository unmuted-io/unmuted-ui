import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Form,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import QRCode from 'qrcode.react'
import classnames from 'classnames'

interface BountiedChatFormOwnProps {
  rand: string,
  input: string,
  onSubmit: Function,
  onChangeInput: (input: any) => void,
  onClickSuperChat: Function,
  onChangeSuperChatAmount: (input: any) => void
}

interface BountiedChatFormStateProps {
  account: Account
  edgeAccount: any
}

interface BountiedChatFormDispatchProps {
}

type BountiedChatFormProps = BountiedChatFormOwnProps & BountiedChatFormStateProps & BountiedChatFormDispatchProps

interface BountiedChatFormState {
  chat: object
  input: string
  isConnected: boolean
  superChatAmount: number
  uri: string,
  currentWalletId: string
}

class BountiedChatFormComponent extends React.Component<BountiedChatFormProps, BountiedChatFormState> {
  constructor(props: BountiedChatFormProps) {
    super(props)
    const {
      edgeAccount
    } = props
    const { activeWalletIds } = edgeAccount
    this.state = {
      chat: {},
      input: '',
      isConnected: false,
      superChatAmount: 0,
      uri: '',
      // what if no wallets?
      currentWalletId: activeWalletIds[0]
    }
  }

  onChangeTab = (tab: string) => {
    const { currentWalletId } = this.state
    if (currentWalletId !== tab) {
      this.setState({
        currentWalletId: tab
      })
    }
  }

  render () {
    const {
      account,
      edgeAccount,
      onSubmit,
      onChangeInput,
      onClickSuperChat,
      onChangeSuperChatAmount
    } = this.props
    const { superChatAmount, currentWalletId } = this.state
    const { activeWalletIds, currencyWallets, input } = edgeAccount
    console.log('')
    const selectedWalletCurrencyInfo = currencyWallets[currentWalletId].currencyInfo
    const { currencyCode } = selectedWalletCurrencyInfo
    const encodedUri = `eos:haytemrtg4ge?amount=${superChatAmount}`
    const isSuperChatDisabled = !input || (superChatAmount <= 0)
    return (
      <div className='bountied-chat-area'>
        <Nav tabs>
          {activeWalletIds.map((id: string) => {
            return (
              <NavItem key={id}>
                <NavLink
                  className={classnames({ active: currentWalletId === id })}
                  onClick={() => this.onChangeTab(id)}
                >
                  <img src={currencyWallets[id].currencyInfo.symbolImage} className='symbol-image' />&nbsp;&nbsp;
                  {currencyWallets[id].currencyInfo.currencyCode}
                </NavLink>
              </NavItem>
            )
          })}
        </Nav>
        <TabContent activeTab={currentWalletId}>
          <TabPane tabId={currentWalletId}>
            <Form type="submit" onSubmit={onSubmit}>
              <div className="chat-area">
                <input
                  disabled={!account}
                  className={'chat-area-input'}
                  type="text"
                  value={input}
                  onChange={onChangeInput}
                />
                <Button color="primary" className="mb-4">
                  Chat
                </Button>
              </div>
              <div className="chat-area">
                <InputGroup>
                  <Input onChange={onChangeSuperChatAmount} placeholder="Amount" min={0.001} type="number" step=".001" />
                  <InputGroupAddon addonType="append">{currencyCode}</InputGroupAddon>
                </InputGroup>
                <Button disabled={isSuperChatDisabled} onClick={onClickSuperChat} color="success" className="mb-4">
                  BountyChat
                </Button>
              </div>
              <QRCode value={encodedUri} />
            </Form>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

const mapStateToProps = (state): BountiedChatFormStateProps => {
  return {
    account: state.auth.account,
    edgeAccount: state.auth.edgeAccount,
  }
}

export default connect(mapStateToProps)(BountiedChatFormComponent)
