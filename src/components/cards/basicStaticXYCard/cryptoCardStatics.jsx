// import external modules
import React, { PureComponent } from "react";
import classnames from "classnames";
import { Card, TabContent, TabPane } from "reactstrap";

// import internal(own) modules
import CryptoShartStatics from "../../amChart/staticsXYChart/cryptoChartStatics";

class CryptoCardStatics extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Card>
        <div className="card-body">
          <div className="btn-group btn-group-toggle">
            <label
              onClick={() => {
                this.toggle("1");
              }}
              className={classnames("btn btn-secondary", {
                active: this.state.activeTab === "1"
              })}
            >
              BTC
            </label>
            <label
              onClick={() => {
                this.toggle("2");
              }}
              className={classnames("btn btn-secondary", {
                active: this.state.activeTab === "2"
              })}
            >
              ETH
            </label>
            <label
              onClick={() => {
                this.toggle("3");
              }}
              className={classnames("btn btn-secondary", {
                active: this.state.activeTab === "3"
              })}
            >
              LTC
            </label>
          </div>
        </div>

        <TabContent
          style={{ boxShadow: "none" }}
          className="p-0"
          activeTab={this.state.activeTab}
        >
          <TabPane tabId="1">
            <CryptoShartStatics
              width={this.props.width}
              height={this.props.height}
              databtc={this.props.databtc}
            />
          </TabPane>
          <TabPane tabId="2">
            <CryptoShartStatics
              width={this.props.width}
              height={this.props.height}
              dataeth={this.props.dataeth}
            />
          </TabPane>
          <TabPane tabId="3">
            <CryptoShartStatics
              width={this.props.width}
              height={this.props.height}
              dataltc={this.props.dataltc}
            />
          </TabPane>
        </TabContent>
      </Card>
    );
  }
}

export default CryptoCardStatics;
