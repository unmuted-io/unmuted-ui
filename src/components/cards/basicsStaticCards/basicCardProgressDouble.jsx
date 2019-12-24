// import external modules
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class ProgressBouble extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    return (
      <Card>
        <div className="card-body">
          <Row>
            <div className="col-auto">
              <span>Revenue</span>
            </div>
            <Col className="text-right">
              <div className="btn-group">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle
                    caret
                    className="btn-sm btn-outline-secondary"
                  >
                    This month
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>1 Week</DropdownItem>
                    <DropdownItem>2 Week</DropdownItem>
                    <DropdownItem>4 Year</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Col>
          </Row>
          <Progress
            value={this.props.progressValue1}
            color="primary"
            style={{ height: "10px" }}
            className="mt-4"
          />
          <Row>
            <div className="col-auto">
              <span className="text-uppercase mt-2 d-block">EARNING</span>
              <h5 className="mb-0">{`$${this.props.earning}`}</h5>
            </div>
            <Col className="text-right">
              <span className="text-uppercase mt-2 d-block">EXPENSE</span>
              <h5 className="mb-0">{`$${this.props.expense}`}</h5>
            </Col>
          </Row>

          <hr />
          <Row>
            <div className="col-auto">
              <span className="text-uppercase d-block">budget</span>
            </div>
            <Col className="text-right">
              <span className="text-uppercase d-block">EARNING</span>
              <h5 className="mb-0">
                {`$${this.props.budget}`} of {`$${this.props.budgetEarning}`}
              </h5>
            </Col>
          </Row>

          <Progress
            value={this.props.progressValue2}
            color="success rounded"
            style={{ height: "10px" }}
            className="mt-2"
          >
            {`${this.props.progressValue2}%`}
          </Progress>
        </div>
      </Card>
    );
  }
}

ProgressBouble.propTypes = {
  progressValue1: PropTypes.string,
  earning: PropTypes.string,
  expense: PropTypes.string,
  budget: PropTypes.string,
  budgetEarning: PropTypes.string,
  progressValue2: PropTypes.string
};

ProgressBouble.defaultProps = {
  progressValue1: "0",
  earning: "0",
  expense: "0",
  budget: "0",
  budgetEarning: "0",
  progressValue2: "0"
};

export default ProgressBouble;
