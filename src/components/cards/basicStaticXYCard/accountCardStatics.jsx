// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "reactstrap";
import { TrendingUp, TrendingDown } from "react-feather";

// import internal(own) modules
import CoreXYChartStatics from "../../amChart/staticsXYChart/coreXYChartStatics";

class AccountCardStatics extends PureComponent {
  render() {
    const props = this.props;
    return (
      <Card>
        <div className="card-body">
          <h6 className="text-c-blue mb-3">{props.title}</h6>
          <Row>
            <Col className="mb-3">
              <h3>{props.value}</h3>
              <h6>
                <TrendingDown size={16} className="text-c-red mr-2" />
                {props.valueTitle}
              </h6>
              <span>
                {props.valueText}
                <span className="text-c-blue">Learn More</span>
              </span>
            </Col>
            <Col className="mb-3">
              <h3>{props.profit}</h3>
              <h6>
                <TrendingUp size={16} className="text-c-blue mr-2" />
                {props.profitTitle}
              </h6>
              <span>
                {props.profitText}
                <span className="text-c-blue">Learn More</span>
              </span>
            </Col>
          </Row>
        </div>
        <CoreXYChartStatics
          data={props.data}
          width={props.width}
          height={props.height}
        />
      </Card>
    );
  }
}

AccountCardStatics.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  valueTitle: PropTypes.string,
  valueText: PropTypes.string,
  profit: PropTypes.string,
  profitTitle: PropTypes.string,
  profitText: PropTypes.string
};

export default AccountCardStatics;
