import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Card,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Progress
} from "reactstrap";
import { HelpCircle } from "react-feather";

// import internal(own) modules
import SitTrafficLineChart from "../../amChart/staticsXYChart/trafficLineChartStatics";

class StaticsSiteVisitCard extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    let count = 0;
    let click = 0;
    let cost = 0;
    let ctr = 0;
    let arpu = 0;
    let ecpi = 0;
    let roi = 0;
    let revenue1 = 0;
    let revenue2 = 0;
    let conversions = 0;
    this.props.visitsData.list.map((object, i) => {
      count = i + 1;
      click += object.click;
      cost += object.cost;
      ctr += object.ctr;
      arpu += object.arpu;
      ecpi += object.ecpi;
      roi += object.roi;
      revenue1 += object.revenue[0];
      revenue2 += object.revenue[1];
      conversions += object.conversions;
      return (
        count +
        click +
        cost +
        ctr +
        arpu +
        roi +
        revenue1 +
        revenue2 +
        conversions
      );
    });

    return (
      <Card className="table-card">
        {this.props.cardTitle ? (
          <div className="card-header">
            <h5>{this.props.cardTitle}</h5>
          </div>
        ) : null}
        {this.props.trafficData ? (
          <SitTrafficLineChart
            height={this.props.siteTrafficHeight}
            trafficData={this.props.trafficData}
          />
        ) : null}

        <div className="card-body px-0 py-0">
          <div className="table-responsive">
            <PerfectScrollbar className="session-scroll">
              <table className="table table-hover m-b-0">
                <thead>
                  <tr>
                    <th>
                      <span>CAMPAIGN DATE</span>
                    </th>
                    {this.props.click ? (
                      <th>
                        <span>
                          Click
                          <HelpCircle
                            className="help m-l-5"
                            id="click"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="click"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.cost ? (
                      <th>
                        <span>
                          COST
                          <HelpCircle
                            className="help m-l-5"
                            id="cost"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="cost"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.ctr ? (
                      <th>
                        <span>
                          CTR
                          <HelpCircle
                            className="help m-l-5"
                            id="ctr"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="ctr"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.arpu ? (
                      <th>
                        <span>
                          ARPU
                          <HelpCircle
                            className="help m-l-5"
                            id="arup"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="arup"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.ecpi ? (
                      <th>
                        <span>
                          ECPI
                          <HelpCircle
                            className="help m-l-5"
                            id="ecpi"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="ecpi"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.roi ? (
                      <th>
                        <span>
                          ROI
                          <HelpCircle
                            className="help m-l-5"
                            id="roi"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="roi"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.revenue ? (
                      <th>
                        <span>
                          REVENUE
                          <HelpCircle
                            className="help m-l-5"
                            id="revenue"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="revenue"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                    {this.props.conversions ? (
                      <th>
                        <span>
                          CONVERSIONS
                          <HelpCircle
                            className="help m-l-5"
                            id="conversions"
                            size={16}
                          />
                          <UncontrolledPopover
                            trigger="focus"
                            placement="right"
                            target="conversions"
                          >
                            <PopoverHeader>Popover title</PopoverHeader>
                            <PopoverBody>
                              And here's some amazing content. It's very
                              engaging. Right?
                            </PopoverBody>
                          </UncontrolledPopover>
                        </span>
                      </th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.props.campaing}</td>
                    {this.props.click ? <td>{click / count}</td> : null}
                    {this.props.cost ? <td>{cost / count}</td> : null}
                    {this.props.ctr ? <td>{ctr / count}</td> : null}
                    {this.props.arpu ? <td>{`${arpu / count}%`}</td> : null}
                    {this.props.ecpi ? <td>{`${parseInt(ecpi / count)}%`}</td> : null}
                    {this.props.roi ? <td>{roi / count}</td> : null}
                    {this.props.revenue ? (
                      <td>
                        {revenue1 / count}:{revenue2 / count}
                      </td>
                    ) : null}

                    {this.props.conversions ? (
                      <td>{`${parseInt(conversions / count)}%`}</td>
                    ) : null}
                  </tr>
                  {this.props.visitsData.list.map((data, i) => (
                    <tr key={i}>
                      <td>{data.date} </td>
                      {this.props.click ? (
                        <td>
                          {data.click}
                          <Progress
                            className="mt-1"
                            color="danger rounded"
                            value={data.clickPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.cost ? (
                        <td>
                          {data.cost}
                          <Progress
                            className="mt-1"
                            color="primary rounded"
                            value={data.costPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.ctr ? (
                        <td>
                          {data.ctr}
                          <Progress
                            className="mt-1"
                            color="warning rounded"
                            value={data.ctrPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.arpu ? (
                        <td>
                          {`${data.arpu}%`}
                          <Progress
                            className="mt-1"
                            color="success rounded"
                            value={data.arpuPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.ecpi ? (
                        <td>
                          {`${data.ecpi}%`}
                          <Progress
                            className="mt-1"
                            color="info rounded"
                            value={data.ecpiPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.roi ? (
                        <td>
                          {data.roi}
                          <Progress
                            className="mt-1"
                            color="danger rounded"
                            value={data.roiPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.revenue ? (
                        <td>
                          {`${data.revenue[0]}: ${data.revenue[1]}`}
                          <Progress
                            className="mt-1"
                            color="warning rounded"
                            value={data.revenuePro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                      {this.props.conversions ? (
                        <td>
                          {`${data.conversions}%`}
                          <Progress
                            className="mt-1"
                            color="success rounded"
                            value={data.conversionsPro}
                            style={{ height: "4px" }}
                          />
                        </td>
                      ) : null}
                    </tr>
                  ))}
                </tbody>
              </table>
            </PerfectScrollbar>
          </div>
        </div>
      </Card>
    );
  }
}

StaticsSiteVisitCard.propTypes = {
  cardTitle: PropTypes.string,
  visitsData: PropTypes.object,
  click: PropTypes.bool,
  cost: PropTypes.bool,
  ctr: PropTypes.bool,
  arpu: PropTypes.bool,
  ecpi: PropTypes.bool,
  roi: PropTypes.bool,
  revenue: PropTypes.bool,
  conversions: PropTypes.bool
};

StaticsSiteVisitCard.defaultProps = {
  click: false,
  cost: false,
  ctr: false,
  arpu: false,
  ecpi: false,
  roi: false,
  revenue: false,
  conversions: false
};

export default StaticsSiteVisitCard;
