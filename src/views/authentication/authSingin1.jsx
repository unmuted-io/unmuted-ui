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
  UncontrolledCarousel,
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import logoDark from "../../assets/images/logo-dark.png"
import auth1 from "../../assets/images/auth/img-auth-1.jpg"
import auth2 from "../../assets/images/auth/img-auth-2.jpg"
import auth3 from "../../assets/images/auth/img-auth-3.jpg"

class AuthSingin extends Component {
  render() {
    const items = [
      {
        src: auth1,
        header: "First slide label",
        altText: "First slide label",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      },
      {
        src: auth2,
        header: "Second slide label",
        altText: "Second slide label",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        src: auth3,
        header: "Third slide label",
        altText: "Third slide label",
        caption:
          "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      },
    ]
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
                      <p className="mb-2 text-muted">
                        Forgot password?
                        <Link to="/maint/reset" className="f-w-400">
                          Reset
                        </Link>
                      </p>
                      <p className="mb-0 text-muted">
                        Don’t have an account?
                        <Link to="/maint/singup" className="f-w-400">
                          Signup
                        </Link>
                      </p>
                    </CardBody>
                  </Col>
                  <Col md={6} className="d-none d-md-block">
                    <UncontrolledCarousel items={items} autoPlay />
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
