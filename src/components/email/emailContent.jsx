import React from "react";
import { Card, CardHeader, CardBody, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EmailContent = ({ emailDetails }) => (
  <Card>
    <CardHeader>
      <h5>{emailDetails.subject}</h5>
      <h6 className="float-right m-0">{emailDetails.time}</h6>
    </CardHeader>
    <CardBody>
      <div className="email-read">
        <div className="photo-table m-r-10">
          <Link to="#">
            <img
              className="media-object img-radius"
              src={emailDetails.thumbnail}
              alt="E-mail user"
              style={{ width: "50px" }}
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <h6 className="user-name">{emailDetails.from}</h6>
          </Link>
          <Link className="user-mail txt-muted" to="#">
            <h6>From: {emailDetails.email}</h6>
          </Link>
        </div>
      </div>
      <div className="m-b-20 m-l-50 p-l-10 email-contant">
        <div className="photo-contant">
          <div>
            <h6 className="email-welcome-txt">{emailDetails.welcometext}</h6>
            <div
              className="email-content"
              dangerouslySetInnerHTML={{ __html: emailDetails.emailContent }}
            />
          </div>
          <div className="m-t-15">
            <Form className="form-material" onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Input type="textarea" placeholder="Reply Your Thoughts" />
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
);

EmailContent.propTypes = {
  emailDetails: PropTypes.object
};

export default EmailContent;
