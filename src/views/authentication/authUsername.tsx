import React, { Component } from 'react'
import { connect } from 'react-redux'
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
  FormFeedback,
  Label,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, withRouter } from 'react-router-dom'
import logoDark from '../../assets/images/logo-dark.png'
import authBg from '../../assets/images/auth-bg.jpg'
import { debounce } from '../../utility/utility'
import axios from 'axios'

interface AuthUsernameProps {
  email?: string;
  password?: string;
  edgeUsername?: string;
  location: any;
  history: any;
  dispatch: any;
}

interface AuthUsernameState {
  username: string;
  validity: 'valid' | 'invalid' | '';
}

class AuthUsername extends Component<AuthUsernameProps, AuthUsernameState> {
  constructor (props: AuthUsernameProps) {
    super(props)
    this.state = {
      username: props.location && props.location.state && props.location.state.edgeUsername || '',
      validity: ''
    }
    this.fetchUsernameAvailability = debounce(this.fetchUsernameAvailability, 400, false)
  }

  componentDidMount = async () => {
    const { username } = this.state
    if (username) this.fetchUsernameAvailability(username)
  }

  onChangeUsername = (e) => {
    const input = e.target.value
    this.setState({
      username: input,
      validity: ''
    })
    this.fetchUsernameAvailability(input)
  }

  fetchUsernameAvailability = async (username: string): Promise<any> => {
    const { REACT_APP_API_BASE_URL } = process.env
    console.log('debouncing')
    this.setState({
      validity: ''
    })
    const result = await axios.get(`${REACT_APP_API_BASE_URL}/auth/check-username/${username}`)
    this.setState({
      validity: result.data.isAvailable ? 'valid' : 'invalid'
    })
  }

  onClickSubmit = (e) => {
    const { dispatch, history } = this.props
    const { username } = this.state
    e.preventDefault()
    dispatch({ type: 'UPDATE_USERNAME', data: { username, history } })
  }

  render () {
    const { validity, username } = this.state
    let validProp = {}
    let feedback = ''
    if (validity === 'valid') {
      validProp = { valid: true }
      feedback = 'Username is available'
    } else if (validity === 'invalid') {
      validProp = { invalid: true }
      feedback = 'Username taken'
    } else {
      validProp = {}
      feedback = ''
    }
    return (
      <div className="auth-wrapper" style={{ background: '#eff3f6' }}>
        <div className="auth-content container">
          <Card>
            <Form onSubmit={e => e.preventDefault()}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
                    <FormGroup>
                      <img src={logoDark} alt="" className="img-fluid mb-4" />
                      <h4 className="mb-3 f-w-400">Choose a username:</h4>
                      <InputGroup className="mb-2">
                        <InputGroupAddon addonType="prepend">
                          <span className="input-group-text">
                            <i className="feather icon-user" />
                          </span>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" value={username} onChange={this.onChangeUsername} {...validProp} />
                        <FormFeedback {...validProp}>{feedback}&nbsp;</FormFeedback>
                      </InputGroup>
                    </FormGroup>
                    <br />
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <Button onClick={this.onClickSubmit}
                        color="primary"
                        className="mb-4"
                        style={{ display: 'inline' }}
                      >
                        Submit
                      </Button>
                    </div>
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthUsername)
