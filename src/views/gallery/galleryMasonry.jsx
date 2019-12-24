import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardHeader, CardBody, CardImg } from "reactstrap";
import MasonryGallery from "../../components/gallery/galleryMasonry";
import * as Icons from "react-feather";

import image1 from "../../assets/images/gallery-grid/masonry-1.jpg";
import image2 from "../../assets/images/gallery-grid/masonry-2.jpg";
import image3 from "../../assets/images/gallery-grid/masonry-3.jpg";
import image4 from "../../assets/images/gallery-grid/masonry-4.jpg";
import image5 from "../../assets/images/gallery-grid/masonry-5.jpg";
import image6 from "../../assets/images/gallery-grid/masonry-6.jpg";
import image7 from "../../assets/images/gallery-grid/masonry-7.jpg";
import image8 from "../../assets/images/gallery-grid/masonry-8.jpg";

let brakePoints = [350, 500, 750];
let images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image2,
  image8,
  image4
];

const GlImg = ({ src }) => {
  return <img src={src} alt="mg" style={{ width: "100%" }} />;
};

const GlImgCard = ({ src }) => {
  return (
    <Fragment>
      <CardImg variant="top" src={src} />
      <CardBody>
        <h5 className="job-card-desc">Job Description</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="job-meta-data mb-1">
          <Icons.MapPin className="m-r-5" size={14} />
          washington
        </div>
        <div className="job-meta-data">
          <Icons.CheckCircle className="m-r-5" size={14} />
          10 Years
        </div>
      </CardBody>
    </Fragment>
  );
};

class GalleryMasonry extends Component {
  render() {
    return (
      <Row>
        <Col sm={12} className="gallery-masonry">
          <Card>
            <CardHeader>
              <h5>Gallery Masonry</h5>
            </CardHeader>
            <CardBody>
              <MasonryGallery brakePoints={brakePoints}>
                {images.map((image, id) => {
                  return <GlImg key={id} src={image} />;
                })}
              </MasonryGallery>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} className="gallery-masonry">
          <Card>
            <CardHeader>
              <h5>Gallery Masonry</h5>
            </CardHeader>
            <CardBody>
              <MasonryGallery brakePoints={brakePoints}>
                {images.map((image, id) => {
                  return <GlImgCard key={id} src={image} />;
                })}
              </MasonryGallery>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default GalleryMasonry;
