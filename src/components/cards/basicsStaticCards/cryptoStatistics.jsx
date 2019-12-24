import React, { PureComponent } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CryptoStatisTics extends PureComponent {
  render() {
    return (
      <Card className="table-card">
        <div className="card-header borderless">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body px-0 py-0">
          <div className="table-responsive">
            <PerfectScrollbar>
              <div style={{ height: "415px" }}>
                <table className="table table-hover mb-0">
                  <tbody>
                    {this.props.cryptoStatist.map((object, i) => {
                      let color;
                      let icon;
                      if (object.status === "+") {
                        color = "green";
                        icon = (
                          <FontAwesomeIcon
                            icon="caret-up"
                            className={`f-24  text-c-${color}`}
                          />
                        );
                      }
                      if (object.status === "-") {
                        color = "red";
                        icon = (
                          <FontAwesomeIcon
                            icon="caret-down"
                            className={`f-24  text-c-${color}`}
                          />
                        );
                      }
                      return (
                        <tr key={i}>
                          <td>{icon}</td>
                          <td>{object.name}</td>
                          <td>
                            <h6 className={`text-c-${color}`}>{`${
                              object.status
                            } $${object.price}`}</h6>
                          </td>
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

export default CryptoStatisTics;
