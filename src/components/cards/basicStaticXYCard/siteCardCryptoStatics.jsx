// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

// import internal(own) modules
import SitChartCryptoStatics from "../../amChart/staticsXYChart/siteChartCryptoStatics";

class SiteCardCryptoStatics extends PureComponent {
  state = {};
  render() {
    return (
      <Card>
        <div className="card-body">
          <span>{this.props.title}</span>
          <h3>{this.props.change}</h3>
          <SitChartCryptoStatics
            color={this.props.color}
            height={this.props.height}
            data={this.props.data}
          />
        </div>
      </Card>
    );
  }
}

SiteCardCryptoStatics.propTypes = {
  title: PropTypes.string,
  change: PropTypes.string
};

SiteCardCryptoStatics.defaultProps = {
  title: "Title",
  change: "0"
};

export default SiteCardCryptoStatics;
