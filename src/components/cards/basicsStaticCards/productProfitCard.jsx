import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductProfitCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card className={`prod-p-card bg-c-${props.color}`}>
        <CardBody>
          <Row className="align-items-center m-b-25">
            <Col>
              <h6 className="m-b-5 text-white">{props.title}</h6>
              <h3 className="m-b-0 text-white">{props.static}</h3>
            </Col>
            <Col xs="auto">
              <i className={`text-c-${props.color} f-18`}>
                <FontAwesomeIcon icon={props.icon} />
              </i>
            </Col>
          </Row>
          <p className="m-b-0 text-white">
            <span className="label m-r-10">+{props.change}%</span>
            From Previous Month
          </p>
        </CardBody>
      </Card>
    );
  }
}

export default ProductProfitCard;
