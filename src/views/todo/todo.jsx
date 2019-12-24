import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import TodoCardList from "../../components/todo/todoCard";
import TodoLists from "../../components/todo/todoList";
import TodoModals from "../../components/todo/todoModal";

class Todos extends Component {
  render() {
    return (
      <Row>
        <Col xl="6">
          <TodoCardList />
        </Col>
        <Col xl="6">
          <TodoLists />
        </Col>
        <Col sm="12">
          <TodoModals />
        </Col>
      </Row>
    );
  }
}

export default Todos;
