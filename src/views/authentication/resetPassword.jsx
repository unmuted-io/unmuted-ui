import React, { Component } from 'react'
import { Card, CardBody, Row, Col, InputGroup, InputGroupAddon, Button, Form, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import unmutedLogo from '../../assets/images/logo/logo-white-text-transparent-1040x1080.png'

class Reset extends Component {
  render() {
    return (
      <div className="auth-wrapper" style={{ background: '#eff3f6' }}>
        <div className="auth-content container">
          <Card>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row className="align-items-center">
                <Col md={6}>
                  <CardBody>
                    <h4 className="mb-3 f-w-400">Reset your password</h4>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                          <i className="feather icon-mail" />
                        </span>
                      </InputGroupAddon>
                      <Input type="email" placeholder="Email address" />
                    </InputGroup>
                    <Button color="primary" className="mb-4">
                      Reset password
                    </Button>
                    <p className="mb-0 text-muted">
                      Don’t have an account?
                      <Link to="/maint/singup" className="f-w-400">
                        Signup
                      </Link>
                    </p>
                  </CardBody>
                </Col>
                <Col md={6}>
                  <img src={unmutedLogo} alt="" className="img-fluid auth-logo" />
                </Col>
              </Row>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}

export default Reset
