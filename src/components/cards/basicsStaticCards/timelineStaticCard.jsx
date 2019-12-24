import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody, Carousel, CarouselItem } from "reactstrap";
import { TrendingDown, TrendingUp } from "react-feather";

class TimelineStaticCard extends PureComponent {
  constructor(props) {
    super(props);
    this.items = this.props.data;
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  render() {
    let icon;
    let timeline;
    const props = this.props;
    if (props.icon === "up") {
      icon = <TrendingUp className="text-c-green mr-2" size={16} />;
    }
    if (props.icon === "down") {
      icon = <TrendingDown className="text-c-red mr-2" size={16} />;
    }
    if (props.timeline) {
      timeline = props.data.map((object, i) => {
        if (object.icon === "up") {
          icon = <TrendingUp className="text-c-green mr-2" size={16} />;
        }
        if (object.icon === "down") {
          icon = <TrendingDown className="text-c-red mr-2" size={16} />;
        }
        return (
          <CarouselItem
            key={i}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <CardBody className={`level-${object.icon} text-right`}>
              <span className="float-left">
                {icon}
                {object.iconText}
              </span>
              <h3 className="d-inline-block m-0">{object.name}</h3>
            </CardBody>
          </CarouselItem>
        );
      });
    } else {
      timeline = (
        <CardBody className={`level-${props.icon} text-right`}>
          <span className="float-left">
            {icon}
            {props.iconText}
          </span>
          <h3 className="d-inline-block m-0">{props.name}</h3>
        </CardBody>
      );
    }
    return (
      <Card>
        <CardBody className="border-bottom p-0">
          <Row className="text-center m-0">
            <Col className="border-right">
              <h6 className={`my-3 text-c-${props.staticColor1}`}>
                {props.static1}%
              </h6>
            </Col>
            <Col className="border-right">
              <h6 className={`my-3 text-c-${props.staticColor2}`}>
                {props.static2}
              </h6>
            </Col>
            <Col>
              <h6 className="my-3 text-muted">{props.static3}</h6>
            </Col>
          </Row>
        </CardBody>
        {props.timeline ? (
          <Carousel
            activeIndex={this.state.activeIndex}
            next={this.next}
            previous={this.previous}
            slide={true}
            interval={2000}
          >
            {timeline}
          </Carousel>
        ) : (
          timeline
        )}
      </Card>
    );
  }
}

export default TimelineStaticCard;
