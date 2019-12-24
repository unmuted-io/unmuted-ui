// import external modules
import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, InputGroup } from "reactstrap";
import DatePicker from "react-datepicker";
import { addDays, subDays, addMonths } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const DataPic = ({ title, children }) => (
  <Col xl={4} md={6}>
    <Card>
      <CardHeader>
        <h5>{title}</h5>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  </Col>
);

class Datepickers extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isWeekday = this.isWeekday.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.calendarWeeks = this.calendarWeeks.bind(this);
    this.highlight = this.highlight.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.datesDisabled = this.datesDisabled.bind(this);
    this.autoClose = this.autoClose.bind(this);
    this.weekHighlighted = this.weekHighlighted.bind(this);
    this.state = {
      weekDisabled: null,
      startDate: null,
      endDate: null,
      calendarWeeks: null,
      highlight: null,
      toggleActive: null,
      datesDisabled: null,
      autoClose: null,
      weekHighlighted: null
    };
    this.highlightWithRanges = [
      {
        "react-datepicker__day--highlighted-custom-1": [
          subDays(new Date(), 4),
          subDays(new Date(), 3),
          subDays(new Date(), 2),
          subDays(new Date(), 1)
        ]
      },
      {
        "react-datepicker__day--highlighted-custom-2": [
          addDays(new Date(), 1),
          addDays(new Date(), 2),
          addDays(new Date(), 3),
          addDays(new Date(), 4)
        ]
      }
    ];
  }
  weekHighlighted(date) {
    this.setState({ weekHighlighted: date });
  }
  autoClose(date) {
    this.setState({ autoClose: date });
  }
  datesDisabled(date) {
    this.setState({ datesDisabled: date });
  }
  toggleActive(date) {
    this.setState({ toggleActive: date });
  }
  highlight(date) {
    this.setState({ highlight: date });
  }
  handleChange(date) {
    this.setState({ weekDisabled: date });
  }
  handleChangeStart(date) {
    this.setState({ startDate: date });
  }
  handleChangeEnd(date) {
    this.setState({ endDate: date });
  }
  isWeekday(date) {
    const day = date.getDay();
    return day !== 2;
  }
  calendarWeeks(date) {
    this.setState({ calendarWeeks: date });
  }

  render() {
    return (
      <Row>
        <DataPic title="Days of Week Disabled">
          <DatePicker
            selected={this.state.weekDisabled}
            onChange={this.handleChange}
            filterDate={this.isWeekday}
            className="form-control"
          />
        </DataPic>
        <DataPic title="Days of Week Highlighted">
          <DatePicker
            selected={this.state.weekHighlighted}
            onChange={this.weekHighlighted}
            highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
            className="form-control"
          />
        </DataPic>
        <DataPic title="AutoClose">
          <DatePicker
            selected={this.state.autoClose}
            onChange={this.autoClose}
            className="form-control"
          />
        </DataPic>
        <DataPic title="DatesDisabled">
          <DatePicker
            selected={this.state.datesDisabled}
            onChange={this.datesDisabled}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 5)}
            showDisabledMonthNavigation
            className="form-control"
          />
        </DataPic>
        <DataPic title="Toggle Active">
          <DatePicker
            selected={this.state.toggleActive}
            onChange={this.toggleActive}
            shouldCloseOnSelect={false}
            className="form-control"
          />
        </DataPic>
        <DataPic title="Today Highlight">
          <DatePicker
            selected={this.state.highlight}
            onChange={this.highlight}
            highlightDates={this.highlightWithRanges}
            className="form-control"
          />
        </DataPic>
        <DataPic title="Calendar Weeks">
          <DatePicker
            selected={this.state.calendarWeeks}
            onChange={this.calendarWeeks}
            shouldCloseOnSelect={false}
            className="form-control"
          />
        </DataPic>
        <Col xl={8} md={6}>
          <Card>
            <CardHeader>
              <h5>Date Range</h5>
            </CardHeader>
            <CardBody>
              <InputGroup className="input-daterange">
                <DatePicker
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeStart}
                  className="form-control text-left"
                />
                <DatePicker
                  selected={this.state.endDate}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onChange={this.handleChangeEnd}
                  className="form-control text-right"
                />
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Datepickers;
