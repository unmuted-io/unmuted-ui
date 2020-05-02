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
  TabPane,
  Collapse
} from 'reactstrap'
import QRCode from 'qrcode.react'
import classnames from 'classnames'

interface BountiedChatFormOwnProps {
  rand: string,
  onSubmit: Function,
  onChangeInput: (input: any) => void,
  onClickSuperChat: Function,
  onChangeSuperChatAmount: (input: string) => void,
  isQrCodeVisible: boolean,
  superChatAmount: number,
  uri: string,
  input: string,
  currentWalletId: string,
  onChangeTab: (id: string) => void
}

interface BountiedChatFormStateProps {
  account: Account
  edgeAccount: any
}

interface BountiedChatFormDispatchProps {
}

type BountiedChatFormProps = BountiedChatFormOwnProps & BountiedChatFormStateProps & BountiedChatFormDispatchProps

interface BountiedChatFormState {
  isConnected: boolean
}

class BountiedChatFormComponent extends React.Component<BountiedChatFormProps, BountiedChatFormState> {
  constructor(props: BountiedChatFormProps) {
    super(props)

    this.state = {
      isConnected: false
    }
  }

  render () {
    const {
      account,
      edgeAccount,
      onSubmit,
      onChangeInput,
      onClickSuperChat,
      onChangeSuperChatAmount,
      superChatAmount,
      isQrCodeVisible,
      input,
      currentWalletId,
      uri,
      onChangeTab
    } = this.props
    const { activeWalletIds, currencyWallets } = edgeAccount
    const selectedWalletCurrencyInfo = currencyWallets[currentWalletId].currencyInfo
    const { currencyCode } = selectedWalletCurrencyInfo
    const isSuperChatDisabled = !input || (superChatAmount <= 0)
    return (
      <div className='bountied-chat-area'>
        <Nav tabs>
          {activeWalletIds.map((id: string) => {
            return (
              <NavItem key={id}>
                <NavLink
                  className={classnames({ active: currentWalletId === id })}
                  onClick={() => onChangeTab(id)}
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
              <div className="chat-area bountied-chat-input">
                <InputGroup>
                  <Input onChange={onChangeSuperChatAmount} placeholder="Amount" min={0.001} type="number" step=".001" />
                  <InputGroupAddon addonType="append">{currencyCode}</InputGroupAddon>
                </InputGroup>
                <Button disabled={isSuperChatDisabled} onClick={onClickSuperChat} color="success" className='mb-4'>
                  BountyChat
                </Button>
              </div>
              <Collapse className='qr-code-collapsible' isOpen={isQrCodeVisible}>
                <div className='qr-code-wrapper'>
                  <QRCode className='qr-code' value={uri} size={256} />
                </div>
              </Collapse>
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
