// import external modules
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardColumns,
  Button
} from "reactstrap";

// import internal(own) modules
import cird1 from "../../../../../assets/images/slider/img-slide-2.jpg";
import cird2 from "../../../../../assets/images/slider/img-slide-3.jpg";

class ColumnCard extends Component {
  render() {
    return (
      <CardColumns>
        <Card>
          <CardImg top width="100%" src={cird1} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button color="primary">View More</Button>
            <Button color="danger">Delete</Button>
          </CardBody>
        </Card>
        <Card>
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <CardImg top width="100%" src={cird2} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card className="bg-c-blue text-white text-center">
          <CardBody>
            <blockquote className="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer className="blockquote-footer text-white">
                <small>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </CardBody>
        </Card>
        <Card className="text-center">
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This card has a regular title and short paragraphy of text below
              it.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg width="100%" src={cird1} alt="Card image cap" />
        </Card>
        <Card className="text-right">
          <CardBody>
            <blockquote className="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This is another card with title and supporting text below. This
              card has some additional content to make it slightly taller
              overall.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </CardColumns>
    );
  }
}

export default ColumnCard;
