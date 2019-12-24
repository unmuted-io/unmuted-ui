import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { ArrowDown, ArrowUp } from "react-feather";

class ClientStaticCard extends PureComponent {
  render() {
    const props = this.props;
    let con1;
    let con2;
    return (
      <Row noGutters>
        {props.data.map((object, i) => {
          if (object.change1 > 0) {
            con1 = (
              <h3 className="mt-3 mb-0">
                <ArrowUp
                  className="text-c-green"
                  size={24}
                  style={{ marginTop: "-2px" }}
                />{" "}
                {object.static1}
                <sup className="text-c-green f-14 ml-1">{object.change1}%</sup>
              </h3>
            );
          }
          if (object.change2 > 0) {
            con2 = (
              <h3 className="mt-3 mb-0">
                <ArrowUp
                  className="text-c-green"
                  size={24}
                  style={{ marginTop: "-2px" }}
                />{" "}
                {object.static2}
                <sup className="text-c-green f-14 ml-1">{object.change2}%</sup>
              </h3>
            );
          }
          if (object.change1 < 0) {
            con1 = (
              <h3 className="mt-3 mb-0">
                <ArrowDown
                  className="text-c-red"
                  size={24}
                  style={{ marginTop: "-2px" }}
                />{" "}
                {object.static1}
                <sup className="text-c-red f-14 ml-1">{object.change1}%</sup>
              </h3>
            );
          }
          if (object.change2 < 0) {
            con2 = (
              <h3 className="mt-3 mb-0">
                <ArrowDown
                  className="text-c-red"
                  size={24}
                  style={{ marginTop: "-2px" }}
                />{" "}
                {object.static2}
                <sup className="text-c-red f-14 ml-1">{object.change2}%</sup>
              </h3>
            );
          }
          return (
            <Col md={4} xl={2} key={i}>
              <Card>
                <CardBody className="border-bottom">
                  <span className="text-muted">{object.title1}</span>
                  {con1}
                </CardBody>
                <CardBody>
                  <span className="text-muted">{object.title2}</span>
                  {con2}
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default ClientStaticCard;
