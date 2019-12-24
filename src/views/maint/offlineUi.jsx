import React, { Component } from "react";
import { Form, Button } from "reactstrap";

class OfflineUi extends Component {
  render() {
    return (
      <div className="auth-wrapper offline" style={{ background: "#ffffff" }}>
        <div className="text-center">
          <h1 className="mb-4">OFFLINE</h1>
          <h5 className="text-muted mb-4">
            Oops! Website Is Temporarily Offline
          </h5>
          <Form action="/">
            <Button className="mb-4" color="primary">
              <i className="feather icon-home" />
              Back to Home
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default OfflineUi;
