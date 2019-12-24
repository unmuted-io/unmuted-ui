// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import ButtonDefault from "./example/buttons/buttonDefault";
import ButtonGradient from "./example/buttons/buttonGradient";
import ButtonOutline from "./example/buttons/buttonOutline";
import ButtonSquare from "./example/buttons/buttonSquare";
import ButtonDisabled from "./example/buttons/buttonDisabled";
import ButtonRounded from "./example/buttons/buttonRounded";
import ButtonGlow from "./example/buttons/buttonGlow";
import ButtonShadow from "./example/buttons/buttonShadow";
import DropdownButton from "./example/buttons/buttonDropdown";
import SplitDropdownButton from "./example/buttons/buttonSplitDropdown";
import OutlineDropdownButton from "./example/buttons/buttonOutlineDropdown";
import SplitOutlineDropdownButton from "./example/buttons/buttonOutlineSplitDropdown";
import ButtonNesting from "./example/buttons/buttonNesting";
import ButtonVertical from "./example/buttons/buttonVertical";
import ButtonSize from "./example/buttons/buttonSize";
import ButtonGroups from "./example/buttons/buttonGroup";
import ButtonToolbars from "./example/buttons/buttonToolbar";
import ButtonToolbarSize from "./example/buttons/buttonToolbarSize";
import ButtonCheckbox from "./example/buttons/buttonCheckbox";
import ButtonRadio from "./example/buttons/buttonRadio";
import ButtonIcon from "./example/buttons/buttonIcon";
import ButtonIconOutline from "./example/buttons/buttonIconOutline";
import ButtonIconTextOutline from "./example/buttons/buttonIconTextOutline";
import ButtonIconText from "./example/buttons/buttonIconText";
import ButtonIconRounded from "./example/buttons/buttonIconRounded";
import ButtonIconDropdown from "./example/buttons/buttonIconDropdown";
import ButtonIconDropdownOutline from "./example/buttons/buttonIconDropdownOutline";
import ButtonIconDropdownRounded from "./example/buttons/buttonIconDropdownRounded";
import ButtonIconDropdownRoundedOutline from "./example/buttons/buttonIconDropdownRoundedOutline";
import ButtonIconRoundedOutline from "./example/buttons/buttonIconRoundedOutline";

class Buttons extends Component {
  render() {
    return (
      <Row>
        <Col md="12">
          <ButtonDefault />
        </Col>
        <Col md="12">
          <ButtonGradient />
        </Col>
        <Col md="12">
          <ButtonOutline />
        </Col>
        <Col md="12">
          <ButtonSquare />
        </Col>
        <Col md="12">
          <ButtonDisabled />
        </Col>
        <Col md="12">
          <ButtonRounded />
        </Col>
        <Col md="12">
          <ButtonGlow />
        </Col>
        <Col md="12">
          <ButtonShadow />
        </Col>
        <Col md="6">
          <ButtonSize size="lg" />
        </Col>
        <Col md="6">
          <ButtonSize size="sm" />
        </Col>
        <Col md="6">
          <ButtonCheckbox />
        </Col>
        <Col md="6">
          <ButtonRadio />
        </Col>
        <Col md="6">
          <ButtonIconText />
        </Col>
        <Col md="6">
          <ButtonIconTextOutline />
        </Col>
        <Col md="6">
          <ButtonIcon />
        </Col>
        <Col md="6">
          <ButtonIconOutline />
        </Col>
        <Col md="6">
          <ButtonIconRounded />
        </Col>
        <Col md="6">
          <ButtonIconRoundedOutline />
        </Col>
        <Col md="12">
          <DropdownButton />
        </Col>
        <Col md="12">
          <SplitDropdownButton />
        </Col>
        <Col md="12">
          <OutlineDropdownButton />
        </Col>
        <Col md="12">
          <SplitOutlineDropdownButton />
        </Col>
        <Col md="6">
          <ButtonIconDropdown />
        </Col>
        <Col md="6">
          <ButtonIconDropdownOutline />
        </Col>
        <Col md="6">
          <ButtonIconDropdownRounded />
        </Col>
        <Col md="6">
          <ButtonIconDropdownRoundedOutline />
        </Col>
        <Col md="6">
          <ButtonGroups />
        </Col>
        <Col md="6">
          <ButtonToolbars />
        </Col>
        <Col md="12">
          <ButtonToolbarSize />
        </Col>
        <Col md="6">
          <ButtonNesting />
        </Col>
        <Col md="6">
          <ButtonVertical />
        </Col>
      </Row>
    );
  }
}

export default Buttons;
