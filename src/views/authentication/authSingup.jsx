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

class AuthSingup extends Component {
  render() {
    return (
      <div className="auth-wrapper" style={{ background: "#eff3f6" }}>
        <div className="auth-content container">
          <Card>
            <Form onSubmit={e => e.preventDefault()}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
                    <img src={logoDark} alt="" className="img-fluid mb-4" />
                    <h4 className="mb-3 f-w-400">Sign up into your account</h4>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                          <i className="feather icon-user" />
                        </span>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" />
                    </InputGroup>
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
                    <FormGroup className="text-left mt-2">
                      <div className="checkbox checkbox-primary d-inline">
                        <input type="checkbox" id="checkbox-1" />
                        <Label for="checkbox-1" className="cr">
                          Send me the <Link to="#"> Newsletter</Link> weekly.
                        </Label>
                      </div>
                    </FormGroup>
                    <Button color="primary" className="mb-4">
                      Sign up
                    </Button>
                    <p className="mb-2">
                      Already have an account?
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

export default AuthSingup
