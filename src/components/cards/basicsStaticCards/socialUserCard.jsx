import React, { PureComponent } from "react";
import { Card, CardBody, CardFooter, Row, Col, Button } from "reactstrap";

class SocialUserCard extends PureComponent {
  render() {
    const props = this.props;
    const image = (
      <img className="img-fluid" src={props.image} alt="user profile" />
    );
    const name = <h3 className="text-white">{props.name}</h3>;
    const bio = <p>{props.bio}</p>;
    let socialCard;
    if (props.card === "normal") {
      socialCard = (
        <Card className="borderless-card">
          <div className="profile-card">
            {image}
            <CardBody>
              {name}
              {bio}
              <Button color="info" className="ml-0  mr-0">
                + Follow
              </Button>
            </CardBody>
          </div>
          <CardFooter className="bg-inverse">
            <Row className="text-center">
              <Col>
                <h4>{props.shots}</h4> <span>Shots</span>
              </Col>
              <Col>
                <h4>{props.followers}</h4> <span>Followers</span>
              </Col>
              <Col>
                <h4>{props.following}</h4> <span>Following</span>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      );
    }
    if (props.card === "blur") {
      socialCard = (
        <Card>
          <CardBody className="p-0">
            <div className="widget-main-card blur-user-card">
              {image}
              {name}
              {bio}
              <Button color="info" className=" m-t-30 ml-0 mr-0">
                + Follow
              </Button>
              <CardFooter className="mt-4">
                <Row className="text-center">
                  <Col>
                    <h4 className="text-white">{props.shots}</h4>{" "}
                    <span>Shots</span>
                  </Col>
                  <Col>
                    <h4 className="text-white">{props.followers}</h4>{" "}
                    <span>Followers</span>
                  </Col>
                  <Col>
                    <h4 className="text-white">{props.following}</h4>{" "}
                    <span>Following</span>
                  </Col>
                </Row>
              </CardFooter>
            </div>
          </CardBody>
        </Card>
      );
    }
    return socialCard;
  }
}

export default SocialUserCard;
