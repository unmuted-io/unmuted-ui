import React, { Component } from 'react'
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
  Label,
  Spinner
} from 'reactstrap'
import { RouteComponentProps, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoDark from '../../assets/images/logo-dark.png'
import authBg from '../../assets/images/auth-bg.jpg'
import { makeEdgeUiContext } from 'edge-login-ui-web'
import edgeLoginLogo from '../../assets/images/auth/edge-login-logo.svg'
import { UserInfo, Account } from '../../types'
import { isLoggingIn } from '../../redux/reducers/authReducer'

let edgeUiContext
const assetsPath = 'http://edge-login.unmuted.io:11234/edge-iframe/index.html'

export interface AuthSinginComponentStateProps {
  isLoggingIn: boolean;
  account: Account
}

export interface AuthSinginComponentDispatchProps {
  dispatch: any;
  login: (userInfo: UserInfo, history: any, isAnimated?: boolean) => void;
}

export type AuthSinginComponentProps = AuthSinginComponentStateProps & AuthSinginComponentDispatchProps & RouteComponentProps

export interface AuthSinginComponentState {

}

export class AuthSinginComponent extends Component<AuthSinginComponentProps, AuthSinginComponentState> {
  state = {
    disabled: true,
    email: '',
    password: ''
  }

  componentDidMount = async () => {
    const { history, dispatch, location } = this.props
    // @ts-ignore
    const fromUrl = location.state && location.state.fromUrl
    this.setState({
      disabled: false,
      email: 'kylan.hurt@gmail.com',
      password: 'Test123456'
    }, () => {
      this.onClickLogin({ preventDefault: () => { } })
    })
    try {
      const context = await makeEdgeUiContext({
        apiKey: 'aac3421135575c7433551969b28f72c5b74d7b78',
        appId: 'com.dstream.web',
        appName: 'CaptainsRelay',
        assetsPath,
      })
      edgeUiContext = context
      edgeUiContext.on('login', async (edgeAccount) => {
        console.log('Edge login successful')
        dispatch({
          type: 'AUTHENTICATE_EDGE_LOGIN',
          data: { account: edgeAccount, history, fromUrl }
        })
        const walletInfo = edgeAccount.getFirstWalletInfo('wallet:ethereum')
        const currencyWallet =
          walletInfo == null
            ? await edgeAccount.createCurrencyWallet('wallet:ethereum', { name: 'dStream ETH Wallet' })
            : await edgeAccount.waitForCurrencyWallet(walletInfo.id)

        // Get an address from the wallet:
        // if no address then need to activate wallet / account
        const addressInfo = await currencyWallet.getReceiveAddress()
        const address = addressInfo.publicAddress
      })
    } catch (e) {
      console.log('Edge error: ', e)
    }
  }

  onChangeEmail = (e: any) => {
    const email: string = e.target.value
    this.setState({
      email
    })
  }

  onChangePassword = (e: any) => {
    const password: string = e.target.value
    this.setState({
      password
    })
  }

  onClickEdgeLogin = () => {
    console.log('onClickEdgeLogin executing')
    edgeUiContext.showLoginWindow()
  }

  onClickLogin = (e) => {
    e.preventDefault()
    const { login, history } = this.props
    const { email, password } = this.state
    login({ email, password }, history)
  }

  render () {
    const { disabled } = this.state
    const { isLoggingIn } = this.props
    return (
      <div className="auth-wrapper" style={{ background: '#eff3f6' }}>
        <div className="auth-content container">
          <Card>
            <Form onSubmit={this.onClickLogin}>
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
                      <Input onChange={this.onChangeEmail} type="email" placeholder="Email address" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                          <i className="feather icon-lock" />
                        </span>
                      </InputGroupAddon>
                      <Input onChange={this.onChangePassword} type="password" placeholder="Password" />
                    </InputGroup>
                    <div className="saprator">
                      <span>OR</span>
                    </div>
                    <Button disabled={disabled} color="facebook" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                      </i>
                      facebook
                    </Button>
                    <Button disabled={disabled} color="googleplus" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                      </i>
                      Google
                    </Button>
                    <Button disabled={disabled} color="twitter" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </i>
                      Twitter
                    </Button>
                    <Button
                      style={{ borderColor: '#2a5799', borderWidth: 1.5 }}
                      color="edge"
                      className="mb-2 mr-2"
                      onClick={this.onClickEdgeLogin}
                      disabled={disabled}
                    >
                      <img src={edgeLoginLogo} />
                    </Button>
                    <FormGroup className="text-left mt-2">
                      <div className="checkbox checkbox-primary d-inline">
                        <input type="checkbox" id="checkbox-1" defaultChecked />
                        <Label for="checkbox-1" className="cr">
                          Save credentials
                        </Label>
                      </div>
                    </FormGroup>
                    <Button onClick={this.onClickLogin} disabled={isLoggingIn} color="primary" className="mb-4 login">
                      {isLoggingIn ? <Spinner size="sm" /> : 'Login'}
                    </Button>
                    <p className="mb-2 text-muted">
                      Forgot password?&nbsp;
                      <Link to="/maint/reset" className="f-w-400">
                        Reset
                      </Link>
                    </p>
                    <p className="mb-0 text-muted">
                      Don’t have an account?&nbsp;
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
    )
  }
}
