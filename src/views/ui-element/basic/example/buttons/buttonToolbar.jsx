// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ButtonGroup,
  Button,
  ButtonToolbar
} from "reactstrap";

class ButtonToolbars extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Button Toolbar</h5>
        </CardHeader>
        <CardBody>
          <ButtonToolbar>
            <ButtonGroup className="mr-2">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2">
              <Button>5</Button>
              <Button>6</Button>
              <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonToolbars;
