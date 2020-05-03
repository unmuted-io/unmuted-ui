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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import logoDark from '../../assets/images/logo-dark.png'
import authBg from '../../assets/images/auth-bg.jpg'
import { UserInfo } from '../../types'

export interface RegisterComponentStateProps {
  isRegistering: boolean;
  history: any;
}

export interface RegisterComponentDispatchProps {
  dispatch: any;
  createUser: (userInfo: UserInfo, history: any) => void;
}

export type RegisterComponentProps = RegisterComponentStateProps &
  RegisterComponentDispatchProps /* & RouteComponentProps */

export interface RegisterComponentState {}

export class RegisterComponent extends Component<RegisterComponentProps, RegisterComponentState> {
  state = {
    disabled: true,
    email: '',
    password: ''
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

  render () {
    const { isRegistering } = this.props
    return (
      <div className="auth-wrapper" style={{ backgroundColor: '#eff3f6' }}>
        <div className="auth-content container">
          <Card>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
                    <img src={logoDark} alt="" className="img-fluid mb-4" />
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
                    <div className="saprator">
                      <span>OR</span>
                    </div>
                    <Button color="facebook" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                      </i>
                      facebook
                    </Button>
                    <Button color="googleplus" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
                      </i>
                      Google
                    </Button>
                    <Button color="twitter" className="mb-2 mr-2">
                      <i>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </i>
                      Twitter
                    </Button>
                    <br />
                    <Button disabled={isRegistering} onClick={this.onClickSignup} color="primary" className="mb-4 signup">
                      {isRegistering ? <Spinner size='sm' /> : 'Sign up'}
                    </Button>
                    <p className="mb-2">
                      Already have an account?&nbsp;
                      <Link to="/maint/auth-singin" className="f-w-400">
                        Log in
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

export default RegisterComponent
