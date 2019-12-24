import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  InputGroup,
  Button,
  Form,
  Input
} from "reactstrap";
import logoDark from "../../assets/images/logo-dark.png";
import authBg from "../../assets/images/auth-bg.jpg";

class ChangePassword extends Component {
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
                    <h4 className="mb-4 f-w-400">Change your password</h4>
                    <InputGroup className="mb-2">
                      <Input type="password" placeholder="Current Password" />
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <Input type="password" placeholder="New Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input
                        type="password"
                        placeholder="Re-Type New Password"
                      />
                    </InputGroup>
                    <Button color="primary" className="mb-4">
                      Change password
                    </Button>
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

export default ChangePassword;
