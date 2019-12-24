// import external modules
import React from "react";
import { Card, CardHeader, CardBody, UncontrolledCarousel } from "reactstrap";

// import internal(own) modules
import cird1 from "../../../../../assets/images/slider/img-slide-1.jpg";
import cird2 from "../../../../../assets/images/slider/img-slide-2.jpg";
import cird3 from "../../../../../assets/images/slider/img-slide-3.jpg";

const items = [
  {
    src: cird1,
    altText: "First slide",
    caption: ""
  },
  {
    src: cird2,
    altText: "Second slide",
    caption: ""
  },
  {
    src: cird3,
    altText: "Third slide",
    caption: ""
  }
];
const items2 = [
  {
    src: cird1,
    altText: "First slide",
    header: "First slide label",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
  },
  {
    src: cird2,
    altText: "Second slide",
    header: "Second slide label",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
  },
  {
    src: cird3,
    altText: "Third slide",
    header: "Third slide label",
    caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
  }
];

export const BasicCarousel = () => (
  <Card>
    <CardHeader>
      <h5>Basic Carousel</h5>
    </CardHeader>
    <CardBody>
      <UncontrolledCarousel
        items={items}
        autoPlay
        indicators={false}
        controls={false}
      />
    </CardBody>
  </Card>
);

export const ControlsCarousel = () => (
  <Card>
    <CardHeader>
      <h5>Carousel Controls</h5>
    </CardHeader>
    <CardBody>
      <UncontrolledCarousel items={items} autoPlay indicators={false} />
    </CardBody>
  </Card>
);

export const IndicatorsCarousel = () => (
  <Card>
    <CardHeader>
      <h5>Carousel Indicators</h5>
    </CardHeader>
    <CardBody>
      <UncontrolledCarousel items={items} autoPlay />
    </CardBody>
  </Card>
);

export const CrossfadeCarousel = () => (
  <Card>
    <CardHeader>
      <h5>Carousel Crossfade</h5>
    </CardHeader>
    <CardBody>
      <UncontrolledCarousel
        className="carousel-fade"
        items={items}
        autoPlay
        indicators={false}
      />
    </CardBody>
  </Card>
);

export const CaptionCarousel = () => (
  <Card>
    <CardHeader>
      <h5>Carousel with Captions</h5>
    </CardHeader>
    <CardBody>
      <UncontrolledCarousel className="text-white" items={items2} autoPlay />
    </CardBody>
  </Card>
);
