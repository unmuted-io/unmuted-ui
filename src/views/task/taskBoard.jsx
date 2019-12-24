import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  InputGroup,
  Input,
  Button,
  InputGroupAddon,
  Collapse,
  Progress,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import avatar from "../../assets/images/user/avatar-1.jpg"
import avatar2 from "../../assets/images/user/avatar-2.jpg"
import avatar3 from "../../assets/images/user/avatar-3.jpg"

const BoardCard = ({ borderColor, color }) => (
  <Card className={`card-border-c-${borderColor}`}>
    <CardHeader>
      <Link to="#" className="text-secondary">
        #24. Create UI design model
      </Link>
      <span className={`label label-${color} float-right`}>
        {" "}
        28 January, 2015{" "}
      </span>
    </CardHeader>
    <CardBody className="card-task">
      <Row>
        <Col sm={12}>
          <p class="task-detail">
            A collection of textile samples lay spread out on the table One
            morning, when Gregor Samsa woke from troubled.
          </p>
          <p class="task-due">
            <strong> Due : </strong>
            <strong class={`label label-${color}`}>23 hours</strong>
          </p>
        </Col>
      </Row>
      <hr />
      <div className="task-list-table">
        <Link to="#">
          <img
            className="img-fluid img-radius m-r-5"
            src={avatar}
            alt="users"
          />
        </Link>
        <Link to="#">
          <img
            className="img-fluid img-radius m-r-5"
            src={avatar2}
            alt="users"
          />
        </Link>
        <Link to="#">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div className="task-board">
        <UncontrolledDropdown className="dropdown-secondary m-r-5">
          <DropdownToggle color={color} className="btn-sm" caret>
            Normal
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="#!">
              Highest priority
            </DropdownItem>
            <DropdownItem tag="a" href="#!">
              High priority
            </DropdownItem>
            <DropdownItem active tag="a" href="#!">
              Normal priority
            </DropdownItem>
            <DropdownItem tag="a" href="#!">
              Low priority
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="dropdown-secondary m-r-5">
          <DropdownToggle color={color} className="btn-sm" caret>
            Open
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="#!">
              Open
            </DropdownItem>
            <DropdownItem active tag="a" href="#!">
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
        <UncontrolledDropdown className="dropdown-secondary">
          <DropdownToggle color={color} className="btn-sm" caret>
            <FontAwesomeIcon icon="bars" />
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
)

class TaskBoard extends Component {
  state = {
    activateCollapse: [1, 2, 3],
  }
  collapseHandler = activeKey => {
    if (
      this.state.activateCollapse.findIndex(item => item === activeKey) > -1
    ) {
      this.setState({
        activateCollapse: this.state.activateCollapse.filter(
          item => item !== parseInt(activeKey),
        ),
      })
    } else {
      this.setState(prevState => {
        return {
          activateCollapse: [
            ...prevState.activateCollapse,
            parseInt(activeKey),
          ],
        }
      })
    }
  }
  render() {
    const { activateCollapse } = this.state
    return (
      <Row>
        <Col xl={3} lg={12}>
          <Card className="task-board-left">
            <CardHeader>
              <h5>Search Box</h5>
            </CardHeader>
            <CardBody>
              <InputGroup className="mb-3">
                <Input
                  className="add_task_todo"
                  type="text"
                  placeholder="Search here..."
                />
                <InputGroupAddon addonType="append">
                  <Button className="btn-icon btn-msg-send" color="primary">
                    <FontAwesomeIcon icon="search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
              <div className="task-right">
                <div
                  onClick={() => this.collapseHandler(1)}
                  className="task-right-header-status"
                >
                  <span className="f-w-400">Completed Status</span>
                  <FontAwesomeIcon
                    className="float-right m-t-5"
                    icon="caret-down"
                  />
                </div>
                <Collapse
                  isOpen={activateCollapse.findIndex(item => item === 1) > -1}
                >
                  <div className="taskboard-right-progress">
                    <h6 className="m-t-10">Highest Priority</h6>
                    <Progress color="success" value={80} />
                    <h6 className="m-t-15">High Priority</h6>
                    <Progress color="info" value={70} />
                    <h6 className="m-t-15">Normal Priority</h6>
                    <Progress color="warning" value={50} />
                    <h6 className="m-t-15">Low Priority</h6>
                    <Progress color="danger" value={60} />
                  </div>
                </Collapse>
                <div
                  onClick={() => this.collapseHandler(2)}
                  className="task-right-header-users"
                >
                  <span className="f-w-400">Assign Users</span>
                  <FontAwesomeIcon
                    className="float-right m-t-5"
                    icon="caret-down"
                  />
                </div>
                <Collapse
                  isOpen={activateCollapse.findIndex(item => item === 2) > -1}
                >
                  <div className="user-box assign-user taskboard-right-users">
                    <div className="media mb-2">
                      <div className="media-left media-middle mr-3">
                        <Link to="#">
                          <img
                            className="img-fluid media-object img-radius"
                            src={avatar}
                            alt="Generic placeholder"
                          />
                          <div className="live-status bg-danger" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h6>Josephin Doe</h6>
                        <p>Santa Ana,CA</p>
                      </div>
                    </div>
                    <div className="media mb-2">
                      <div className="media-left media-middle mr-3">
                        <Link to="#">
                          <img
                            className="img-fluid media-object img-radius"
                            src={avatar2}
                            alt="Generic placeholder"
                          />
                          <div className="live-status bg-success" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h6>Josephin Doe</h6>
                        <p>Santa Ana,CA</p>
                      </div>
                    </div>
                    <div className="media mb-2">
                      <div className="media-left media-middle mr-3">
                        <Link to="#">
                          <img
                            className="img-fluid media-object img-radius"
                            src={avatar3}
                            alt="Generic placeholder"
                          />
                          <div className="live-status bg-danger" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h6>Josephin Doe</h6>
                        <p>Santa Ana,CA</p>
                      </div>
                    </div>
                    <div className="media mb-2">
                      <div className="media-left media-middle mr-3">
                        <Link to="#">
                          <img
                            className="img-fluid media-object img-radius"
                            src={avatar2}
                            alt="Generic placeholder"
                          />
                          <div className="live-status bg-success" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h6>Josephin Doe</h6>
                        <p>Santa Ana,CA</p>
                      </div>
                    </div>
                  </div>
                </Collapse>
                <div
                  onClick={() => this.collapseHandler(3)}
                  className="task-right-header-revision"
                >
                  <span className="f-w-400">Revision</span>
                  <FontAwesomeIcon
                    className="float-right m-t-5"
                    icon="caret-down"
                  />
                </div>
                <Collapse
                  isOpen={activateCollapse.findIndex(item => item === 3) > -1}
                >
                  <div className="taskboard-right-revision user-box">
                    <div className="media">
                      <div className="media-left">
                        <Link
                          className="btn btn-outline-primary btn-icon"
                          to="#!"
                          role="button"
                        >
                          <FontAwesomeIcon icon="cogs" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="chat-header f-w-400 mb-1">
                          Drop the IE specific hacks for temporal inputs
                        </div>
                        <p className="chat-header  text-muted">4 minutes ago</p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <Link
                          className="btn btn-outline-danger btn-icon"
                          to="#!"
                          role="button"
                        >
                          <FontAwesomeIcon icon="share-alt" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="chat-header f-w-400 mb-1">
                          Have Carousel ignore keyboard events
                        </div>
                        <p className="chat-header  text-muted">12 Dec,2015</p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <Link
                          className="btn btn-outline-warning btn-icon"
                          to="#!"
                          role="button"
                        >
                          <FontAwesomeIcon icon="font" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="chat-header f-w-400 mb-1">
                          Add full font overrides for popovers and tooltips
                        </div>
                        <p className="chat-header  text-muted">2 month ago</p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <Link
                          className="btn btn-outline-success btn-icon"
                          to="#!"
                          role="button"
                        >
                          <FontAwesomeIcon icon="mobile-alt" />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="chat-header f-w-400 mb-1">
                          Responsive Asssignment
                        </div>
                        <p className="chat-header  text-muted">6 month ago</p>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={9} lg={12} className="filter-bar invoice-list">
          <Navbar className="m-b-30 p-10">
            <Nav>
              <NavItem className="f-text active">
                <Link to="#" className="nav-link text-secondary">
                  Filter: <span className="sr-only">(current)</span>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-secondary">
                  <FontAwesomeIcon icon={["far", "clock"]} className="m-r-5" />
                  By Date
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="#!">
                    Show all
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="#!">
                    Today
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    Yesterday
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    This week
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    This month
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    This year
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-secondary">
                  <FontAwesomeIcon icon="chart-line" className="m-r-5" />
                  By Status
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="#!">
                    Show all
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="#!">
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
                  <DropdownItem tag="a" href="#!">
                    Dublicate
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    Wontfix
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-secondary">
                  <FontAwesomeIcon icon="list-ol" className="m-r-5" />
                  By Priority
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="#!">
                    Show all
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="#!">
                    Highest
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    High
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    Normal
                  </DropdownItem>
                  <DropdownItem tag="a" href="#!">
                    Low
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavItem className="nav-grid f-view">
              <span className="m-r-15">View Mode: </span>
              <Button color="primary" className="btn-icon m-0">
                <FontAwesomeIcon icon="list-ul" />
              </Button>
              <Button
                color="primary"
                style={{ marginBottom: 0 }}
                className="btn-icon m-l-5"
              >
                <FontAwesomeIcon icon="th-large" />
              </Button>
            </NavItem>
          </Navbar>
          <Row>
            <Col md={6} sm={12}>
              <BoardCard borderColor="blue" color="primary" />
            </Col>
            <Col md={6} sm={12}>
              <BoardCard borderColor="green" color="success" />
            </Col>
            <Col md={6} sm={12}>
              <BoardCard borderColor="red" color="danger" />
            </Col>
            <Col md={6} sm={12}>
              <BoardCard borderColor="yellow" color="warning" />
            </Col>
            <Col md={6} sm={12}>
              <BoardCard borderColor="green" color="success" />
            </Col>
            <Col md={6} sm={12}>
              <BoardCard borderColor="blue" color="primary" />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default TaskBoard
