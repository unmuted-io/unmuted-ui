import React, { Component, Fragment } from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
} from "reactstrap"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import TodoLists from "../../components/todo/todoList"
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css"
import avatar1 from "../../assets/images/user/avatar-1.jpg"
import avatar2 from "../../assets/images/user/avatar-2.jpg"
import avatar3 from "../../assets/images/user/avatar-3.jpg"

const { SearchBar } = Search
const columns = [
  {
    dataField: "id",
    text: "#",
    sort: true,
  },
  {
    dataField: "task",
    text: "task list",
    sort: true,
  },
  {
    dataField: "commit",
    text: "list commit",
    sort: true,
  },
  {
    dataField: "status",
    text: "status",
    sort: true,
  },
  {
    dataField: "user",
    text: "assigned user",
    sort: true,
  },
  {
    dataField: "action",
    text: "action",
    sort: true,
  },
]

const dateInput = <Input type="date" />
const selectData = (
  <Input type="select">
    <option value="opt1">Open</option>
    <option value="opt2">Resolved</option>
    <option value="opt3">Invalid</option>
    <option value="opt4">On hold</option>
    <option value="opt5">Close</option>
  </Input>
)
const actionData = (
  <UncontrolledDropdown>
    <DropdownToggle caret right tag="span" style={{ cursor: "pointer" }}>
      <FontAwesomeIcon icon="cog" />
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Attach File</DropdownItem>
      <DropdownItem>Edit Task</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Reassign Task</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

function userData(num) {
  if (num === 3) {
    return (
      <Fragment>
        <Link to="#">
          <img
            className="img-fluid img-radius mr-1"
            src={avatar1}
            alt="users"
          />
        </Link>
        <Link to="#">
          <img
            className="img-fluid img-radius mr-1"
            src={avatar2}
            alt="users"
          />
        </Link>
        <Link to="#">
          <img
            className="img-fluid img-radius mr-1"
            src={avatar3}
            alt="users"
          />
        </Link>
        <FontAwesomeIcon icon="plus" className="m-l-5" />
      </Fragment>
    )
  }
  if (num === 2) {
    return (
      <Fragment>
        <Link to="#">
          <img
            className="img-fluid img-radius mr-1"
            src={avatar1}
            alt="users"
          />
        </Link>
        <Link to="#">
          <img
            className="img-fluid img-radius mr-1"
            src={avatar2}
            alt="users"
          />
        </Link>
        <FontAwesomeIcon icon="plus" className="m-l-5" />
      </Fragment>
    )
  }
  if (num === 1) {
    return (
      <Fragment>
        <Link to="#">
          <img
            className="img-fluid img-radius mr-1"
            src={avatar1}
            alt="users"
          />
        </Link>
        <FontAwesomeIcon icon="plus" className="m-l-5" />
      </Fragment>
    )
  }
}

const products = [
  {
    id: "#" + 12,
    task: "Edit the draft for the icons",
    commit: dateInput,
    status: selectData,
    user: userData(3),
    action: actionData,
  },
  {
    id: "#" + 20,
    task: "Create UI design model	",
    commit: dateInput,
    status: selectData,
    user: userData(2),
    action: actionData,
  },
  {
    id: "#" + 35,
    task: "Checkbox Design issue",
    commit: dateInput,
    status: selectData,
    user: userData(1),
    action: actionData,
  },
  {
    id: "#" + 56,
    task: "Edit the draft for the icons",
    commit: dateInput,
    status: selectData,
    user: userData(2),
    action: actionData,
  },
  {
    id: "#" + 78,
    task: "Create UI design model",
    commit: dateInput,
    status: selectData,
    user: userData(3),
    action: actionData,
  },
]

const sizePerPageRenderer = ({
  options,
  currSizePerPage,
  onSizePerPageChange,
}) => {
  return (
    <UncontrolledDropdown className="d-inline-block m-l-5">
      <DropdownToggle caret color="light" className="border">
        {currSizePerPage}
      </DropdownToggle>
      <DropdownMenu>
        {options.map(option => (
          <DropdownItem
            key={option.text}
            onClick={() => onSizePerPageChange(option.page)}
          >
            {option.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
)

const options = {
  custom: true,
  totalSize: products.length,
  sizePerPageRenderer,
  showTotal: true,
  paginationTotalRenderer: customTotal,
  prePageText: "Previous",
  nextPageText: "Next",
  withFirstAndLast: false,
}

class TaskList extends Component {
  render() {
    const contents = ({ paginationProps, paginationTableProps }) => (
      <Fragment>
        <ToolkitProvider keyField="id" columns={columns} data={products} search>
          {toolkitprops => (
            <Fragment>
              <Row className="m-b-10">
                <Col sm={6}>
                  <label>
                    Show
                    <SizePerPageDropdownStandalone {...paginationProps} />{" "}
                    entries
                  </label>
                </Col>
                <Col sm={6} className="text-right">
                  <span>
                    <span className="p-r-5"> Search:</span>

                    <SearchBar {...toolkitprops.searchProps} />
                  </span>
                </Col>
              </Row>
              <BootstrapTable
                keyField="id"
                HeaderCell=""
                data={products}
                columns={columns}
                wrapperClasses="table-responsive"
                striped
                hover
                condensed
                {...toolkitprops.baseProps}
                {...paginationTableProps}
              />
            </Fragment>
          )}
        </ToolkitProvider>
        <PaginationTotalStandalone {...paginationProps} />
        <PaginationListStandalone {...paginationProps} />
      </Fragment>
    )

    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Task List</h5>
            </CardHeader>
            <CardBody className="task-data">
              <PaginationProvider pagination={paginationFactory(options)}>
                {contents}
              </PaginationProvider>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12">
          <TodoLists />
        </Col>
      </Row>
    )
  }
}

export default TaskList
