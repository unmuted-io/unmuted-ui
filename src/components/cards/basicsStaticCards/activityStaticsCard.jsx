// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import MainCard from "../../mainCard/mainCard";

class ActivityStaticCard extends PureComponent {
  render() {
    return (
      <MainCard
        title={this.props.title}
        cardClass="latest-update-card"
        isScroll="latest-scroll"
        scrollHeight="370px"
        isOption
      >
        <div className="latest-update-box">
          {this.props.activityList.map((object, i) => {
            return (
              <Row key={i} className="p-t-20">
                <div className="col-auto text-right update-meta">
                  <i className={`b-${object.borderColor} update-icon ring`} />
                </div>
                <div className="col p-l-5">
                  <h6 className="m-0">{object.title}</h6>
                  <p className="m-b-0">
                    {object.text}
                    <Link to="#" className={`text-c-${object.textColor}`}>
                      More
                    </Link>
                  </p>
                </div>
              </Row>
            );
          })}
        </div>
      </MainCard>
    );
  }
}

ActivityStaticCard.propTypes = {
  title: PropTypes.string,
  activityList: PropTypes.array
};

ActivityStaticCard.defaultProps = {
  title: "Card Title"
};

export default ActivityStaticCard;
