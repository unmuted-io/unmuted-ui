import React, { Component } from "react"
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
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import logoDark from "../../assets/images/logo-dark.png"
import authBg from "../../assets/images/auth-bg.jpg"
import { makeEdgeUiContext } from "edge-login-ui-web"
import edgeLoginLogo from "../../assets/images/auth/edge-login-logo.svg"
import axios from 'axios'

let edgeUiContext;
const assetsPath = "http://localhost:11234"

class AuthSingin extends Component {
  componentDidMount = async () => {
    const { updateEdgeAccount, history } = this.props
    const { REACT_APP_API_BASE_URL } = process.env
    try {
      const context = await makeEdgeUiContext({
        apiKey: "aac3421135575c7433551969b28f72c5b74d7b78",
        appId: "com.dstream.web",
        appName: "CaptainsRelay",
        assetsPath: assetsPath,
      });
      edgeUiContext = context;
      edgeUiContext.on("login", async (edgeAccount) => {
        console.log("JUST SIGNED IN!")
        // dispatch the Edge account info to Redux
        updateEdgeAccount(edgeAccount)
        // check if a user with this Edge Account username exists in our database
        const response = await axios.get(`${REACT_APP_API_BASE_URL}/auth/edge_username/${edgeAccount.username}`)
        if (response.status === 204) { // no one with this Edge username exists in db
          // send user to get a username (email too?)
          history.push({
            pathname: '/username',
            state: {
              edgeUsername: edgeAccount.username
            }
          })
        } else if (response.statius === 200) { // user *does* exist
          history.push("/")
        }
      })
    } catch (e) {
      console.log("Edge error: ", e)
    }
  }

  onClickEdgeLogin = () => {
    console.log("onClickEdgeLogin executing");
    edgeUiContext.showLoginWindow();

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
  };

  onClickLogin = (e) => {
    e.preventDefault()

  }

  render() {
    console.log("renderin AuthSingin");
    return (
      <div className="auth-wrapper" style={{ background: "#eff3f6" }}>
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
                    <Button
                      style={{ borderColor: "#2a5799", borderWidth: 1.5 }}
                      color="edge"
                      className="mb-2 mr-2"
                      onClick={this.onClickEdgeLogin}
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
                    <Button color="primary" className="mb-4">
                      Login
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
    );
  }
}

export default AuthSingin;
