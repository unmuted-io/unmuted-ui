import React, { Component } from "react"
import { Row, Col, Label, Alert, Form } from "reactstrap"
import { Link } from "react-router-dom"
import logoDark from "../../assets/images/logo-dark.png"
import authBg from "../../assets/images/auth-bg.jpg"
import "../../assets/css/base.css"

class AuthSingup1 extends Component {
  render() {
    return (
      <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
        <Row className="align-items-center w-100 align-items-stretch bg-white">
          <Col
            md={8}
            className="d-none d-lg-flex aut-bg-img d-md-flex justify-content-center content content--side"
          >
            <div
              className="poster"
              style={{ backgroundImage: "url(" + { authBg } + ")" }}
            />
            <div className="canvas-wrap">
              <canvas />
            </div>
          </Col>
          <Col
            md={4}
            className="align-items-stret h-100 ad-flex justify-content-center content content--side px-5"
          >
            <Alert color="danger" fade={false} className="auth-effect">
              <p>
                To check
                <strong style={{ fontWeight: 700 }}>image effect</strong> on the
                left side, please type some text below in
                <strong style={{ fontWeight: 700 }}>password field</strong>
              </p>
            </Alert>
            <div className="head-block">
              <img src={logoDark} alt="" className="img-fluid mb-4" />
              <h4 className="mb-3 f-w-400">Create a account</h4>
            </div>
            <Form onSubmit={e => e.preventDefault()} className="m-0">
              <div className="form__item">
                <Label className="form__label" for="email">
                  Full Name
                </Label>
                <input
                  className="form__input form-control"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="form__item">
                <Label className="form__label" for="email">
                  Email Address
                </Label>
                <input
                  className="form__input form-control"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form__item">
                <Label className="form__label" for="password">
                  Password
                </Label>
                <div className="form__input-wrap">
                  <input
                    className="form__input form-control"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <p className="form__password-strength" id="strength-output" />
                </div>
              </div>
              <div className="form__item form__item--actions">
                <span className="text-muted">
                  Already have an account?
                  <Link to="/maint/auth-singin" className="form__link">
                    Log in
                  </Link>
                </span>
                <input
                  className="form__button btn btn-primary"
                  type="button"
                  name="signup"
                  value="Signup"
                />
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AuthSingup1
