// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, ButtonGroup } from "reactstrap";

class ButtonRadio extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }
  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Radio Buttons</h5>
        </CardHeader>
        <CardBody>
          <ButtonGroup>
            <Button
              onClick={() => this.onRadioBtnClick(1)}
              active={this.state.rSelected === 1}
            >
              One
            </Button>
            <Button
              onClick={() => this.onRadioBtnClick(2)}
              active={this.state.rSelected === 2}
            >
              Two
            </Button>
            <Button
              onClick={() => this.onRadioBtnClick(3)}
              active={this.state.rSelected === 3}
            >
              Three
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonRadio;
