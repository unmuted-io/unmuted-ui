import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Button,
  Media,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThumbsUp } from "react-feather"
import { Link } from "react-router-dom"
import avatar1 from "../../assets/images/user/avatar-1.jpg"
import avatar2 from "../../assets/images/user/avatar-2.jpg"
import avatar3 from "../../assets/images/user/avatar-3.jpg"

class TaskDetails extends Component {
  render() {
    return (
      <Row>
        <Col className="task-detail-right" xl={4} lg={12}>
          <Card>
            <CardHeader>
              <h5>Task Details</h5>
            </CardHeader>
            <CardBody className="task-details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon="adjust" className="m-r-5" />
                      Project:
                    </td>
                    <td className="text-right">
                      <span className="float-right">
                        <Link className="text-secondary" to="#">
                          Singular app
                        </Link>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon="calendar-alt" className="m-r-5" />
                      Updated:
                    </td>
                    <td className="text-right">12 May, 2015</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={["far", "credit-card"]}
                        className="m-r-5"
                      />
                      Created:
                    </td>
                    <td className="text-right">25 Feb, 2015</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon="chart-line" className="m-r-5" />
                      Priority:
                    </td>
                    <td className="text-right">
                      <div className="btn-group">
                        <Link className="text-secondary" to="#">
                          <FontAwesomeIcon icon="upload" className="m-r-5" />
                          Highest
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon="sync-alt" className="m-r-5" />
                      Revisions:
                    </td>
                    <td className="text-right">29</td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon icon="user-plus" className="m-r-5" />
                      Added by:
                    </td>
                    <td className="text-right">
                      <Link className="text-secondary" to="#">
                        Winnie
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon="thermometer-half"
                        className="m-r-5"
                      />
                      Status:
                    </td>
                    <td className="text-right">Published</td>
                  </tr>
                </tbody>
              </Table>
              <div>
                <span>
                  <Link to="#" className="text-muted f-16 m-r-10">
                    <FontAwesomeIcon icon="random" />
                  </Link>
                </span>
                <span className="m-r-10">
                  <Link to="#" className="text-muted f-16">
                    <FontAwesomeIcon icon="ellipsis-v" />
                  </Link>
                </span>
                <UncontrolledDropdown className="d-inline-block btn-group">
                  <DropdownToggle color="primary" className="drp-icon" caret>
                    <ThumbsUp size={14} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a" href="#!">
                      Check in
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Attach screenshot
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Reassign
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag="a" href="#!">
                      Edit task
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Remove
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Task settings</h5>
            </CardHeader>
            <CardBody className="task-setting">
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="Publish" defaultChecked />
                        <Label for="Publish" className="cr" />
                      </div>
                      <Label>Publish after save</Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="comments" defaultChecked />
                        <Label for="comments" className="cr" />
                      </div>
                      <Label>Allow comments</Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="users" defaultChecked />
                        <Label for="users" className="cr" />
                      </div>
                      <Label>Allow users to edit the task</Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="timer" defaultChecked />
                        <Label for="timer" className="cr" />
                      </div>
                      <Label>Use task timer</Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="Auto" />
                        <Label for="Auto" className="cr" />
                      </div>
                      <Label>Auto saving</Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="saving" />
                        <Label for="saving" className="cr" />
                      </div>
                      <Label>Auto saving</Label>
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup className="mb-0">
                      <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="attachments" />
                        <Label for="attachments" className="cr" />
                      </div>
                      <Label>Allow attachments</Label>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="text-center mt-2">
                  <Col sm={12}>
                    <Button>Reset</Button>
                    <Button color="primary">Save</Button>
                  </Col>
                </Row>
              </FormGroup>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Revisions</h5>
            </CardHeader>
            <CardBody>
              <div className="taskboard-right-revision user-box">
                <Media>
                  <Media left>
                    <Button color="primary" className="btn-icon" outline>
                      <FontAwesomeIcon icon="user-secret" />
                    </Button>
                  </Media>
                  <Media body>
                    <div className="chat-header f-w-400 mb-1">
                      Drop the IE specific hacks for temporal inputs
                    </div>
                    <p className="chat-header text-muted">4 minutes ago</p>
                  </Media>
                </Media>
                <Media>
                  <Media left>
                    <Button color="danger" className="btn-icon" outline>
                      <FontAwesomeIcon icon="anchor" />
                    </Button>
                  </Media>
                  <Media body>
                    <div className="chat-header f-w-400 mb-1">
                      Add full font overrides for popovers and tooltips
                    </div>
                    <p className="chat-header text-muted">36 minutes ago</p>
                  </Media>
                </Media>
                <Media>
                  <Media left>
                    <Button color="warning" className="btn-icon" outline>
                      <FontAwesomeIcon icon="desktop" />
                    </Button>
                  </Media>
                  <Media body>
                    <div className="chat-header f-w-400 mb-1">
                      created a new Design branch
                    </div>
                    <p className="chat-header text-muted">2 month ago</p>
                  </Media>
                </Media>
                <Media>
                  <Media left>
                    <Button color="success" className="btn-icon" outline>
                      <FontAwesomeIcon icon="briefcase" />
                    </Button>
                  </Media>
                  <Media body>
                    <div className="chat-header f-w-400 mb-1">
                      merged Master and Dev branches
                    </div>
                    <p className="chat-header text-muted">6 month ago</p>
                  </Media>
                </Media>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Attached Files</h5>
            </CardHeader>
            <CardBody className="task-attachment">
              <Media className="p-0" list>
                <Media className="d-flex m-b-15">
                  <div className="m-r-20 file-attach">
                    <FontAwesomeIcon
                      icon="file-word"
                      className="f-28 text-muted"
                    />
                  </div>
                  <Media body>
                    <Link className="m-b-5 d-block text-secondary" to="#">
                      Overdrew_scowled.doc
                    </Link>
                    <div className="text-muted">
                      <span>Size: 1.2Mb</span>
                      <span className="p-l-5">
                        Added by
                        <Link to="#" className="p-l-5 text-secondary">
                          Winnie
                        </Link>
                      </span>
                    </div>
                  </Media>
                  <div className="float-right text-muted">
                    <FontAwesomeIcon icon="download" className="f-18" />
                  </div>
                </Media>
                <Media className="d-flex m-b-15">
                  <div className="m-r-20 file-attach">
                    <FontAwesomeIcon
                      icon="file-powerpoint"
                      className="f-28 text-muted"
                    />
                  </div>
                  <Media body>
                    <Link className="m-b-5 d-block text-secondary" to="#">
                      And_less_maternally.pdf
                    </Link>
                    <div className="text-muted">
                      <span>Size: 0.11Mb</span>
                      <span className="p-l-5">
                        Added by
                        <Link to="#" className="p-l-5 text-secondary">
                          Eugene
                        </Link>
                      </span>
                    </div>
                  </Media>
                  <div className="float-right text-muted">
                    <FontAwesomeIcon icon="download" className="f-18" />
                  </div>
                </Media>
                <Media className="d-flex m-b-15">
                  <div className="m-r-20 file-attach">
                    <FontAwesomeIcon
                      icon={["far", "file-pdf"]}
                      className="f-28 text-muted"
                    />
                  </div>
                  <Media body>
                    <Link className="m-b-5 d-block text-secondary" to="#">
                      The_less_overslept.pdf
                    </Link>
                    <div className="text-muted">
                      <span>Size: 5.9Mb</span>
                      <span className="p-l-5">
                        Added by
                        <Link to="#" className="p-l-5 text-secondary">
                          Natalie
                        </Link>
                      </span>
                    </div>
                  </Media>
                  <div className="float-right text-muted">
                    <FontAwesomeIcon icon="download" className="f-18" />
                  </div>
                </Media>
                <Media className="d-flex m-b-15">
                  <div className="m-r-20 file-attach">
                    <FontAwesomeIcon
                      icon={["far", "file-excel"]}
                      className="f-28 text-muted"
                    />
                  </div>
                  <Media body>
                    <Link className="m-b-5 d-block text-secondary" to="#">
                      Well_equitably.mov
                    </Link>
                    <div className="text-muted">
                      <span>Size: 20.9Mb</span>
                      <span className="p-l-5">
                        Added by
                        <Link to="#" className="p-l-5 text-secondary">
                          Jenny
                        </Link>
                      </span>
                    </div>
                  </Media>
                  <div className="float-right text-muted">
                    <FontAwesomeIcon icon="download" className="f-18" />
                  </div>
                </Media>
              </Media>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5>Assigned Users</h5>
            </CardHeader>
            <CardBody className="user-box assign-user">
              <Media>
                <Media className="media-middle mr-3" left>
                  <Link to="#">
                    <img
                      src={avatar1}
                      className="img-fluid img-radius"
                      alt="chat-user"
                    />
                  </Link>
                </Media>
                <Media body>
                  <h6>Sortino media</h6>
                  <p>Software Engineer</p>
                </Media>
              </Media>
              <Media>
                <Media className="media-middle mr-3" left>
                  <Link to="#">
                    <img
                      src={avatar2}
                      className="img-fluid img-radius"
                      alt="chat-user"
                    />
                  </Link>
                </Media>
                <Media body>
                  <h6>Larry heading</h6>
                  <p>Web Designer</p>
                </Media>
              </Media>
              <Media>
                <Media className="media-middle mr-3" left>
                  <Link to="#">
                    <img
                      src={avatar3}
                      className="img-fluid img-radius"
                      alt="chat-user"
                    />
                  </Link>
                </Media>
                <Media body>
                  <h6>Mark</h6>
                  <p>Chief Financial Officer (CFO)</p>
                </Media>
              </Media>
              <Media>
                <Media className="media-middle mr-3" left>
                  <Link to="#">
                    <img
                      src={avatar1}
                      className="img-fluid img-radius"
                      alt="chat-user"
                    />
                  </Link>
                </Media>
                <Media body>
                  <h6>John Doe</h6>
                  <p>Senior Marketing Designer</p>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col xl={8} lg={12}>
          <Card>
            <CardHeader>
              <h5 className="mb-3">
                <FontAwesomeIcon icon="ticket-alt" className="m-r-5" />
                Ticket List Doesn't Support Commas
              </h5>
              <Button color="primary" className="float-right">
                <FontAwesomeIcon icon={["far", "bell"]} className="m-r-5" />
                Check in
              </Button>
            </CardHeader>
            <CardBody>
              <div className="m-b-20">
                <h6>Overview</h6>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="m-b-20">
                <h6>What we need</h6>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <div className="m-b-20">
                <Row>
                  <Col md={12} lg={6}>
                    <div className="text-primary f-14 m-b-10">
                      1. The standard Lorem Ipsum passage
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </Col>
                  <Col md={12} lg={6}>
                    <div className="text-primary f-14 m-b-10">
                      2. The standard Lorem Ipsum passage
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="m-b-20">
                <h6>Requirements</h6>
                <hr />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="table-responsive m-t-20">
                  <Table className="m-b-0 f-14 b-solid requid-table">
                    <thead>
                      <tr className="text-uppercase">
                        <th className="text-center">#</th>
                        <th className="text-center">Task</th>
                        <th className="text-center">Due Date</th>
                        <th className="text-center">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-center text-muted">
                      <tr>
                        <td>1</td>
                        <td>Design mockup</td>
                        <td>
                          <FontAwesomeIcon icon="calendar-alt" />
                          &nbsp; 22 December, 16
                        </td>
                        <td>The standard Lorem Ipsum</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Software Engineer</td>
                        <td>
                          <FontAwesomeIcon icon="calendar-alt" />
                          &nbsp; 01 December, 16
                        </td>
                        <td>The standard Lorem passage</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Photoshop And Illustrator</td>
                        <td>
                          <FontAwesomeIcon icon="calendar-alt" />
                          &nbsp; 15 December, 16
                        </td>
                        <td>The standard Lorem Ipsum</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Allocated Resource</td>
                        <td>
                          <FontAwesomeIcon icon="calendar-alt" />
                          &nbsp; 28 December, 16
                        </td>
                        <td>The standard Lorem passage</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Financial Controlle</td>
                        <td>
                          <FontAwesomeIcon icon="calendar-alt" />
                          &nbsp; 20 December, 16
                        </td>
                        <td>The standard Lorem Ipsum</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="float-left mt-4">
                <span className="txt-primary">
                  <FontAwesomeIcon icon="chart-line" className="m-r-5" />
                  Status:
                </span>
                <UncontrolledDropdown className="dropdown-secondary d-inline-block m-l-5">
                  <DropdownToggle color="primary" caret>
                    Open
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem active tag="a" href="#!">
                      Open
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      On hold
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Resolved
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Closed
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag="a" href="#!">
                      Dublicate
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Invalid
                    </DropdownItem>
                    <DropdownItem tag="a" href="#!">
                      Wontfix
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="float-right d-flex mt-4">
                <span>
                  <Link className="text-muted m-r-10 f-16" to="#">
                    <FontAwesomeIcon icon={["far", "edit"]} />
                  </Link>
                </span>
                <span className="m-r-10">
                  <Link className="text-muted f-16" to="#">
                    <FontAwesomeIcon icon="trash" />
                  </Link>
                </span>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h5 className="card-header-text">
                <FontAwesomeIcon icon="plus" className="m-r-5" />
                Comments
              </h5>
              <Button color="primary" className="float-right m-0 btn-icon">
                <FontAwesomeIcon icon="plus" />
              </Button>
            </CardHeader>
            <CardBody className="task-comment">
              <Media list className="p-0">
                <Media>
                  <Media className="mr-3" left>
                    <Link to="#">
                      <img
                        src={avatar1}
                        className="img-fluid media-object img-radius comment-img"
                        alt="Generic placeholder"
                      />
                    </Link>
                  </Media>
                  <Media body>
                    <h6 className="media-heading txt-primary">
                      Lorem Ipsum{" "}
                      <span className="f-12 text-muted ml-1">Just now</span>
                    </h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="m-t-10 m-b-25">
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Reply
                        </Link>
                      </span>
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Edit
                        </Link>
                      </span>
                    </div>
                    <hr />
                    <Media className="mt-2">
                      <Media className="mr-3" left>
                        <Link to="#">
                          <img
                            src={avatar2}
                            className="img-fluid media-object img-radius comment-img"
                            alt="Generic placeholder"
                          />
                        </Link>
                      </Media>
                      <Media body>
                        <h6 className="media-heading txt-primary">
                          Lorem Ipsum{" "}
                          <span className="f-12 text-muted ml-1">Just now</span>
                        </h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                        <div className="m-t-10 m-b-25">
                          <span>
                            <Link to="#" className="m-r-10 text-secondary">
                              Reply
                            </Link>
                          </span>
                          <span>
                            <Link to="#" className="m-r-10 text-secondary">
                              Edit
                            </Link>
                          </span>
                        </div>
                        <hr />
                      </Media>
                    </Media>
                  </Media>
                </Media>
                <Media>
                  <Media className="mr-3" left>
                    <Link to="#">
                      <img
                        src={avatar3}
                        className="img-fluid media-object img-radius comment-img"
                        alt="Generic placeholder"
                      />
                    </Link>
                  </Media>
                  <Media body>
                    <h6 className="media-heading txt-primary">
                      Lorem Ipsum{" "}
                      <span className="f-12 text-muted ml-1">Just now</span>
                    </h6>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                    <div className="m-t-10 m-b-25">
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Reply
                        </Link>
                      </span>
                      <span>
                        <Link to="#" className="m-r-10 text-secondary">
                          Edit
                        </Link>
                      </span>
                    </div>
                    <hr />
                  </Media>
                </Media>
                <InputGroup className="mb-3">
                  <Input tupe="text" placeholder="Add Task..." />
                  <InputGroupAddon addonType="append">
                  <Button color="primary" className="btn-icon"><FontAwesomeIcon icon="search" /></Button></InputGroupAddon>
                </InputGroup>
              </Media>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default TaskDetails
