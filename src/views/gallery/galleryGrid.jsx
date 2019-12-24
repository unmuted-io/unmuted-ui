import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Gallery from "../../components/gallery/gallery";
import thumb1 from "../../assets/images/gallery-grid/img-grd-gal-1.jpg";
import thumb2 from "../../assets/images/gallery-grid/img-grd-gal-2.jpg";
import thumb3 from "../../assets/images/gallery-grid/img-grd-gal-3.jpg";
import thumb4 from "../../assets/images/gallery-grid/img-grd-gal-4.jpg";
import thumb5 from "../../assets/images/gallery-grid/img-grd-gal-5.jpg";
import thumb6 from "../../assets/images/gallery-grid/img-grd-gal-6.jpg";

class GalleryGrid extends Component {
  constructor(props) {
    super(props);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.state = {
      lightboxIsOpen: false,
      currentItem: 0
    };
  }
  closeLightbox() {
    this.setState({
      currentItem: 0,
      lightboxIsOpen: false
    });
  }
  openLightbox(event, index) {
    event.preventDefault();
    this.setState({
      currentItem: index,
      lightboxIsOpen: true
    });
  }
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Image Grid</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg={4} sm={6} className="mb-4">
                  <Gallery
                    images={[
                      {
                        src: thumb1,
                        thumbnail: thumb1,
                        caption: "My caption 1",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <Gallery
                    images={[
                      {
                        src: thumb2,
                        thumbnail: thumb2,
                        caption: "My caption 2",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <Gallery
                    images={[
                      {
                        src: thumb3,
                        thumbnail: thumb3,
                        caption: "My caption 3",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <Gallery
                    images={[
                      {
                        src: thumb4,
                        thumbnail: thumb4,
                        caption: "My caption 4",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <Gallery
                    images={[
                      {
                        src: thumb5,
                        thumbnail: thumb5,
                        caption: "My caption 5",
                        useForDemo: true
                      }
                    ]}
                    backdropClosesModal
                    singleItem
                  />
                </Col>
                <Col lg={4} sm={6} className="mb-4">
                  <Gallery
                    images={[
                      {
                        src: thumb6,
                        thumbnail: thumb6,
                        caption: "My caption 6",
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
              <h5>Video Grid</h5>
            </CardHeader>
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

export default GalleryGrid;
