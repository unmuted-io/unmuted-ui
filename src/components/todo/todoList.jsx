import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Plus, Trash2 } from "react-feather";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import {
  addTodoList,
  completeTodoList,
  deleteTodoList
} from "../../redux/actions/todoActions";

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.submitHandeler = this.submitHandeler.bind(this);
    this.changeHandeler = this.changeHandeler.bind(this);
  }
  submitHandeler(e) {
    e.preventDefault();
    this.props.addTodoList(this.props.id, this.state.text);
    this.setState({ text: "" });
  }
  changeHandeler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>To Do List</h5>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.submitHandeler} className="mb-3">
            <InputGroup>
              <Input
                name="text"
                placeholder="Create your task list"
                value={this.state.text}
                onChange={this.changeHandeler}
                required
              />
              <InputGroupAddon addonType="append">
                <Button className="btn-icon p-0">
                  <Plus size={18} />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <div className="new-task">
            {this.props.todos.map(object => (
              <div className="to-do-list mb-3" key={object.id}>
                <div className="d-inline-block">
                  <label
                    className={classnames(
                      "check-task custom-control custom-checkbox d-flex justify-content-center",
                      {
                        "done-task": object.completed
                      }
                    )}
                  >
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      onClick={() => this.props.completeTodoList(object.id)}
                    />
                    <span className="custom-control-label">{object.text}</span>
                  </label>
                </div>
                <div className="float-right">
                  <i
                    onClick={() => this.props.deleteTodoList(object.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <Trash2 size={20} />
                  </i>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  }
}
const mapStateToProps = state => ({
  id: state.todoApp.TodoList.length,
  todos: state.todoApp.TodoList
});

export default connect(
  mapStateToProps,
  { addTodoList, completeTodoList, deleteTodoList }
)(TodoLists);
