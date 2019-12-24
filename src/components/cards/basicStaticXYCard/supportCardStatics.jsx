// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "reactstrap";

// import internal(own) modules
import SupportChartStatic from "../../amChart/staticsXYChart/supportChartStatics";

class SupportCardStatic extends PureComponent {
  render() {
    return (
      <Card className="support-bar">
        <div className="card-body pb-0">
          <h2 className="m-0">{this.props.static}</h2>
          <span className={`text-c-${this.props.color}`}>
            {this.props.title}
          </span>
          <p className="mb-3 mt-3">{this.props.text}</p>
        </div>
        <SupportChartStatic
          height={this.props.height}
          chartData={this.props.chartData}
          colorCode={this.props.colorCode}
        />

        <div className={`card-footer text-white bg-${this.props.bgColor}`}>
          <Row className="text-center">
            {this.props.staticData.map((object, i) => {
              return (
                <Col key={i}>
                  <h4 className="m-0 text-white">{object.static}</h4>
                  <span>{object.text}</span>
                </Col>
              );
            })}
          </Row>
        </div>
      </Card>
    );
  }
}

SupportCardStatic.propTypes = {
  static: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  bgColor: PropTypes.string,
  staticData: PropTypes.array
};

SupportCardStatic.defaultProps = {
  title: "Title"
};

export default SupportCardStatic;
