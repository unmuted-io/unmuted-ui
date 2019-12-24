import React from "react";
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
import { Plus } from "react-feather";
import { connect } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo
} from "../../redux/actions/todoActions";

class TodoCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.submitHandeler = this.submitHandeler.bind(this);
    this.changeHandeler = this.changeHandeler.bind(this);
    this.completeTodos = this.completeTodos.bind(this);
  }
  submitHandeler(e) {
    e.preventDefault();
    this.props.addTodo(this.props.id, this.state.text);
    this.setState({ text: "" });
  }
  changeHandeler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  completeTodos(id) {
    this.props.completeTodo(id);
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>To Do Card List</h5>
        </CardHeader>
        <CardBody>
          <Form className="mb-3" onSubmit={this.submitHandeler}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Create your task list"
                name="text"
                value={this.state.text}
                onChange={this.changeHandeler}
              />
              <InputGroupAddon addonType="append">
                <Button className="btn-icon p-0">
                  <Plus size={18} />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <section id="task-container">
            <ul>
              {this.props.todos.map(object => (
                <li
                  className={object.completed ? "complete" : ""}
                  key={object.id}
                  onClick={() => this.completeTodos(object.id)}
                >
                  <p>{object.text}</p>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button
                color="primary"
                className="m-b-0"
                onClick={() => this.props.deleteTodo()}
              >
                Clear All Tasks
              </Button>
            </div>
          </section>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  id: state.todoApp.TodoCard.length,
  todos: state.todoApp.TodoCard
});

export default connect(
  mapStateToProps,
  { addTodo, completeTodo, deleteTodo }
)(TodoCardList);
