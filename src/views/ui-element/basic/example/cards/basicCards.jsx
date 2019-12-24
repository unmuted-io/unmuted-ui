// import external modules
import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardLink,
  Button,
  CardImg,
  CardImgOverlay
} from "reactstrap";

// import internal(own) modules
import cird1 from "../../../../../assets/images/slider/img-slide-3.jpg";
import cird2 from "../../../../../assets/images/slider/img-slide-6.jpg";
import cird3 from "../../../../../assets/images/slider/img-slide-7.jpg";

export const TextCard = () => (
  <Card>
    <CardBody>This is some text within a card body.</CardBody>
  </Card>
);

export const TextTitleLink = () => (
  <Card>
    <CardBody>
      <h5 className="card-title">Card title</h5>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </CardText>
      <CardLink href="#">Card link</CardLink>
      <CardLink href="#">Another link</CardLink>
    </CardBody>
  </Card>
);

export const HeaderFooter = () => (
  <Card>
    <h5 className="card-header">Featured</h5>
    <CardBody>
      <h5 className="card-title">Special title treatment</h5>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBody>
  </Card>
);

export const LeftAlign = () => (
  <Card className="text-left">
    <CardBody>
      <h5 className="card-title">Special title treatment</h5>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBody>
  </Card>
);

export const CenterAlign = () => (
  <Card className="text-center">
    <CardBody>
      <h5 className="card-title">Special title treatment</h5>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBody>
  </Card>
);

export const RightAlign = () => (
  <Card className="text-right">
    <CardBody>
      <h5 className="card-title">Special title treatment</h5>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBody>
  </Card>
);

export const ImageCaps = () => (
  <Card className="mb-3">
    <CardImg top width="100%" src={cird1} alt="Card image cap" />
    <CardBody>
      <h5 className="card-title">Card title</h5>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">Last updated 3 mins ago</small>
      </CardText>
    </CardBody>
  </Card>
);

export const ImageCapsBottom = () => (
  <Card>
    <CardBody>
      <h5 className="card-title">Card title</h5>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">Last updated 3 mins ago</small>
      </CardText>
    </CardBody>
    <CardImg bottom width="100%" src={cird2} alt="Card image cap" />
  </Card>
);

export const ImageCapsOverlay = () => (
  <Card>
    <CardImg width="100%" src={cird3} alt="Card image cap" />
    <CardImgOverlay>
      <h5 className="card-title text-white">Card title</h5>
      <CardText className="text-white">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </CardText>
      <CardText className="text-white">Last updated 3 mins ago</CardText>
    </CardImgOverlay>
  </Card>
);
