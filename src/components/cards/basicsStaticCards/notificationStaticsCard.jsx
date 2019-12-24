import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card, Row } from "reactstrap";

class NotificationStatic extends PureComponent {
  render() {
    let avator;
    return (
      <Card className="latest-update-card update-card">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <PerfectScrollbar>
          <div
            className="new-scroll"
            style={{ height: "330px", position: "relative" }}
          >
            <div className="card-body">
              <div className="latest-update-box p-t-30">
                {this.props.notifications.map((object, i) => {
                  if (object.avatorT === "image") {
                    avator = (
                      <img
                        src={object.avator}
                        alt="user"
                        className="img-radius align-top update-icon"
                      />
                    );
                  }
                  if (object.avatorT === "icon") {
                    avator = (
                      <span className={`bg-c-${object.color} update-icon`}>
                        {object.avator}
                      </span>
                    );
                  }
                  return (
                    <Row key={i} className="p-b-30">
                      <div className="col-auto text-right update-meta">
                        {avator}
                      </div>
                      <div className="col p-l-5">
                        <h6 className="m-0">{object.title}</h6>
                        <p className="m-b-0">{object.user}</p>
                      </div>
                    </Row>
                  );
                })}
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </Card>
    );
  }
}

NotificationStatic.propTypes = {
  title: PropTypes.string,
  notifications: PropTypes.array
};

NotificationStatic.defaultProps = {
  title: "Notification"
};

export default NotificationStatic;
