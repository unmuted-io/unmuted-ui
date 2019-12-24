// import external modules
import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
// import internal(own) modules
import Gallery from "../../../components/gallery/gallery";
import image1 from "../../../assets/images/light-box/l1.jpg";
import image2 from "../../../assets/images/light-box/l2.jpg";
import image3 from "../../../assets/images/light-box/l3.jpg";
import image4 from "../../../assets/images/light-box/l4.jpg";
import image5 from "../../../assets/images/light-box/l5.jpg";
import image6 from "../../../assets/images/light-box/l6.jpg";

import thumb1 from "../../../assets/images/light-box/sl1.jpg";
import thumb2 from "../../../assets/images/light-box/sl2.jpg";
import thumb3 from "../../../assets/images/light-box/sl3.jpg";
import thumb4 from "../../../assets/images/light-box/sl4.jpg";
import thumb5 from "../../../assets/images/light-box/sl5.jpg";
import thumb6 from "../../../assets/images/light-box/sl6.jpg";

class Lightbox extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Single Images</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xl={2} lg={3} sm={4} xs={12}>
                  <Gallery
                    images={[
                      {
                        src: image1,
                        thumbnail: thumb1,
                        caption: "Datta Image 1",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={12}>
                  <Gallery
                    images={[
                      {
                        src: image2,
                        thumbnail: thumb2,
                        caption: "Datta Image 2",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={12}>
                  <Gallery
                    images={[
                      {
                        src: image3,
                        thumbnail: thumb3,
                        caption: "Datta Image 3",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={12}>
                  <Gallery
                    images={[
                      {
                        src: image4,
                        thumbnail: thumb4,
                        caption: "Datta Image 4",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={12}>
                  <Gallery
                    images={[
                      {
                        src: image5,
                        thumbnail: thumb5,
                        caption: "Datta Image 5",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={12}>
                  <Gallery
                    images={[
                      {
                        src: image6,
                        thumbnail: thumb6,
                        caption: "Datta Image 6",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Image Gallery</h5>
            </CardHeader>
            <CardBody>
              <Gallery
                images={[
                  {
                    src: image1,
                    thumbnail: thumb1,
                    caption: "Gallery Image 1",
                    useForDemo: true
                  },
                  {
                    src: image2,
                    thumbnail: thumb2,
                    caption: "Gallery Image 2",
                    useForDemo: true
                  },
                  {
                    src: image3,
                    thumbnail: thumb3,
                    caption: "Gallery Image 3",
                    useForDemo: true
                  },
                  {
                    src: image4,
                    thumbnail: thumb4,
                    caption: "Gallery Image 4",
                    useForDemo: true
                  },
                  {
                    src: image5,
                    thumbnail: thumb5,
                    caption: "Gallery Image 5",
                    useForDemo: true
                  },
                  {
                    src: image6,
                    thumbnail: thumb6,
                    caption: "Gallery Image 6",
                    useForDemo: true
                  }
                ]}
                backdropClosesModal
              />
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>Video Gallery</CardHeader>
            <CardBody>
              <Row>
                <Col xl={4} md={6} className="mb-4">
                  <Gallery
                    videos={["246066429"]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={4} md={6} className="mb-4">
                  <Gallery
                    videos={["246066429"]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={4} md={6} className="mb-4">
                  <Gallery
                    videos={["246066429"]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={4} md={6} className="mb-4">
                  <Gallery
                    videos={["246066429"]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={4} md={6} className="mb-4">
                  <Gallery
                    videos={["246066429"]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col xl={4} md={6} className="mb-4">
                  <Gallery
                    videos={["246066429"]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Lightbox;
