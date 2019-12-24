// import external modules
import React, { Component } from "react";
import { Card, CardHeader, CardBody, ButtonGroup, Button } from "reactstrap";

class ButtonGroups extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Basic Button Group</h5>
        </CardHeader>
        <CardBody>
          <ButtonGroup className="mb-2">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonGroups;
