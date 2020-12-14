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
  Spinner,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import unmutedLogo from '../../assets/images/logo/logo-white-text-transparent-1040x1080.png'
import { UserInfo } from '../../types'

export interface RegisterComponentStateProps {
  isRegistering: boolean
  history: any
}

export interface RegisterComponentDispatchProps {
  dispatch: any
  createUser: (userInfo: UserInfo, history: any) => void
}

export type RegisterComponentProps = RegisterComponentStateProps &
  RegisterComponentDispatchProps /* & RouteComponentProps */

export interface RegisterComponentState {}

export class RegisterComponent extends Component<RegisterComponentProps, RegisterComponentState> {
  state = {
    disabled: true,
    email: '',
    password: '',
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

  onClickSignup = () => {
    const { createUser, history } = this.props
    const { email, password } = this.state
    const randInt = Math.floor(Math.random() * 100000)
    createUser(
      {
        email,
        password,
      },
      history
    )
  }

  render() {
    const { isRegistering } = this.props
    return (
      <div className="auth-wrapper">
        <div className="auth-content container">
          <Card>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
                    <h4 className="mb-3 f-w-400">Sign up into your account</h4>
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
                    <Button
                      disabled={isRegistering}
                      onClick={this.onClickSignup}
                      color="primary"
                      className="mb-4 signup"
                    >
                      {isRegistering ? <Spinner size="sm" /> : 'Sign up'}
                    </Button>
                    <p className="mb-2">
                      Already have an account?&nbsp;
                      <Link to="/login" className="f-w-400">
                        Log in
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

export default RegisterComponent
