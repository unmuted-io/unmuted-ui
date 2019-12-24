// import external modules
import React, { Component } from "react";
import {
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBody,
  Button
} from "reactstrap";

class Progresses extends Component {
  constructor(props) {
    super(props);
    this.toggleAnimate = this.toggleAnimate.bind(this);
    this.state = {
      animate: true
    };
  }
  toggleAnimate() {
    this.state.animate
      ? this.setState({ animate: false })
      : this.setState({ animate: true });
  }

  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Progress</h5>
            </CardHeader>
            <CardBody>
              <Progress className="mb-4" value="0" />
              <Progress className="mb-4" value="25" />
              <Progress className="mb-4" value="50" />
              <Progress className="mb-4" value="75" />
              <Progress className="mb-4" value="100" />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Labels</h5>
            </CardHeader>
            <CardBody>
              <Progress className="mb-4" value="25">
                25%
              </Progress>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Height</h5>
            </CardHeader>
            <CardBody>
              <Progress className="mb-4" value="25" style={{ height: "1px" }} />
              <Progress
                className="mb-4"
                value="25"
                style={{ height: "20px" }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Backgrounds</h5>
            </CardHeader>
            <CardBody>
              <Progress color="success" className="mb-4" value="25" />
              <Progress color="info" className="mb-4" value="50" />
              <Progress color="warning" className="mb-4" value="75" />
              <Progress color="danger" className="mb-4" value="100" />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Multiple Bars</h5>
            </CardHeader>
            <CardBody>
              <Progress multi>
                <Progress bar value="15" />
                <Progress bar color="success" value="30" />
                <Progress bar color="danger" value="22" />
              </Progress>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Striped</h5>
            </CardHeader>
            <CardBody>
              <Progress striped className="mb-4" value="15" />
              <Progress striped color="success" className="mb-4" value="25" />
              <Progress striped color="info" className="mb-4" value="50" />
              <Progress striped color="warning" className="mb-4" value="75" />
              <Progress striped color="danger" className="mb-4" value="100" />
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Animated Stripes</h5>
            </CardHeader>
            <CardBody>
              <Progress
                striped
                animated={this.state.animate}
                className="mb-4"
                value="15"
              />
              <Progress
                striped
                animated={this.state.animate}
                color="success"
                className="mb-4"
                value="25"
              />
              <Progress
                striped
                animated={this.state.animate}
                color="info"
                className="mb-4"
                value="50"
              />
              <Progress
                striped
                animated={this.state.animate}
                color="warning"
                className="mb-4"
                value="75"
              />
              <Progress
                striped
                animated={this.state.animate}
                color="danger"
                className="mb-4"
                value="100"
              />
              <Button onClick={this.toggleAnimate}>Toggle animation</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Progresses;
