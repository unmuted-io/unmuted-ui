import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Alert
} from "reactstrap";
import MainCard from "../../components/mainCard/mainCard"
import { ClipLoader } from 'react-spinners'

class LoggedInHomepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: '0',
      recipient: '',
      isProcessing: false,
      alert: null
    }
  }

  onPressSend = async () => {
    this.setState({
      isProcessing: true,
      alert: null
    })
    const { edgeAccount } = this.props
    const { amount, recipient } = this.state
    try {
      const walletInfo = edgeAccount.getFirstWalletInfo('wallet:telos')
      let currencyWallet
      if (!walletInfo) {
        currencyWallet = await edgeAccount.createCurrencyWallet('wallet:telos', {
          name: "Imported CaptainCrypt",
          fiatCurreencyCode: "iso:USD",
          keyOptions: {}
        })
      } else {
        currencyWallet = await edgeAccount.waitForCurrencyWallet(walletInfo.id)
      }
      // Get an address from the wallet:
      const addressInfo = await currencyWallet.getReceiveAddress()
      const address = addressInfo.publicAddress

      const nativeAmount = (amount * 10000).toString()
      const amountSyntax = (parseFloat(amount).toFixed(4)).toString()
      const edgeUnsignedTransaction = {
          // Amounts:
          currencyCode: 'TLOS',
          nativeAmount: `-${nativeAmount}`,

          // Fees:
          networkFee: '0',

          // Confirmation status:
          blockHeight: 0,
          date: 0,

          // Transaction info:
          txid: '',
          signedTx: '',
          ourReceiveAddresses: [],
          otherParams: {
            transactionJson: {
              actions: [
                {
                  account: 'eosio.token',
                  name: 'transfer',
                  authorization: [
                    {
                      actor: 'captaincrypt',
                      permission: 'active'
                    }
                  ],
                  data: {
                    from: 'captaincrypt',
                    to: `${recipient}`,
                    quantity: `${amountSyntax} TLOS`,
                    memo: 'KylanTx1'
                  }
                }
              ]
            }
          }
      }
      let edgeSignedTransaction = await currencyWallet.signTx(edgeUnsignedTransaction)
      edgeSignedTransaction = await currencyWallet.broadcastTx(edgeSignedTransaction)
      this.setState({
        alert: {
          color: 'success',
          message: 'Transaction Successfully Sent!'
        }
      })
    } catch (e) {
      console.warn('Error: ', e)
      this.setState({
        alert: {
          color: 'danger',
          message: 'Transaction Error: ' + e
        }
      })
    }
    this.setState({
      isProcessing: false
    })
  }

  onChangeAmount = (e) => {
    const amount = e.target.value
    this.setState({
      amount
    })
  }

  onChangeRecipient = (e) => {
    const recipient = e.target.value
    this.setState({
      recipient
    })
  }

  render() {
    const { isProcessing, alert } = this.state
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="You Are Logged In" isOption>
            <h3>Submit a Transaction</h3>
            <Form>
              <FormGroup className='col-md-4'>
                <Label for="recipient">Recipient</Label>
                <Input onChange={this.onChangeRecipient} type="recipient" name="recipient" id="recipient" placeholder="ex mytelosaccount" />
              </FormGroup>
              <FormGroup className='col-md-4'>
                <Label for="amount">Amount</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">TLOS</InputGroupAddon>
                  <Input onChange={this.onChangeAmount} placeholder="Amount" min={0} max={100} type="number" step="1" />
                </InputGroup>
                <br /><br />
                <div style={{ textAlign: 'center' }}>
                  <Button onClick={this.onPressSend} color="primary" style={{ width: 120, display: 'inline' }}>
                  {isProcessing ? (
                    <ClipLoader
                      //size={"150px"} this also works
                      size={20}
                      color={"#ffffff"}
                      loading={isProcessing}
                    />
                  ) : (
                    `Send`
                  )}
                  </Button>{' '}
                </div>
                <br />
                {!!alert && (
                  <Alert style={{ textAlign: 'center' }} color={alert.color}>
                    {alert.message}
                  </Alert>
                )}
              </FormGroup>
            </Form>
          </MainCard>
        </Col>
      </Row>
    );
  }
}

export default LoggedInHomepage