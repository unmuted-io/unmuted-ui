import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import MainCard from "../../components/mainCard/mainCard";

class LoggedInHomepage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wallet: props.location.state.wallet
    }
  }
  render() {
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="You Are Logged In" isOption>
            <p>
              Welcome, you are now logged in.
            </p>
          </MainCard>
        </Col>
      </Row>
    );
  }
}

export default LoggedInHomepage