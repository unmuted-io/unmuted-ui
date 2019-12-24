import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Search from "../../containers/icons/flag/IconSearch";
import IconList from "../../containers/icons/flag/IconList";

class FlagIcons extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Feather Icon</h5>
            </CardHeader>
            <CardBody className="text-center">
              <Row className="justify-content-center">
                <Col sm={6}>
                  <Search />
                </Col>
              </Row>
              <IconList />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FlagIcons;
