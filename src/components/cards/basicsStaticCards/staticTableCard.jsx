import React from "react";
import { Row, Col, Card } from "reactstrap";

const StaticTableCard = props => (
  <Card className="table-card">
    <div className="row-table">
      <Col sm="6" className="card-body-big br">
        <Row>
          <Col sm="4">
            <i
              className={`icon mb-1 d-block ${
                props.textColor1 ? props.textColor1 : null
              }`}
            >
              {props.Icon1}
            </i>
          </Col>
          <Col sm="8" className="text-md-center">
            <h5>{props.value1}</h5>
            <span>{props.text1}</span>
          </Col>
        </Row>
      </Col>
      <Col sm="6" className="card-body-big">
        <Row>
          <Col sm="4">
            <i
              className={`icon mb-1 d-block ${
                props.textColor2 ? props.textColor2 : null
              }`}
            >
              {props.Icon2}
            </i>
          </Col>
          <Col sm="8" className="text-md-center">
            <h5>{props.value2}</h5>
            <span>{props.text2}</span>
          </Col>
        </Row>
      </Col>
    </div>
    <div className="row-table">
      <Col sm="6" className="card-body-big br">
        <Row>
          <Col sm="4">
            <i
              className={`icon mb-1 d-block ${
                props.textColor3 ? props.textColor3 : null
              }`}
            >
              {props.Icon3}
            </i>
          </Col>
          <Col sm="8" className="text-md-center">
            <h5>{props.value3}</h5>
            <span>{props.text3}</span>
          </Col>
        </Row>
      </Col>
      <Col sm="6" className="card-body-big">
        <Row>
          <Col sm="4">
            <i
              className={`icon mb-1 d-block ${
                props.textColor4 ? props.textColor4 : null
              }`}
            >
              {props.Icon4}
            </i>
          </Col>
          <Col sm="8" className="text-md-center">
            <h5>{props.value4}</h5>
            <span>{props.text4}</span>
          </Col>
        </Row>
      </Col>
    </div>
  </Card>
);

export default StaticTableCard;
