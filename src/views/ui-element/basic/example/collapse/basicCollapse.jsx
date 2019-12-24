// import external modules
import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Button,
  Collapse,
  CardBody,
  UncontrolledCollapse
} from "reactstrap";

class BasicCollapse extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <Button color="primary" onClick={this.toggle}>
            Controlled Collapse
          </Button>
          <Button color="primary" id="uncontrolledCollapse">
            Uncontrolled Collapse
          </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapse}>
          <CardBody>
            <p className="mb-0">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </p>
          </CardBody>
        </Collapse>
        <UncontrolledCollapse toggler="#uncontrolledCollapse">
          <CardBody>
            <p className="mb-0">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </p>
          </CardBody>
        </UncontrolledCollapse>
      </Card>
    );
  }
}

export default BasicCollapse;
