// import external modules
import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Progress } from "reactstrap";

class SocialresStaticCard extends PureComponent {
  render() {
    return (
      <Card className="social-res-card">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          {this.props.progres.map((object, i) => {
            return (
              <Fragment key={i}>
                <p className="m-b-10">{object.title}</p>
                <Progress
                  value={object.progressValue}
                  color={` progress-c-${object.color} `}
                  className=" m-b-25"
                />
              </Fragment>
            );
          })}
        </div>
      </Card>
    );
  }
}

SocialresStaticCard.propTypes = {
  title: PropTypes.string,
  progres: PropTypes.array
};

SocialresStaticCard.defaultProps = {
  title: "Card Title"
};

export default SocialresStaticCard;
