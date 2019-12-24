// import external modules
import React, { Component } from "react";
import {
  CardFooter,
  Card,
  CardBody,
  CardText,
  CardImg,
  CardDeck
} from "reactstrap";

// import internal(own) modules
import cird1 from "../../../../../assets/images/slider/img-slide-2.jpg";
import cird2 from "../../../../../assets/images/slider/img-slide-1.jpg";
import cird3 from "../../../../../assets/images/slider/img-slide-4.jpg";

class DeckCard extends Component {
  render() {
    return (
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={cird1} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImg top width="100%" src={cird2} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card>
          <CardImg top width="100%" src={cird3} alt="Card image cap" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </CardDeck>
    );
  }
}

export default DeckCard;
