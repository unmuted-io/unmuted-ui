// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

// import internal(own) modules
import SiteChartStatic from "../../amChart/staticsXYChart/siteChartStatics";

class SiteCardStatics extends PureComponent {
  render() {
    return (
      <Card>
        <div className="card-body">
          <div className="row d-flex align-items-center">
            <div className="col-auto">
              <h6>
                Active customer <span className="d-block">on site</span>
              </h6>
              <h2 className="m-0">{this.props.statics1}</h2>
              <span className="text-c-green">{this.props.statics2}</span>
            </div>
            <div className="col">
              <SiteChartStatic
                height={this.props.height}
                data={this.props.data}
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

SiteCardStatics.propTypes = {
  statics1: PropTypes.string,
  statics2: PropTypes.string
};

export default SiteCardStatics;
