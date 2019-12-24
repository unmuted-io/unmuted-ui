import React, { Component } from "react"
import { Row, Col, Button, CardBody, Container, Table } from "reactstrap"
import { Link } from "react-router-dom"
import ReactToPrint from "react-to-print"
import logo from "../../assets/images/logo-dark.png"

class Invoice extends Component {
  render() {
    return (
      <Row>
        <Container>
          <div>
            <div className="card" ref={el => (this.componentRef = el)}>
              <Row className="invoice-contact">
                <Col md={8}>
                  <Row className="invoice-box">
                    <Col sm={12}>
                      <Table
                        borderless
                        className="table-responsive invoice-table p-l-20"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/" className="b-brand">
                                <img
                                  className="img-fluid"
                                  src={logo}
                                  alt="Elite Able Logo"
                                />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>Company name </td>
                          </tr>
                          <tr>
                            <td>
                              1065 Mandan Road, Columbia MO, Missouri.
                              (123)-65202
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                className="text-secondary"
                                to="mailto:demo@gmail.com"
                                target="_top"
                              >
                                demo@gmail.com
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>+91 919-91-91-919</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} />
              </Row>
              <CardBody>
                <Row className="invoive-info">
                  <Col xs={12} md={4} className="invoice-client-info">
                    <h6>Client Information :</h6>
                    <h6 className="m-0">Josephin Villa</h6>
                    <p className="m-0 m-t-10">
                      1065 Mandan Road, Columbia MO, Missouri. (123)-65202
                    </p>
                    <p className="m-0">(1234) - 567891</p>
                    <p>
                      <Link
                        className="text-secondary"
                        to="mailto:demo@gmail.com"
                        target="_top"
                      >
                        demo@gmail.com
                      </Link>
                    </p>
                  </Col>
                  <Col md={4} sm={6}>
                    <h6>Order Information :</h6>
                    <Table
                      className="invoice-table invoice-order"
                      responsive
                      borderless
                    >
                      <tbody>
                        <tr>
                          <th>Date :</th>
                          <td>November 14</td>
                        </tr>
                        <tr>
                          <th>Status :</th>
                          <td>
                            <span className="label label-warning">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Id :</th>
                          <td>#146859</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md={4} sm={6}>
                    <h6 className="m-b-20">
                      Invoice Number <span>#125863478945</span>
                    </h6>
                    <h6 className="text-uppercase text-primary">
                      Total Due :<span>$950.00</span>
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Table className="invoice-detail-table" responsive>
                      <thead>
                        <tr className="thead-default">
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Amount</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h6>Logo Design</h6>
                            <p className="m-0">
                              lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt{" "}
                            </p>
                          </td>
                          <td>6</td>
                          <td>$200.00</td>
                          <td>$1200.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Logo Design</h6>
                            <p className="m-0">
                              lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt{" "}
                            </p>
                          </td>
                          <td>7</td>
                          <td>$100.00</td>
                          <td>$700.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Logo Design</h6>
                            <p className="m-0">
                              lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt{" "}
                            </p>
                          </td>
                          <td>5</td>
                          <td>$150.00</td>
                          <td>$750.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Table className="invoice-table invoice-total table-responsive">
                      <tbody>
                        <tr>
                          <th>Sub Total :</th>
                          <td>$4725.00</td>
                        </tr>
                        <tr>
                          <th>Taxes (10%) :</th>
                          <td>$57.00</td>
                        </tr>
                        <tr>
                          <th>Discount (5%) :</th>
                          <td>$45.00</td>
                        </tr>
                        <tr className="text-info">
                          <td>
                            <hr />
                            <h5 className="text-primary m-r-10">Total :</h5>
                          </td>
                          <td>
                            <hr />
                            <h5 className="text-primary">$ 4827.00</h5>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <h6>Terms and Condition :</h6>
                    <p>
                      lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </div>
            <Row className="text-center">
              <Col className="invoice-btn-group text-center" sm={12}>
                <ReactToPrint
                  trigger={() => (
                    <Button
                      className="btn-print-invoice m-b-10"
                      color="primary"
                    >
                      Print
                    </Button>
                  )}
                  content={() => this.componentRef}
                />

                <Button className="m-b-10">Cancel</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </Row>
    )
  }
}

export default Invoice
