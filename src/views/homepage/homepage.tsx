import React, { Component } from "react"
import { connect } from 'react-redux'
import { Row, Col } from "reactstrap";
import MainCard from "../../components/mainCard/mainCard"
import LoggedInHomepage from './loggedInHomepage'

interface HomepageProps {
  account: object
}

class Homepage extends Component<HomepageProps> {
  render() {
    const { account } = this.props
    return (
      <Row>
        <Col sm={12}>
            {account ? (
              <LoggedInHomepage />
            ) : (
              <div />
            )}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.auth.account
  }
}

export default connect(mapStateToProps, null)(Homepage)