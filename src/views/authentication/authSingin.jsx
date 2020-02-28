import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Input,
  FormGroup,
  Label
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo-dark.png";
import authBg from "../../assets/images/auth-bg.jpg";
import { makeEdgeUiContext } from 'edge-login-ui-web'

let edgeUiContext
const assetsPath = 'http://localhost:11234'

class AuthSingin extends Component {

  componentDidMount = async () => {
    const { updateEdgeAccount } = this.props
    try {
      const context = await makeEdgeUiContext({
        apiKey: 'aac3421135575c7433551969b28f72c5b74d7b78',
        appId: 'com.dstream.web',
        appName: 'CaptainsRelay',
        assetsPath: assetsPath
      })
      edgeUiContext = context
      edgeUiContext.on('login', async edgeAccount => {
        // Find the app wallet, or create one if necessary:
        const walletInfo = edgeAccount.getFirstWalletInfo('wallet:telos')
        let currencyWallet
        if (!walletInfo) {
          currencyWallet = await edgeAccount.createCurrencyWallet('wallet:telos', {
            name: "Imported CaptainCrypt",
            fiatCurreencyCode: "iso:USD",
            keyOptions: {},
            importText: "5KYuUHyzNqNd9gszoEQZZPmzSM478uBcTPn9Epdx9ZtuUpwLkfA"
          })
        } else {
          currencyWallet = await edgeAccount.waitForCurrencyWallet(walletInfo.id)
        }
        // let currencyWallet =  walletInfo == null ? await edgeAccount.createCurrencyWallet('wallet:eos') : await edgeAccount.waitForCurrencyWallet(walletInfo.id)
        // Get an address from the wallet:
        const addressInfo = await currencyWallet.getReceiveAddress()
        const address = addressInfo.publicAddress
        // this.props.history.push('/welcome', { wallet: currencyWallet })
        const edgeUnsignedTransaction = {
            // Amounts:
            currencyCode: 'TLOS',
            nativeAmount: '-10000',

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
                      to: 'haytemrtg4ge',
                      quantity: '1.0000 TLOS',
                      memo: 'KylanTx1'
                    }
                  }
                ]
              }
            }
        }
        let edgeSignedTransaction = await currencyWallet.signTx(edgeUnsignedTransaction)
        edgeSignedTransaction = await currencyWallet.broadcastTx(edgeSignedTransaction)
        updateEdgeAccount(edgeAccount)
        this.props.history.push('/welcome')
      })
    } catch (e) {
      console.log('Edge error: ', e)
    }
  }

  onClickEdgeLogin = () => {
    console.log('onClickEdgeLogin executing')
    edgeUiContext.showLoginWindow()

    // if (edgeContext) {
    //   _abcUi.openLoginWindow({
    //     onLogin (account) {
    //       console.log('account is: ', account)
    //     },
    //     onClose () {
    //       console.log('Closing window')
    //     }
    //   })
    // }
  }

  render() {
    console.log('renderin AuthSingin')
    return (
      <div className="auth-wrapper" style={{ background: "#eff3f6" }}>
        <div className="auth-content container">
          <Card>
            <Form onSubmit={e => e.preventDefault()}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
                    <img src={logoDark} alt="" className="img-fluid mb-4" />
                    <h4 className="mb-3 f-w-400">Login into your account</h4>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                          <i className="feather icon-mail" />
                        </span>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email address" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                          <i className="feather icon-lock" />
                        </span>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" />
                    </InputGroup>
                    <div className="saprator">
                      <span>OR</span>
                    </div>
                    <Button color="facebook" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                      </i>
                      facebook
                    </Button>
                    <Button color="googleplus" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
                      </i>
                      Google
                    </Button>
                    <Button color="twitter" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                      </i>
                      Twitter
                    </Button>
                    <Button color="edge" className="mb-2 mr-2" onClick={this.onClickEdgeLogin}>
                      Edge
                    </Button>
                    <FormGroup className="text-left mt-2">
                      <div className="checkbox checkbox-primary d-inline">
                        <input type="checkbox" id="checkbox-1" defaultChecked />
                        <Label for="checkbox-1" className="cr">
                          Save credentials
                        </Label>
                      </div>
                    </FormGroup>
                    <Button color="primary" className="mb-4">
                      Login
                    </Button>
                    <p className="mb-2 text-muted">
                      Forgot password?
                      <Link to="/maint/reset" className="f-w-400">
                        Reset
                      </Link>
                    </p>
                    <p className="mb-0 text-muted">
                      Don’t have an account?
                      <Link to="/register" className="f-w-400">
                        Register
                      </Link>
                    </p>
                  </CardBody>
                </Col>
                <Col md={6}>
                  <img src={authBg} alt="" className="img-fluid" />
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default AuthSingin;
