import React, { Component } from "react";
import { connect } from "react-redux";
import { Trash2 } from "react-feather";
import classnames from "classnames";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  FormGroup
} from "reactstrap";
import {
  addTodoModal,
  completeTodoModal,
  deleteTodoModal
} from "../../redux/actions/todoActions";

class TodoModals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      text: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.changeHandeler = this.changeHandeler.bind(this);
    this.todoAddHandelen = this.todoAddHandelen.bind(this);
    this.submitHandeler = this.submitHandeler.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  changeHandeler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  todoAddHandelen() {
    this.props.addTodoModal(this.props.id, this.state.text);
    this.setState(prevState => ({
      modal: !prevState.modal,
      text: ""
    }));
  }
  submitHandeler(e) {
    e.preventDefault();
    this.todoAddHandelen();
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <h5>To Do List in Modal</h5>
        </CardHeader>
        <CardBody>
          <div className="tasks-widget">
            {this.props.todos.map(object => (
              <div key={object.id} className="to-do-list mb-3">
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
                      onClick={() => this.props.completeTodoModal(object.id)}
                      type="checkbox"
                      className="custom-control-input"
                    />
                    <span className="custom-control-label">{object.text}</span>
                  </label>
                </div>
                <div className="float-right">
                  <i
                    onClick={() => this.props.deleteTodoModal(object.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <Trash2 size={20} />
                  </i>
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={this.toggleModal}
            color="primary"
            className="btn-add-task m-t-10"
          >
            Add New Tasks
          </Button>
          <Modal centered isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Add new todo</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.submitHandeler}>
                <FormGroup>
                  <Input
                    name="text"
                    placeholder="Create your task list"
                    value={this.state.text}
                    onChange={this.changeHandeler}
                    required
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.todoAddHandelen}>
                Save
              </Button>
              <Button color="default" onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}
const mapStatetoProps = state => ({
  id: state.todoApp.TodoModal.length,
  todos: state.todoApp.TodoModal
});

export default connect(
  mapStatetoProps,
  { addTodoModal, completeTodoModal, deleteTodoModal }
)(TodoModals);
