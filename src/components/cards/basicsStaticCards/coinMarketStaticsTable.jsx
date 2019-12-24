// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainCard from "../../mainCard/mainCard";

class CoinMarketStatics extends PureComponent {
  state = {};
  render() {
    return (
      <MainCard isOption cardClass="table-card" bodyClass="p-0" title={this.props.title}>
        <div className="table-responsive">
          <PerfectScrollbar>
            <div
              className="subject-scroll"
              style={{ height: "340px", position: "relative" }}
            >
              <table className="table table-hover m-b-0">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Marketcap</th>
                    <th>Volume(24H)</th>
                    <th>Supply</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.coinData.map((object, i) => {
                    let coinIcon;
                    let coinName;
                    if (object.coin === "BTC") {
                      coinIcon = (
                        <FontAwesomeIcon
                          className={`f-30 m-r-5 align-self-center text-c-${
                            object.color
                          }`}
                          icon={["fab", "bitcoin"]}
                        />
                      );
                      coinName = "Bitcoin";
                    }
                    if (object.coin === "ETH") {
                      coinIcon = (
                        <FontAwesomeIcon
                          className={`f-30 m-r-5 align-self-center text-c-${
                            object.color
                          }`}
                          icon={["fab", "ethereum"]}
                        />
                      );
                      coinName = "Ethereum";
                    }
                    if (object.coin === "RPL") {
                      coinIcon = (
                        <FontAwesomeIcon
                          className={`f-30 m-r-5 align-self-center text-c-${
                            object.color
                          }`}
                          icon={["fab", "cloudsmith"]}
                        />
                      );
                      coinName = "Ripple";
                    }
                    if (object.coin === "NEO") {
                      coinIcon = (
                        <FontAwesomeIcon
                          className={`f-30 m-r-5 align-self-center text-c-${
                            object.color
                          }`}
                          icon={["fab", "asymmetrik"]}
                        />
                      );
                      coinName = "Neo";
                    }
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          <div className="media">
                            {coinIcon}
                            <div className="media-body">
                              <h6 className="m-0">{coinName}</h6>
                              <p className="m-0">{`(${object.coin})`}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`badge badge-${
                              object.badgeColor
                            } text-white f-14`}
                          >
                            {`$${object.price}`}
                          </span>
                        </td>
                        <td>{`$${object.cap} B`}</td>
                        <td>{`$${object.volume} B`}</td>
                        <td>{`${object.supply} M`}</td>
                        <td>
                          <span className={`text-c-${object.color}`}>{`${
                            object.change
                          }%`}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </PerfectScrollbar>
        </div>
      </MainCard>
    );
  }
}

CoinMarketStatics.propTypes = {
  title: PropTypes.string,
  coinData: PropTypes.array
};
CoinMarketStatics.defaultProps = {
  title: "Coin Market"
};

export default CoinMarketStatics;
