// import external modules
import React, { Component } from "react";
import { Button, Card, CardBody, CardHeader, ButtonGroup } from "reactstrap";

class ButtonCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: [] };
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }
  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Checkbox Button</h5>
        </CardHeader>
        <CardBody>
          <ButtonGroup>
            <Button
              onClick={() => this.onCheckboxBtnClick(1)}
              active={this.state.cSelected.includes(1)}
            >
              One
            </Button>
            <Button
              onClick={() => this.onCheckboxBtnClick(2)}
              active={this.state.cSelected.includes(2)}
            >
              Two
            </Button>
            <Button
              onClick={() => this.onCheckboxBtnClick(3)}
              active={this.state.cSelected.includes(3)}
            >
              Three
            </Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    );
  }
}

export default ButtonCheckbox;
