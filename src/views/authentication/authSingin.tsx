import React, { Component } from 'react'
import { Card, CardBody, Row, Col, InputGroup, InputGroupAddon, Button, Form, Input, Spinner } from 'reactstrap'
import { RouteComponentProps, Link } from 'react-router-dom'

import unmutedLogo from '../../assets/images/logo/logo-white-text-transparent-1040x1080.png'
import { UserInfo, Account } from '../../types'

export interface AuthSinginComponentStateProps {
  isLoggingIn: boolean
  account: Account
}

export interface AuthSinginComponentDispatchProps {
  dispatch: any
  login: (userInfo: UserInfo, history: any, isAnimated?: boolean) => void
}

export type AuthSinginComponentProps = AuthSinginComponentStateProps &
  AuthSinginComponentDispatchProps &
  RouteComponentProps

export interface AuthSinginComponentState {}

export class AuthSinginComponent extends Component<AuthSinginComponentProps, AuthSinginComponentState> {
  state = {
    disabled: true,
    email: '',
    password: '',
  }

  componentDidMount = async () => {
    const { history, dispatch, location } = this.props
    // @ts-ignore
    const fromUrl = location.state && location.state.fromUrl
    console.log('process.env: ', process.env)
    if (process.env.NODE_ENV === 'development') {
      this.setState(
        {
          disabled: false,
          email: 'kylan.hurt@gmail.com',
          password: 'Test123456',
        },
        () => {
          this.onClickLogin({ preventDefault: () => {} })
        }
      )
    }
  }

  onChangeEmail = (e: any) => {
    const email: string = e.target.value
    this.setState({
      email,
    })
  }

  onChangePassword = (e: any) => {
    const password: string = e.target.value
    this.setState({
      password,
    })
  }

  onClickLogin = (e) => {
    e.preventDefault()
    const { login, history } = this.props
    const { email, password } = this.state
    login({ email, password }, history)
  }

  render() {
    const { disabled } = this.state
    const { isLoggingIn } = this.props
    return (
      <div className="auth-wrapper">
        <div className="auth-content container">
          <Card>
            <Form onSubmit={this.onClickLogin}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
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
                    <br />
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
                  <div className="auth-logo-wrap">
                    <img src={unmutedLogo} alt="" className="img-fluid auth-logo" />
                  </div>
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}
