import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import timeGrid from "@fullcalendar/timegrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

class FullCalendars extends Component {
  render() {
    const event = [
      {
        title: "All Day Event",
        start: "2018-08-01",
        borderColor: "#04a9f5",
        backgroundColor: "#04a9f5",
        textColor: "#fff"
      },
      {
        title: "Long Event",
        start: "2018-08-07",
        end: "2018-08-10",
        borderColor: "#f44236",
        backgroundColor: "#f44236",
        textColor: "#fff"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2018-08-09T16:00:00",
        borderColor: "#f4c22b",
        backgroundColor: "#f4c22b",
        textColor: "#fff"
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2018-08-16T16:00:00",
        borderColor: "#3ebfea",
        backgroundColor: "#3ebfea",
        textColor: "#fff"
      },
      {
        title: "Conference",
        start: "2018-08-11",
        end: "2018-08-13",
        borderColor: "#1de9b6",
        backgroundColor: "#1de9b6",
        textColor: "#fff"
      },
      {
        title: "Meeting",
        start: "2018-08-12T10:30:00",
        end: "2018-08-12T12:30:00"
      },
      {
        title: "Lunch",
        start: "2018-08-12T12:00:00",
        borderColor: "#f44236",
        backgroundColor: "#f44236",
        textColor: "#fff"
      },
      {
        title: "Happy Hour",
        start: "2018-08-12T17:30:00",
        borderColor: "#a389d4",
        backgroundColor: "#a389d4",
        textColor: "#fff"
      },
      {
        title: "Birthday Party",
        start: "2018-08-13T07:00:00"
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: "2018-08-28",
        borderColor: "#a389d4",
        backgroundColor: "#a389d4",
        textColor: "#fff"
      }
    ];
    const head = {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    };
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h5>Full Calendar</h5>
            </CardHeader>
            <CardBody>
              <FullCalendar
                defaultView="dayGridMonth"
                header={head}
                editable={true}
                defaultDate="2018-08-12"
                droppable={true}
                events={event}
                plugins={[dayGridPlugin, interaction, timeGrid]}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FullCalendars;
