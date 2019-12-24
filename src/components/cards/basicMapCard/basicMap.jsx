// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUp } from "react-feather";

// import internal(own) modules
import StaticsMap from "../../amChart/staticsMap/staticsMapBasic";

class StaticsBasicMap extends PureComponent {
  render() {
    return (
      <Card>
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          <StaticsMap
            width={this.props.width}
            height={this.props.height}
            data={this.props.data}
          />
          {this.props.visitCountry
            ? this.props.visitCountry.list.map((object, i) => {
                return (
                  <div key={i} className="row mb-2">
                    <div className="col">
                      <p className="m-0">
                        <FontAwesomeIcon
                          icon="circle"
                          className={`text-c-${object.color} f-10 m-r-10`}
                        />
                        {object.country}
                      </p>
                    </div>
                    <div className="col">
                      <p className="m-0">{object.visitCount}</p>
                    </div>
                    <div className="col">
                      <p className={`text-c-${object.color} m-0`}>
                        <ArrowUp size={14} />
                        {`${object.percent}%`}
                      </p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </Card>
    );
  }
}

StaticsBasicMap.propTypes = {
  title: PropTypes.string,
  visitCountry: PropTypes.object
};
StaticsBasicMap.defaultProps = {
  title: "Location"
};

export default StaticsBasicMap;
