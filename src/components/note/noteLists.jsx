import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

import {
  addNote,
  removeNote,
  selectNote,
  noteUpdate
} from "../../redux/actions/noteActions";

class NoteLists extends Component {
  constructor(props) {
    super(props);
    this.getRealDateTime = this.getRealDateTime.bind(this);
    this.changeHandeler = this.changeHandeler.bind(this);
    this.createNote = this.createNote.bind(this);
    this.selectHandel = this.selectHandel.bind(this);
    this.state = {
      noteText: ""
    };
  }

  getRealDateTime() {
    const mlist = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let d = new Date();
    let month = mlist[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();
    let ampm = hour >= 12 ? "pm" : "am";
    hour = hour % 12;
    hour = hour ? hour : 12;
    return (
      date + " " + month + " " + year + ", " + hour + ":" + min + " " + ampm
    );
  }
  selectHandel(e) {
    this.props.selectNote(e);
  }
  changeHandeler(e) {
    if (this.props.selected) {
      this.props.noteUpdate(
        this.props.selected ? this.props.selected.id : "",
        e.target.value
      );
    } else {
      this.setState({ noteText: e.target.value });
    }
  }
  createNote() {
    this.props.addNote(
      this.props.id,
      this.state.noteText,
      this.getRealDateTime()
    );
    this.props.selectNote(this.props.id + 1);
    this.setState({ noteText: "" });
  }

  render() {
    return (
      <Card className="note-card">
        <CardBody>
          <Row className="note-box-wrapper">
            <Col className="note-box-aside" xl="3" lg="12">
              <Row>
                <Col sm="12">
                  <Form className="form-material">
                    <div className="material-group">
                      <FormGroup className="form-primary">
                        <Input placeholder="Search notes" required />
                        <span className="form-bar" />
                      </FormGroup>
                    </div>
                  </Form>
                </Col>
              </Row>
              <div className="notes-list">
                <ul id="Note-list" className="Note-list list-group">
                  {this.props.notes.map(object => (
                    <li
                      key={object.id}
                      className={classnames("list-group-item", {
                        active:
                          (this.props.selected
                            ? this.props.selected.id
                            : "") === object.id
                      })}
                    >
                      <Button
                        onClick={() => this.props.removeNote(object.id)}
                        className="Note-delete"
                        size="sm"
                      >
                        x
                      </Button>
                      <div
                        className="Note"
                        onClick={() => this.selectHandel(object.id)}
                      >
                        <div className="Note__desc">
                          {object.text !== "" ? object.text : "Write your note"}
                        </div>
                        <div className="Note__date">{object.dateTime}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col className="note-box-content" lg="12" xl="9">
              <div className="Note-header">
                <div className="Note-created float-right">
                  <span className="Note-created__on d-block">
                    Note Created On
                  </span>
                  <span className="Note-created__date">
                    {this.getRealDateTime()}
                  </span>
                </div>
                <Button
                  onClick={this.createNote}
                  className="hidden-xs"
                  color="primary"
                >
                  Add New +
                </Button>
              </div>
              <div className="note-body">
                <div className="note-write">
                  <textarea
                    id="Note-pad"
                    className="form-control"
                    value={
                      this.props.selected
                        ? this.props.selected.text
                        : this.state.noteText
                    }
                    onChange={this.changeHandeler}
                    placeholder="Type your note here"
                    rows={10}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
const mapStateToProps = state => ({
  id: state.noteApp.notes.length,
  selected: state.noteApp.notes[state.noteApp.noteSelected],
  notes: state.noteApp.notes
});

export default connect(
  mapStateToProps,
  { addNote, removeNote, selectNote, noteUpdate }
)(NoteLists);
