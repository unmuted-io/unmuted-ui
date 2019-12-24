import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import MainCard from "../../../components/mainCard/mainCard"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"

const columns = [
  {
    dataField: "fName",
    text: "FIRST NAME",
    sort: true,
  },
  {
    dataField: "lName",
    text: "LAST NAME",
    sort: true,
  },
  {
    dataField: "jobTitle",
    text: "JOB TITLE",
    sort: true,
  },
  {
    dataField: "bob",
    text: "BOB",
    sort: true,
  },
  {
    dataField: "status",
    text: "STATUS",
    sort: true,
  },
]

const products = [
  {
    id: 1,
    fName: "Garrett",
    lName: "Accountant",
    jobTitle: "Tokyo",
    bob: 63,
    status: "Active",
  },
  {
    id: 2,
    fName: "Tiger Nixon",
    lName: "System Architect",
    jobTitle: "Edinburgh",
    bob: 61,
    status: "Suspended",
  },
  {
    id: 3,
    fName: "Cox",
    lName: "Author",
    jobTitle: "San",
    bob: 66,
    status: "Disabled",
  },
  {
    id: 4,
    fName: "Kelly",
    lName: "Brielle",
    jobTitle: "Edinburgh",
    bob: 22,
    status: "Active",
  },
  {
    id: 5,
    fName: "Airi Satou",
    lName: "Accountant",
    jobTitle: "Tokyo",
    bob: 33,
    status: "Active",
  },
  {
    id: 6,
    fName: "Brielle",
    lName: "Specialist",
    jobTitle: "New York",
    bob: 63,
    status: "Disabled",
  },
  {
    id: 7,
    fName: "Herrod Chandler",
    lName: "Sales Assistant",
    jobTitle: "San",
    bob: 59,
    status: "Suspended",
  },
  {
    id: 8,
    fName: "Rhona Davidson",
    lName: "Specialist",
    jobTitle: "Tokyo",
    bob: 55,
    status: "Active",
  },
  {
    id: 9,
    fName: "Colleen Hurst",
    lName: "Javascript Developer",
    jobTitle: "Dhaka",
    bob: 39,
    status: "Disabled",
  },
  {
    id: 10,
    fName: "Sonya Frost",
    lName: "Software",
    jobTitle: "Edinburgh",
    bob: 23,
    status: "Suspended",
  },
  {
    id: 11,
    fName: "Jena Gaines",
    lName: "Office Manager",
    jobTitle: "London",
    bob: 30,
    status: "Active",
  },
  {
    id: 12,
    fName: "Flynn",
    lName: "Support Lead",
    jobTitle: "Edinburgh",
    bob: 33,
    status: "Disabled",
  },
  {
    id: 13,
    fName: "Charde Marshall",
    lName: "Regional Director",
    jobTitle: "San",
    bob: 36,
    status: "Suspended",
  },
  {
    id: 14,
    fName: "Haley Kennedy",
    lName: "Senior Marketing Designer",
    jobTitle: "London",
    bob: 43,
    status: "Active",
  },
  {
    id: 15,
    fName: "Tatyana Fitzpatrick",
    lName: "Regional Directo",
    jobTitle: "London",
    bob: 19,
    status: "Disabled",
  },
  {
    id: 16,
    fName: "Michael Silva",
    lName: "Marketing Designer",
    jobTitle: "London",
    bob: 66,
    status: "Suspended",
  },
  {
    id: 17,
    fName: "Paul Byrd",
    lName: "(CFO)",
    jobTitle: "New York",
    bob: 64,
    status: "Active",
  },
  {
    id: 18,
    fName: "Gloria Little",
    lName: "Systems Administrator",
    jobTitle: "New York",
    bob: 59,
    status: "Disabled",
  },
  {
    id: 19,
    fName: "Bradley Greer",
    lName: "Software",
    jobTitle: "London",
    bob: 41,
    status: "Suspended",
  },
  {
    id: 20,
    fName: "Tatyana Fitzpatrick",
    lName: "Regional Directo",
    jobTitle: "London",
    bob: 19,
    status: "Disabled",
  },
]
const options = {
  custom: true,
  totalSize: products.length,
}
class FooTable extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <MainCard title="Foo Table" isOption>
            <h5>Filtering</h5>
            <hr />

            <PaginationProvider pagination={paginationFactory(options)}>
              {({ paginationProps, paginationTableProps }) => (
                <div className="foo-table">
                  <BootstrapTable
                    keyField="id"
                    HeaderCell=""
                    data={products}
                    columns={columns}
                    bordered={false}
                    striped
                    hover
                    condensed
                    {...paginationTableProps}
                  />
                  <div className="foo-table-footer">
                    <PaginationListStandalone {...paginationProps} />
                    <span className="badge badge-dark">
                      {paginationProps.page} of{" "}
                      {parseInt(
                        paginationProps.totalSize / paginationProps.sizePerPage,
                      )}
                    </span>
                  </div>
                </div>
              )}
            </PaginationProvider>
          </MainCard>
        </Col>
      </Row>
    )
  }
}

export default FooTable
