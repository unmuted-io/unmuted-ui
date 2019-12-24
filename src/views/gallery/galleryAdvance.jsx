import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "react-feather";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import image1 from "../../assets/images/gallery-grid/img-grd-gal-1.jpg";
import image2 from "../../assets/images/gallery-grid/img-grd-gal-2.jpg";
import image3 from "../../assets/images/gallery-grid/img-grd-gal-3.jpg";
import image4 from "../../assets/images/gallery-grid/img-grd-gal-4.jpg";
import image5 from "../../assets/images/gallery-grid/img-grd-gal-5.jpg";
import image6 from "../../assets/images/gallery-grid/img-grd-gal-6.jpg";
import "../../assets/scss/partials/pages/gallery.scss";

class GalleryAdvance extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Julia</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-julia">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Passionate <span>Julia</span>
                    </h2>
                    <div>
                      <p>Julia dances in the deep dark</p>
                      <p>She loves the smell of the ocean</p>
                      <p>And dives into the morning light</p>
                    </div>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-julia">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Passionate <span>Julia</span>
                    </h2>
                    <div>
                      <p>Julia dances in the deep dark</p>
                      <p>She loves the smell of the ocean</p>
                      <p>And dives into the morning light</p>
                    </div>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Goliath</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-goliath">
                  <img className="img-fluid" src={image3} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Thoughtful <span>Goliath</span>
                    </h2>
                    <p>When Goliath comes out, you should run.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-goliath">
                  <img className="img-fluid" src={image4} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Thoughtful <span>Goliath</span>
                    </h2>
                    <p>When Goliath comes out, you should run.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Hera</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-hera">
                  <img className="img-fluid" src={image5} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Tender <span>Hera</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon
                            icon={["far", "file-pdf"]}
                            size="lg"
                          />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="file-image" size="lg" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon
                            icon={["far", "file-archive"]}
                            size="lg"
                          />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon
                            icon={["far", "file-code"]}
                            size="lg"
                          />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
                <figure className="effect-hera">
                  <img className="img-fluid" src={image6} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Tender <span>Hera</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon
                            icon={["far", "file-pdf"]}
                            size="lg"
                          />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="file-image" size="lg" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon
                            icon={["far", "file-archive"]}
                            size="lg"
                          />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon
                            icon={["far", "file-code"]}
                            size="lg"
                          />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Winston</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-winston">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Jolly <span>Winston</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon={["far", "star"]} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="comments" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="mail-bulk" />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
                <figure className="effect-winston">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Jolly <span>Winston</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon={["far", "star"]} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="comments" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="mail-bulk" />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Selena</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-selena">
                  <img className="img-fluid" src={image3} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Happy <span>Selena</span>
                    </h2>
                    <p>Selena is a tiny-winged bird.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-selena">
                  <img className="img-fluid" src={image4} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Happy <span>Selena</span>
                    </h2>
                    <p>Selena is a tiny-winged bird.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Terry</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-terry">
                  <img className="img-fluid" src={image5} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Noisy <span>Terry</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <Icons.Download size={22} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <Icons.Heart size={22} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <Icons.Share size={22} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <Icons.Tag size={22} />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
                <figure className="effect-terry">
                  <img className="img-fluid" src={image6} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Noisy <span>Terry</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <Icons.Download size={22} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <Icons.Heart size={22} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <Icons.Share size={22} />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <Icons.Tag size={22} />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Phoebe</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-phoebe">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Plain <span>Phoebe</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="user" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="heart" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="cog" />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
                <figure className="effect-phoebe">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Plain <span>Phoebe</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="user" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="heart" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="cog" />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Apollo</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-apollo">
                  <img className="img-fluid" src={image3} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Strong <span>Apollo</span>
                    </h2>
                    <p>Apollo's last game of pool was so strange.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-apollo">
                  <img className="img-fluid" src={image4} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Strong <span>Apollo</span>
                    </h2>
                    <p>Apollo's last game of pool was so strange.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Kira</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-kira">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Dark <span>Kira</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="home" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="download" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="heart" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="share" />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
                <figure className="effect-kira">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Dark <span>Kira</span>
                    </h2>
                    <p>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="home" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="download" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="heart" />
                        </i>
                      </a>
                      <a href="#!">
                        <i>
                          <FontAwesomeIcon icon="share" />
                        </i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Steve</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-steve">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Lonely <span>Steve</span>
                    </h2>
                    <p>Steve was afraid of the Boogieman.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-steve">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Lonely <span>Steve</span>
                    </h2>
                    <p>Steve was afraid of the Boogieman.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Moses</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-moses">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Cute <span>Moses</span>
                    </h2>
                    <p>Moses loves to run after butterflies.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-moses">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Cute <span>Moses</span>
                    </h2>
                    <p>Moses loves to run after butterflies.</p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Jazz</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-jazz">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Dynamic <span>Jazz</span>
                    </h2>
                    <p>
                      When Jazz starts to chase cars, the whole world stands
                      still.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-jazz">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Dynamic <span>Jazz</span>
                    </h2>
                    <p>
                      When Jazz starts to chase cars, the whole world stands
                      still.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Ming</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-ming">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Funny <span>Ming</span>
                    </h2>
                    <p>
                      Ming sits in the corner the whole day. She's into crochet.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-ming">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Funny <span>Ming</span>
                    </h2>
                    <p>
                      Ming sits in the corner the whole day. She's into crochet.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Lexi</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-lexi">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Altruistic <span>Lexi</span>
                    </h2>
                    <p>
                      Each and every friend is special. Lexi won't hide a single
                      cookie.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-lexi">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Altruistic <span>Lexi</span>
                    </h2>
                    <p>
                      Each and every friend is special. Lexi won't hide a single
                      cookie.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Duke</h5>
            </CardHeader>
            <CardBody>
              <div className="grid">
                <figure className="effect-duke">
                  <img className="img-fluid" src={image1} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Messy <span>Duke</span>
                    </h2>
                    <p>
                      Duke is very bored. When he looks at the sky, he feels to
                      run.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
                <figure className="effect-duke">
                  <img className="img-fluid" src={image2} alt="advance-1" />
                  <figcaption>
                    <h2>
                      Messy <span>Duke</span>
                    </h2>
                    <p>
                      Duke is very bored. When he looks at the sky, he feels to
                      run.
                    </p>
                    <a href="#!">View more</a>
                  </figcaption>
                </figure>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default GalleryAdvance;
