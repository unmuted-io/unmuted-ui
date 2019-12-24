// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card } from "reactstrap";

class UserlistStaticCard extends PureComponent {
  render() {
    return (
      <Card className="user-list table-card">
        <div className="card-header">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body pb-0">
          <div className="table-responsive">
            <PerfectScrollbar>
              <div
                className="user-scroll"
                style={{ height: "430px", position: "relative" }}
              >
                <table className="table table-hover m-0">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>project</th>
                      <th>Completed</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.userList.map((object, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <img
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              src={object.image}
                              alt="activity-user"
                            />
                          </td>
                          <td>
                            <h6 className="mb-1">{object.title}</h6>
                            <p className="m-0">
                              Assigned to
                              <span className={`text-c-${object.color}`}>
                                {object.user}
                              </span>
                            </p>
                          </td>
                          <td>{object.completed}</td>
                          <td className={`text-c-${object.color}`}>{`${
                            object.status
                          }%`}</td>
                          <td>{object.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </Card>
    );
  }
}

UserlistStaticCard.propTypes = {
  title: PropTypes.string,
  userList: PropTypes.array
};

UserlistStaticCard.defaultProps = {
  title: "Card Title"
};

export default UserlistStaticCard;
