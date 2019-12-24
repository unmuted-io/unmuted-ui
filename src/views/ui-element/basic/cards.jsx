// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import {
  TextCard,
  TextTitleLink,
  HeaderFooter,
  LeftAlign,
  CenterAlign,
  RightAlign,
  ImageCaps,
  ImageCapsBottom,
  ImageCapsOverlay
} from "./example/cards/basicCards";
import CardStyle from "./example/cards/cardStyle";
import GroupCard from "./example/cards/cardGroup";
import DeckCard from "./example/cards/cardDeck";
import ColumnCard from "./example/cards/cardColumn";

class Cards extends Component {
  render() {
    return (
      <Row>
        <Col md="6" xl="4">
          <h5>Body Content</h5>
          <hr />
          <TextCard />
        </Col>
        <Col xl="4" md="6">
          <h5>Titles, Text, and Links</h5>
          <hr />
          <TextTitleLink />
        </Col>
        <Col xl="4" md="6">
          <h5>Header and Footer</h5>
          <hr />
          <HeaderFooter />
        </Col>
        <Col xl="4" md="6">
          <h5>Left Align</h5>
          <hr />
          <LeftAlign />
        </Col>
        <Col xl="4" md="6">
          <h5>Center Align</h5>
          <hr />
          <CenterAlign />
        </Col>
        <Col xl="4" md="6">
          <h5>Right Align</h5>
          <hr />
          <RightAlign />
        </Col>
        <Col xl="4" md="6">
          <h5>Image Caps</h5>
          <hr />
          <ImageCaps />
        </Col>
        <Col xl="4" md="6">
          <h5>Image Caps [ Bottom ]</h5>
          <hr />
          <ImageCapsBottom />
        </Col>
        <Col xl="4" md="6">
          <h5>Image Overlays</h5>
          <hr />
          <ImageCapsOverlay />
        </Col>
        <Col xl="12">
          <h5 className="mt-4">Card Styles</h5>
          <hr />
          <CardStyle />
        </Col>
        <Col xl="12">
          <h5>Card Groups</h5>
          <hr />
          <GroupCard />
        </Col>
        <Col xl="12">
          <h5 className="mt-4">Card Decks</h5>
          <hr />
          <DeckCard />
        </Col>
        <Col xl="12">
          <h5 className="mt-4">Card Columns</h5>
          <hr />
          <ColumnCard />
        </Col>
      </Row>
    );
  }
}

export default Cards;
