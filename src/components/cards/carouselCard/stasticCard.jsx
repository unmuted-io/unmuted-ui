import React, { PureComponent } from "react";
import { Row, Col, Card, CardBody, Carousel, CarouselItem } from "reactstrap";

class StaticSliderCard extends PureComponent {
  constructor(props) {
    super(props);
    this.items = 2;
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
      this.state.activeIndex === this.items - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.items - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        slide={true}
      >
        <CarouselItem
          key={1}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <Row noGutters>
            {this.props.items.map((items, i) => {
              return (
                <Col key={i} md={4} xl={2}>
                  <Card>
                    <CardBody>
                      <span>{items.name}</span>
                      <h6
                        className={`float-right text-c-${
                          items.color
                        } d-inline-block m-0`}
                      >
                        {items.value}
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CarouselItem>
        <CarouselItem
          key={2}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <Row className="stastic-slider-full-card" noGutters>
            {this.props.items.map((items, i) => {
              return (
                <Col key={i} md={4} xl={2}>
                  <Card>
                    <CardBody>
                      <span>{items.name}</span>
                      <h6
                        className={`float-right text-c-${
                          items.color
                        } d-inline-block m-0`}
                      >
                        {items.value}
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CarouselItem>
      </Carousel>
    );
  }
}

export default StaticSliderCard;
