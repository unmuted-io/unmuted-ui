import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import SearchEmail from "../../containers/email/emailSearch";
import EmailSidebar from "../../components/email/emailSidebar";
import EmailBody from "../../containers/email/emailBody";
import Compose from "../../containers/email/emailCompose";

class Email extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card className="email-card">
            <CardHeader>
              <div className="mail-header">
                <Row className="align-items-center">
                  <Col xl={2} md={3}>
                    <Link to="/" className="b-brand">
                      <div className="b-bg">A</div>
                      <span className="b-title text-muted">Elite Able</span>
                    </Link>
                  </Col>
                  <Col xl={10} md={9}>
                    <SearchEmail />
                  </Col>
                </Row>
              </div>
            </CardHeader>
            <CardBody>
              <div className="mail-body">
                <Row>
                  <Col xl={2} md={3}>
                    <Compose />
                    <EmailSidebar />
                  </Col>
                  <Col xl={10} md={9} className="inbox-right">
                    <EmailBody />
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Email;
