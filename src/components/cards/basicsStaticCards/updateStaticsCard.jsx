// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

class UpdateStaticCard extends PureComponent {
  render() {
    return (
      <Card className={`table-card widget-${this.props.color}-card`}>
        <div className="row-table">
          <div className="col-sm-3 card-body-big">{this.props.icon}</div>
          <div className="col-sm-9">
            <h4>{this.props.static}</h4>
            <h6>{this.props.text}</h6>
          </div>
        </div>
      </Card>
    );
  }
}

UpdateStaticCard.propTyopes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  static: PropTypes.string,
  text: PropTypes.string
};

export default UpdateStaticCard;
