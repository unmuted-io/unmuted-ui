import React, { Component, Fragment } from "react"
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
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import authBg from "../../assets/images/auth/img-auth-2.jpg"

class AuthSingin extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      default: true,
    }
  }

  toggle() {
    this.setState({ default: !this.state.default })
  }

  render() {
    return (
      <Fragment>
        <div className="blur-bg-images" />
        <div className="auth-wrapper">
          <div className="auth-content container">
            <Card>
              <Form onSubmit={e => e.preventDefault()}>
                <Row className="align-items-center">
                  <Col md={6}>
                    <CardBody>
                      <h2 className="mb-4">
                        Welcome to
                        <span className="text-c-blue">Elite Able</span>
                      </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industrys.
                      </p>
                      <ol className="position-relative carousel-indicators justify-content-start">
                        <li className={this.state.default ? "active" : null} />
                        <li className={!this.state.default ? "active" : null} />
                      </ol>
                      {this.state.default ? (
                        <Fragment>
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
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <span className="input-group-text">
                                <i className="feather icon-lock" />
                              </span>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" />
                          </InputGroup>
                          <FormGroup className="text-left mt-2">
                            <div className="checkbox checkbox-primary d-inline">
                              <input type="checkbox" id="checkbox-1" />
                              <Label for="checkbox-1" className="cr">
                                Send me the <Link to="#"> Newsletter</Link>{" "}
                                weekly.
                              </Label>
                            </div>
                          </FormGroup>
                          <Button color="primary" className="mb-4">
                            Sing up
                          </Button>
                          <Button
                            color="primary"
                            className="mb-4"
                            outline
                            onClick={this.toggle}
                          >
                            Existing use
                          </Button>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                              <span className="input-group-text">
                                <i className="feather icon-user" />
                              </span>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Username" />
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <span className="input-group-text">
                                <i className="feather icon-lock" />
                              </span>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password" />
                          </InputGroup>
                          <FormGroup className="text-left mt-2">
                            <div className="checkbox checkbox-primary d-inline">
                              <input
                                type="checkbox"
                                id="checkbox-1"
                                defaultChecked
                              />
                              <Label for="checkbox-1" className="cr">
                                Save credentials
                              </Label>
                            </div>
                          </FormGroup>
                          <Button color="primary" className="mb-4">
                            Login
                          </Button>
                          <Button
                            color="primary"
                            className="mb-4"
                            outline
                            onClick={this.toggle}
                          >
                            Create Profile
                          </Button>
                          <p className="mb-2 text-muted">
                            Forgot password?
                            <Link to="/maint/reset" className="f-w-400">
                              Reset
                            </Link>
                          </p>
                        </Fragment>
                      )}
                    </CardBody>
                  </Col>
                  <Col md={6}>
                    <img
                      src={authBg}
                      alt=""
                      className="img-fluid bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    />
                    <img
                      src={logo}
                      alt=""
                      className="img-fluid img-logo-overlay"
                    />
                  </Col>
                </Row>
              </Form>
            </Card>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default AuthSingin
