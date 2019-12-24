import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody, Table } from "reactstrap"
import BarChartJs from "../../components/chartJs/barBasicChart"

class InvoiceSummary extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Sales and Expenses</h5>
            </CardHeader>
            <CardBody>
              <BarChartJs height={211} />
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <CardHeader>
              <h5>Sales, Receipt and Dues</h5>
            </CardHeader>
            <CardBody>
              <Table className="m-0" responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Sales</th>
                    <th>Receipt</th>
                    <th>Dues</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Today</th>
                    <td>$250.00</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">This Week</th>
                    <td>$380.00</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">This Month</th>
                    <td>$450.00</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">This Year</th>
                    <td>$600.00</td>
                    <td>the Bird</td>
                    <td>@facebook</td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td>$600.00</td>
                    <td>the Bird</td>
                    <td>@google</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <CardHeader>
              <h5>Recent Orders</h5>
            </CardHeader>
            <CardBody>
              <Table className="table-hover" responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Order No.</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>54822</td>
                    <td>Product 1</td>
                    <td>2</td>
                    <td>
                      <label className="label label-md label-danger m-0">
                        $80.00
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>54823</td>
                    <td>Product 2</td>
                    <td>1</td>
                    <td>
                      <label className="label label-md label-success m-0">
                        $75.00
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>54824</td>
                    <td>Product 3</td>
                    <td>3</td>
                    <td>
                      <label className="label label-md label-warning m-0">
                        $99.00
                      </label>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default InvoiceSummary
