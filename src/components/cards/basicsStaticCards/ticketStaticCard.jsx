import React, { PureComponent } from "react";
import { Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TicketStaticCard extends PureComponent {
  render() {
    const props = this.props;
    let upDown;
    if (props.status === "up") {
      upDown = (
        <p className="m-b-0 m-t-10">
          <FontAwesomeIcon
            icon="caret-up"
            className={`m-r-10 f-18 text-c-${props.color}`}
          />{" "}
          From Previous Month
        </p>
      );
    }
    if (props.status === "down") {
      upDown = (
        <p className="m-b-0 m-t-10">
          <FontAwesomeIcon
            icon="caret-down"
            className={`m-r-10 f-18 text-c-${props.color}`}
          />{" "}
          From Previous Month
        </p>
      );
    }
    return (
      <Card className="ticket-card">
        <CardBody>
          <p className={`m-b-25 bg-c-${props.color} lbl-card`}>
            <FontAwesomeIcon icon={props.icon} className="m-r-5" />
            {props.title}
          </p>
          <div className="text-center">
            <h2 className={`m-b-0 d-inline-block text-c-${props.color}`}>
              {props.static}
            </h2>
            <p className="m-b-0 d-inline-block">{props.staticText}</p>
            {upDown}
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default TicketStaticCard;
