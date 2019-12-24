import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import NoteLists from "../../components/note/noteLists";

class Note extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <NoteLists />
        </Col>
      </Row>
    );
  }
}

export default Note;
