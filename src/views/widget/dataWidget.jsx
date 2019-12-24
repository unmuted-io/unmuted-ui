import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Button,
  CardFooter
} from "reactstrap";
import Data from "../dashboard/data";
import StaticData from "../dashboard/staticData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import CryptoStatisTics from "../../components/cards/basicsStaticCards/cryptoStatistics";

import ProgressSingle from "../../components/cards/basicsStaticCards/basicCardProgressSingle";
import ActivityStaticCard from "../../components/cards/basicsStaticCards/activityStaticsCard";
import MainCard from "../../components/mainCard/mainCard";
import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";
import avatar4 from "../../assets/images/user/avatar-4.jpg";
import avatar5 from "../../assets/images/user/avatar-5.jpg";
import pro1 from "../../assets/images/widget/p1.jpg";
import pro2 from "../../assets/images/widget/p2.jpg";
import pro3 from "../../assets/images/widget/p3.jpg";
import pro4 from "../../assets/images/widget/p4.jpg";
import slider1 from "../../assets/images/slider/img-slide-1.jpg";
import slider2 from "../../assets/images/slider/img-slide-2.jpg";

class DataWidget extends Component {
  render() {
    return (
      <Row>
        <Col xl={4} md={6}>
          <Card>
            <CardBody>
              <h5 className="mb-4">
                Retina ready Desktop, Components, Application
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <div className="mt-4">
                <Button className="mb-0" color="primary">
                  OKEY
                </Button>
                <Button className="mb-0" color="danger">
                  CANCEL
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>You have assigned new ticket #999</h5>
            </CardHeader>
            <CardBody>
              <p className="m-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
            </CardBody>
            <CardFooter className="p-0">
              <Row className="text-center m-0">
                <Link to="#" className="col border-right">
                  <h6 className="my-3">OK</h6>
                </Link>
                <Link to="#" className="col">
                  <h6 className="my-3">CANCEL</h6>
                </Link>
              </Row>
            </CardFooter>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Incoming Requests</h5>
            </CardHeader>
            <PerfectScrollbar>
              <CardBody
                className="card-body p-0 incomeing-scroll"
                style={{ height: "195px" }}
              >
                <div className="mt-3 mb-3">
                  <span className="px-3 d-block">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-blue f-10 m-r-5"
                    />
                    Incoming requests
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <i className="fas fa-circle text-c-green f-10 m-r-5" />
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-blue f-10 m-r-5"
                    />
                    You have 2 pending requests..
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <i className="fas fa-circle text-c-red f-10 m-r-5" />
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-blue f-10 m-r-5"
                    />
                    You have 3 pending tasks
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-yellow f-10 m-r-5"
                    />
                    New order received
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-purple f-10 m-r-5"
                    />
                    Incoming requests
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-green f-10 m-r-5"
                    />
                    The 3 Golden Rules Professional Design..
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-red f-10 m-r-5"
                    />
                    You have 4 pending tasks
                  </span>
                  <hr />
                  <span className="px-3 d-block">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-yellow f-10 m-r-5"
                    />
                    New order received
                  </span>
                </div>
              </CardBody>
            </PerfectScrollbar>
            <CardFooter>
              <h6 className="text-center m-0">
                <Link to="#">Show more</Link>
              </h6>
            </CardFooter>
          </Card>
        </Col>
        <Col sm={12}>
          <Card className="table-card">
            <CardHeader>
              <h5>Last Product Sales</h5>
            </CardHeader>
            <CardBody className="px-0 py-0">
              <PerfectScrollbar>
                <div className="product-scroll" style={{ height: "380px" }}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>CAMPAIGN DATE</th>
                        <th>CLICK ?</th>
                        <th>COST ?</th>
                        <th>CTR ?</th>
                        <th>ARPU ?</th>
                        <th>ECPI ?</th>
                        <th>ROI ?</th>
                        <th>TREVENUE ?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total and average</td>
                        <td>1300</td>
                        <td>1025</td>
                        <td>14005</td>
                        <td>95,3%</td>
                        <td>29,7%</td>
                        <td>3,25</td>
                        <td>2:30</td>
                      </tr>
                      <tr>
                        <td>24-11-2016</td>
                        <td>
                          125
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          140
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          856
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          45,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          9,7%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          7,25
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          5:26
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>28-10-2016</td>
                        <td>
                          352
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          150
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          769
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          35,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6,7%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          3,57
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          3:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>8-9-2017</td>
                        <td>
                          145
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          869
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          453
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          76,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6,4%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          7,56
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          1:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>12-12-2017</td>
                        <td>
                          458
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          769
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          456
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          56,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          9,4%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          7,32
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>8-12-2017</td>
                        <td>
                          789
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          756
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          432
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          39,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6,7%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          3,79
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "20%" }}
                            />
                          </div>
                        </td>
                        <td>
                          4:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>28-10-2016</td>
                        <td>
                          352
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "35%" }}
                            />
                          </div>
                        </td>
                        <td>
                          150
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          769
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          35,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6,7%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          3,57
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </td>
                        <td>
                          3:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>8-9-2017</td>
                        <td>
                          145
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </td>
                        <td>
                          869
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "35%" }}
                            />
                          </div>
                        </td>
                        <td>
                          453
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "65%" }}
                            />
                          </div>
                        </td>
                        <td>
                          76,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6,4%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          7,56
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "45%" }}
                            />
                          </div>
                        </td>
                        <td>
                          1:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "75%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>12-12-2017</td>
                        <td>
                          458
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          769
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "45%" }}
                            />
                          </div>
                        </td>
                        <td>
                          456
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          56,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "35%" }}
                            />
                          </div>
                        </td>
                        <td>
                          9,4%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          7,32
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "40%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "55%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>8-12-2017</td>
                        <td>
                          789
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </td>
                        <td>
                          756
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "55%" }}
                            />
                          </div>
                        </td>
                        <td>
                          432
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          39,3%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "68%" }}
                            />
                          </div>
                        </td>
                        <td>
                          6,7%
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          3,79
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "42%" }}
                            />
                          </div>
                        </td>
                        <td>
                          4:30
                          <div
                            className="progress mt-1"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar bg-primary rounded"
                              role="progressbar"
                              style={{ width: "38%" }}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Col>
        <Col xl={8} md={6}>
          <Card>
            <CardHeader>
              <h5>Product Sales</h5>
            </CardHeader>
            <CardBody>
              <Row className="mb-3">
                <Col>
                  <span className="text-muted">Earning Product</span>
                  <h3 className="mt-2">
                    20,569<span className="ml-2">USD</span>
                  </h3>
                </Col>
                <Col>
                  <span className="text-muted">Yesterday</span>
                  <h3 className="mt-2">
                    580<span className="ml-2">USD</span>
                  </h3>
                </Col>
                <Col>
                  <span className="text-muted">This Week</span>
                  <h3 className="mt-2">
                    5,789<span className="ml-2">USD</span>
                  </h3>
                </Col>
              </Row>
              <PerfectScrollbar>
                <div className="sale-scroll" style={{ height: "295px" }}>
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th>Last Sales</th>
                        <th>Name Product</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-green">2136</h6>
                        </td>
                        <td>HeadPhone</td>
                        <td>
                          <h6 className="mb-1 text-c-green">$ 926.23</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-red">2546</h6>
                        </td>
                        <td>Iphone 6</td>
                        <td>
                          <h6 className="mb-1 text-c-red">$ 485.85</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-blue">2681</h6>
                        </td>
                        <td>Jacket</td>
                        <td>
                          <h6 className="mb-1 text-c-blue">$ 786.4</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-purple">2756</h6>
                        </td>
                        <td>HeadPhone</td>
                        <td>
                          <h6 className="mb-1 text-c-purple">$ 563.45</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-red">8765</h6>
                        </td>
                        <td>Sofa</td>
                        <td>
                          <h6 className="mb-1 text-c-red">$ 769.45</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-yellow">3652</h6>
                        </td>
                        <td>Iphone 7</td>
                        <td>
                          <h6 className="mb-1 text-c-yellow">$ 754.45</h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="mb-1 text-c-green">7456</h6>
                        </td>
                        <td>Jacket</td>
                        <td>
                          <h6 className="mb-1 text-c-green">$ 743.23</h6>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <CryptoStatisTics
            title="Total Revenue"
            cryptoStatist={Data.cryptoStatist}
          />
        </Col>
        <Col md={6} xl={4}>
          <ProgressSingle
            position="top"
            downValue={6456}
            upValue={2500}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            textTitle="App design and development"
            color="blue"
            leftText="This Week"
            rightText="Previous Week"
            progressValue={60}
            progressColor="primary"
          />
        </Col>
        <Col md={6} xl={4}>
          <ProgressSingle
            position="top"
            downValue={2450}
            upValue={5420}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            textTitle="Landing page design"
            color="red"
            leftText="This Year"
            rightText="Previous Year"
            progressValue={60}
            progressColor="danger"
          />
        </Col>
        <Col md={6} xl={4}>
          <ProgressSingle
            position="top"
            downValue={8360}
            upValue={9400}
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
            textTitle="Mockup design"
            color="green"
            leftText="This Month"
            rightText="Previous Month"
            progressValue={60}
            progressColor="success"
          />
        </Col>
        <Col xl={4} md={6}>
          <MainCard
            title="New Customers"
            cardClass="new-cust-card"
            bodyClass="p-b-0"
            isScroll="cust-scroll"
            scrollHeight="415px"
            isOption
          >
            <div className="align-middle m-b-25">
              <img
                src={avatar1}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>Alex Thompson</h6>
                </Link>
                <p className="m-b-0">Cheers!</p>
                <span className="status active" />
              </div>
            </div>
            <div className="align-middle m-b-25">
              <img
                src={avatar2}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>John Doue</h6>
                </Link>
                <p className="m-b-0">stay hungry stay foolish!</p>
                <span className="status active" />
              </div>
            </div>
            <div className="align-middle m-b-25">
              <img
                src={avatar3}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>Alex Thompson</h6>
                </Link>
                <p className="m-b-0">Cheers!</p>
                <span className="status deactive">
                  <i className="far fa-clock m-r-10" />
                  30 min ago
                </span>
              </div>
            </div>
            <div className="align-middle m-b-25">
              <img
                src={avatar4}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>John Doue</h6>
                </Link>
                <p className="m-b-0">Cheers!</p>
                <span className="status deactive">
                  <i className="far fa-clock m-r-10" />
                  10 min ago
                </span>
              </div>
            </div>
            <div className="align-middle m-b-25">
              <img
                src={avatar5}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>Shirley Hoe</h6>
                </Link>
                <p className="m-b-0">stay hungry stay foolish!</p>
                <span className="status active" />
              </div>
            </div>
            <div className="align-middle m-b-25">
              <img
                src={avatar1}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>John Doue</h6>
                </Link>
                <p className="m-b-0">Cheers!</p>
                <span className="status active" />
              </div>
            </div>
            <div className="align-middle m-b-25">
              <img
                src={avatar2}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>James Alexander</h6>
                </Link>
                <p className="m-b-0">stay hungry stay foolish!</p>
                <span className="status active" />
              </div>
            </div>
            <div className="align-middle m-b-0">
              <img
                src={avatar3}
                alt="user"
                className="img-radius align-top m-r-15"
              />
              <div className="d-inline-block">
                <Link to="#">
                  <h6>John Doue</h6>
                </Link>
                <p className="m-b-0">Cheers!</p>
                <span className="status deactive">
                  <i className="far fa-clock m-r-10" />
                  10 min ago
                </span>
              </div>
            </div>
          </MainCard>
        </Col>
        <Col xl={8} md={6}>
          <MainCard
            cardClass="table-card"
            title="New Products"
            bodyClass="p-0"
            isScroll="pro-scroll"
            scrollHeight="415px"
            isOption
          >
            <Table className="table-hover m-b-0" responsive>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HeadPhone</td>
                  <td>
                    <img src={pro1} alt="plachholder" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-warning">Pending</label>
                    </div>
                  </td>
                  <td>$10</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16  text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Iphone 6</td>
                  <td>
                    <img src={pro2} alt="" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-danger">Cancel</label>
                    </div>
                  </td>
                  <td>$20</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16  text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Jacket</td>
                  <td>
                    <img src={pro3} alt="" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-success">Success</label>
                    </div>
                  </td>
                  <td>$35</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Sofa</td>
                  <td>
                    <img src={pro4} alt="" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-danger">Cancel</label>
                    </div>
                  </td>
                  <td>$85</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Iphone 6</td>
                  <td>
                    <img src={pro1} alt="" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-success">Success</label>
                    </div>
                  </td>
                  <td>$20</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>HeadPhone</td>
                  <td>
                    <img src={pro2} alt="" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-warning">Pending</label>
                    </div>
                  </td>
                  <td>$50</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Iphone 6</td>
                  <td>
                    <img src={pro2} alt="" className="img-20" />
                  </td>
                  <td>
                    <div>
                      <label className="badge badge-danger">Cancel</label>
                    </div>
                  </td>
                  <td>$30</td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 ml-3 f-16 text-c-red" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col xl={6} md={6}>
          <MainCard
            cardClass="table-card"
            title="Top Contacts"
            bodyClass="p-0"
            isScroll="contact-scroll"
            scrollHeight="380px"
            isOption
          >
            <Table className="table-hover m-b-0" responsive>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Star Date</th>
                  <th>End Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apple Company</td>
                  <td>23/05/2017</td>
                  <td>04/08/2018</td>
                  <td>
                    <label className="label label-success">Paid</label>
                  </td>
                </tr>
                <tr>
                  <td>Envato Pvt Ltd.</td>
                  <td>20/03/2017</td>
                  <td>04/08/2019</td>
                  <td>
                    <label className="label label-danger">Unpaid</label>
                  </td>
                </tr>
                <tr>
                  <td>Dribble Company</td>
                  <td>13/05/2017</td>
                  <td>03/01/2018</td>
                  <td>
                    <label className="label label-success">Paid</label>
                  </td>
                </tr>
                <tr>
                  <td>Adobe Family</td>
                  <td>11/01/2016</td>
                  <td>02/03/2017</td>
                  <td>
                    <label className="label label-success">Paid</label>
                  </td>
                </tr>
                <tr>
                  <td>Apple Company</td>
                  <td>23/05/2017</td>
                  <td>04/08/2018</td>
                  <td>
                    <label className="label label-danger">Unpaid</label>
                  </td>
                </tr>
                <tr>
                  <td>Apple Company</td>
                  <td>25/05/2018</td>
                  <td>04/12/2018</td>
                  <td>
                    <label className="label label-success">Paid</label>
                  </td>
                </tr>
                <tr>
                  <td>Envato Pvt Ltd.</td>
                  <td>15/03/2018</td>
                  <td>04/08/2016</td>
                  <td>
                    <label className="label label-danger">Unpaid</label>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col xl={6} md={6}>
          <MainCard
            isOption
            cardClass="table-card"
            title="Member’s Performance"
            isScroll="performance-scroll"
            scrollHeight="380px"
            bodyClass="p-0"
          >
            <Table className="table-hover m-b-0 without-header" responsive>
              <tbody>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar1}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">Shirley Hoe</h6>
                        <p className="m-b-0">Sales executive,NY</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $78.001
                      <FontAwesomeIcon
                        icon="level-down-alt"
                        className="text-c-red m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar2}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">James Alexander</h6>
                        <p className="m-b-0">Sales executive,EL</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $89.051
                      <FontAwesomeIcon
                        icon="level-up-alt"
                        className="text-c-green m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar3}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">Shirley Hoe</h6>
                        <p className="m-b-0">Sales executive,NY</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $89.051
                      <FontAwesomeIcon
                        icon="level-up-alt"
                        className="text-c-green m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar4}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">James Alexander</h6>
                        <p className="m-b-0">Sales executive,EL</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $78.001
                      <FontAwesomeIcon
                        icon="level-down-alt"
                        className="text-c-red m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar5}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">Shirley Hoe</h6>
                        <p className="m-b-0">Sales executive,NY</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $78.001
                      <FontAwesomeIcon
                        icon="level-down-alt"
                        className="text-c-red m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar1}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">John Doue</h6>
                        <p className="m-b-0">Sales executive,EL</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $58.769
                      <FontAwesomeIcon
                        icon="level-up-alt"
                        className="text-c-green m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-inline-block align-middle">
                      <img
                        src={avatar2}
                        alt="user"
                        className="img-radius align-top m-r-15"
                        style={{ width: "40px" }}
                      />
                      <div className="d-inline-block">
                        <h6 className="m-b-0">Alex Thompson</h6>
                        <p className="m-b-0">Sales executive,NY</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">
                    <h6 className="m-b-0">
                      $96.635
                      <FontAwesomeIcon
                        icon="level-up-alt"
                        className="text-c-green m-l-10"
                      />
                    </h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col xl={4} md={12}>
          <MainCard
            cardClass="latest-update-card update-card"
            title="What’s New"
            isScroll="new-scroll"
            scrollHeight="370px"
            isOption
          >
            <div className="latest-update-box">
              <div className="row p-t-20 p-b-30">
                <div className="col-auto text-right update-meta">
                  <img
                    src={avatar1}
                    alt="user"
                    className="img-radius align-top update-icon"
                  />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">Your Manager Posted.</h6>
                  </Link>
                  <p className="m-b-0">Jonny michel</p>
                </div>
              </div>
              <div className="row p-b-30">
                <div className="col-auto text-right update-meta">
                  <i className="feather icon-briefcase bg-c-red update-icon" />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">You have 3 pending Task.</h6>
                  </Link>
                  <p className="m-b-0">Hemilton</p>
                </div>
              </div>
              <div className="row p-b-30">
                <div className="col-auto text-right update-meta">
                  <i className="feather icon-check f-w-600 bg-c-green update-icon" />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">New Order Received.</h6>
                  </Link>
                  <p className="m-b-0">Hemilton</p>
                </div>
              </div>
              <div className="row p-b-30">
                <div className="col-auto text-right update-meta">
                  <i className="feather icon-briefcase bg-c-red update-icon" />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">You have 3 pending Task.</h6>
                  </Link>
                  <p className="m-b-0">Hemilton</p>
                </div>
              </div>
              <div className="row p-b-30">
                <div className="col-auto text-right update-meta">
                  <img
                    src={avatar4}
                    alt="user"
                    className="img-radius align-top update-icon"
                  />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">Your Manager Posted.</h6>
                  </Link>
                  <p className="m-b-0">Jonny michel</p>
                </div>
              </div>
              <div className="row p-b-30">
                <div className="col-auto text-right update-meta">
                  <i className="feather icon-check f-w-600 bg-c-green update-icon" />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">New Order Received.</h6>
                  </Link>
                  <p className="m-b-0">Shirley Hoe</p>
                </div>
              </div>
              <div className="row">
                <div className="col-auto text-right update-meta">
                  <i className="feather icon-briefcase bg-c-red update-icon" />
                </div>
                <div className="col p-l-5">
                  <Link to="#">
                    <h6 className="m-0">You have 2 pending Task.</h6>
                  </Link>
                  <p className="m-b-0">James Alexander</p>
                </div>
              </div>
            </div>
          </MainCard>
        </Col>
        <Col xl={4} md={12}>
          <ActivityStaticCard
            title="Latest Activity"
            activityList={StaticData.activityList}
          />
        </Col>
        <Col xl={4} md={12}>
          <MainCard
            cardClass="table-card"
            title="Campaign Statistics"
            bodyClass="p-0"
            isScroll="campaign-scroll"
            scrollHeight="370px"
            isOption
          >
            <Table className="table-hover m-b-0 without-header" responsive>
              <tbody>
                <tr>
                  <td>
                    <h3 className="m-0">100</h3>
                  </td>
                  <td>
                    <p className="m-0">Engagement</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-warning m-0">43%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">480</h3>
                  </td>
                  <td>
                    <p className="m-0">Likes</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-success m-0">58%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">230</h3>
                  </td>
                  <td>
                    <p className="m-0">Clicks</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-danger m-0">30%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">480</h3>
                  </td>
                  <td>
                    <p className="m-0">Likes</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-danger m-0">30%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">500</h3>
                  </td>
                  <td>
                    <p className="m-0">Clicks</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-primary m-0">40%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">400</h3>
                  </td>
                  <td>
                    <p className="m-0">Engagement</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-warning m-0">60%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">600</h3>
                  </td>
                  <td>
                    <p className="m-0">Clicks</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-success m-0">50%</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className="m-0">900</h3>
                  </td>
                  <td>
                    <p className="m-0">Likes</p>
                  </td>
                  <td className="text-right">
                    <label className="label label-primary m-0">90%</label>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard
            cardClass="table-card"
            title="Customer Overview"
            bodyClass="p-0"
            isScroll="customer-scroll"
            scrollHeight="465px"
            isOption
          >
            <Table className="table-hover m-b-0">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Customer</th>
                  <th>Company</th>
                  <th>Lead Score</th>
                  <th>Date</th>
                  <th>Tags</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={avatar4}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">Shirley Hoe</h6>
                    <p className="m-0">Sales executive , NY</p>
                  </td>
                  <td>Pinterest</td>
                  <td>223</td>
                  <td>19-11-2018</td>
                  <td>
                    <label className="badge badge-primary">Sketch</label>
                    <label className="badge badge-danger">Ui</label>
                  </td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={avatar2}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">James Alexander</h6>
                    <p className="m-0">Sales executive , EL</p>
                  </td>
                  <td>Facebook</td>
                  <td>268</td>
                  <td>10-10-2017</td>
                  <td>
                    <label className="badge badge-primary">Ux</label>
                    <label className="badge badge-danger">Ui</label>
                    <label className="badge badge-info">php</label>
                  </td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={avatar1}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">Shirley Hoe</h6>
                    <p className="m-0">Sales executive,NY</p>
                  </td>
                  <td>Google</td>
                  <td>293</td>
                  <td>16-03-2018</td>
                  <td>
                    <label className="badge badge-danger">Sketch</label>
                    <label className="badge badge-warning">Ui</label>
                  </td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={avatar4}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">Alex Thompson</h6>
                    <p className="m-0">Sales executive,NY</p>
                  </td>
                  <td>Pinterest</td>
                  <td>568</td>
                  <td>19-11-2018</td>
                  <td>
                    <label className="badge badge-info">Ux</label>
                    <label className="badge badge-success">Ui</label>
                    <label className="badge badge-warning">php</label>
                  </td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={avatar2}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">James Alexander</h6>
                    <p className="m-0">Sales executive,EL</p>
                  </td>
                  <td>Facebook</td>
                  <td>796</td>
                  <td>20-10-2017</td>
                  <td>
                    <label className="badge badge-primary">Sketch</label>
                    <label className="badge badge-info">Ui</label>
                  </td>

                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={avatar1}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">John Deo</h6>
                    <p className="m-0">Sales executive,EL</p>
                  </td>
                  <td>Twitter</td>
                  <td>465</td>
                  <td>25-11-2018</td>
                  <td>
                    <label className="badge badge-warning">Ux</label>
                    <label className="badge badge-danger">Ui</label>
                    <label className="badge badge-success">php</label>
                  </td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={avatar4}
                      alt="user"
                      className="img-radius align-top m-r-15"
                      style={{ width: "40px" }}
                    />
                  </td>
                  <td>
                    <h6 className="m-0">Shirley Hoe</h6>
                    <p className="m-0">Sales executive,NY</p>
                  </td>
                  <td>Google</td>
                  <td>783</td>
                  <td>16-03-2017</td>
                  <td>
                    <label className="badge badge-danger">Sketch</label>
                    <label className="badge badge-primary">Ui</label>
                  </td>
                  <td>
                    <Link to="#">
                      <i className="icon feather icon-edit f-16 text-c-green" />
                    </Link>
                    <Link to="#">
                      <i className="feather icon-trash-2 f-16 ml-3 text-c-red" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col xl={4} md={6}>
          <MainCard
            cardClass="testimonial-card table-card"
            title="Testimonial"
            isScroll="test-scroll"
            scrollHeight="386px"
            bodyClass="p-b-0"
            isOption
          >
            <div className="review-block">
              <div className="row">
                <div className="col-sm-auto p-r-0">
                  <img
                    src={avatar1}
                    alt="user"
                    className="img-radius profile-img cust-img m-b-15"
                  />
                </div>
                <div className="col">
                  <h6 className="m-b-10">John Deo</h6>
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="progress">
                        <div
                          className="progress-bar progress-c-green"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <h6 className="m-b-0">3.2</h6>
                    </div>
                  </div>
                  <p className="m-t-10 m-b-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-auto p-r-0">
                  <img
                    src={avatar2}
                    alt="user"
                    className="img-radius profile-img cust-img m-b-15"
                  />
                </div>
                <div className="col">
                  <h6 className="m-b-10">Alex Thompson</h6>
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="progress">
                        <div
                          className="progress-bar progress-c-blue"
                          style={{ width: "50%" }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <h6 className="m-b-0">4.2</h6>
                    </div>
                  </div>
                  <p className="m-t-10 m-b-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-auto p-r-0">
                  <img
                    src={avatar3}
                    alt="user"
                    className="img-radius profile-img cust-img m-b-15"
                  />
                </div>
                <div className="col">
                  <h6 className="m-b-10">John Deo</h6>
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="progress">
                        <div
                          className="progress-bar progress-c-red"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <h6 className="m-b-0">6.5</h6>
                    </div>
                  </div>
                  <p className="m-t-10 m-b-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-auto p-r-0">
                  <img
                    src={avatar2}
                    alt="user"
                    className="img-radius profile-img cust-img m-b-15"
                  />
                </div>
                <div className="col">
                  <h6 className="m-b-10">Shirley Hoe</h6>
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="progress">
                        <div
                          className="progress-bar progress-c-yellow"
                          style={{ width: "85%" }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <h6 className="m-b-0">9.6</h6>
                    </div>
                  </div>
                  <p className="m-t-10 m-b-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-auto p-r-0">
                  <img
                    src={avatar1}
                    alt="user"
                    className="img-radius profile-img cust-img m-b-15"
                  />
                </div>
                <div className="col">
                  <h6 className="m-b-10">James Alexander</h6>
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="progress">
                        <div
                          className="progress-bar progress-c-green"
                          style={{ width: "30%" }}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <h6 className="m-b-0">5.5</h6>
                    </div>
                  </div>
                  <p className="m-t-10 m-b-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </p>
                </div>
              </div>
            </div>
          </MainCard>
        </Col>
        <Col xl={8} md={6}>
          <MainCard
            title="New Products"
            cardClass="table-card"
            bodyClass="p-0"
            isScroll="stock-scroll"
            scrollHeight="386px"
            isOption
          >
            <Table className="table-hover m-b-0" responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Product Code</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sofa</td>
                  <td>#PHD001</td>
                  <td>abc@gmail.com</td>
                  <td>
                    <label className="label label-danger">Out Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Computer</td>
                  <td>#PHD002</td>
                  <td>cdc@gmail.com</td>
                  <td>
                    <label className="label label-success">In Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>#PHD003</td>
                  <td>pqr@gmail.com</td>
                  <td>
                    <label className="label label-danger">Out Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Coat</td>
                  <td>#PHD004</td>
                  <td>bcs@gmail.com</td>
                  <td>
                    <label className="label label-success">In Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Watch</td>
                  <td>#PHD003</td>
                  <td>cdc@gmail.com</td>
                  <td>
                    <label className="label label-danger">Out Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Sofa</td>
                  <td>#PHD009</td>
                  <td>xyz@gmail.com</td>
                  <td>
                    <label className="label label-danger">Out Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Coat</td>
                  <td>#PHD005</td>
                  <td>dfg@gmail.com</td>
                  <td>
                    <label className="label label-success">In Stock</label>
                  </td>
                  <td>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard
            title="Project Task List"
            cardClass="table-card"
            bodyClass="p-0"
            isScroll="subject-scroll"
            scrollHeight="385px"
            isOption
          >
            <Table className="table-hover m-b-0" responsive>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Regarding</th>
                  <th>Activity Type</th>
                  <th>Activity Status</th>
                  <th>Owner</th>
                  <th>Priority</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Building Marketing List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-danger">Open</label>
                  </td>
                  <td>John Malit</td>
                  <td>Normal</td>
                  <td>8/8/2017</td>
                  <td>8/9/2018</td>
                </tr>
                <tr>
                  <td>Project Task List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-primary">New</label>
                  </td>
                  <td>Ken Malit</td>
                  <td>low</td>
                  <td>6/7/2017</td>
                  <td>1/1/2018</td>
                </tr>
                <tr>
                  <td>Building Marketing List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-danger">Open</label>
                  </td>
                  <td>John Malit</td>
                  <td>high</td>
                  <td>3/9/2017</td>
                  <td>8/6/2018</td>
                </tr>
                <tr>
                  <td>Project Task List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-success">Close</label>
                  </td>
                  <td>Ken Malit</td>
                  <td>Normal</td>
                  <td>9/4/2017</td>
                  <td>3/6/2018</td>
                </tr>
                <tr>
                  <td>Building Marketing List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-primary">New</label>
                  </td>
                  <td>John Malit</td>
                  <td>high</td>
                  <td>7/4/2017</td>
                  <td>10/1/2018</td>
                </tr>
                <tr>
                  <td>Building Marketing List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-danger">Open</label>
                  </td>
                  <td>Ken Malit</td>
                  <td>low</td>
                  <td>7/8/2017</td>
                  <td>8/9/2018</td>
                </tr>
                <tr>
                  <td>Project Task List</td>
                  <td>Software pro</td>
                  <td>Task</td>
                  <td>
                    <label className="label label-primary">New</label>
                  </td>
                  <td>John Malit</td>
                  <td>Normal</td>
                  <td>6/6/2017</td>
                  <td>9/9/2018</td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col xl={4} md={12}>
          <Card className="widget-chat-box">
            <CardHeader>
              <Row>
                <Col sm={2}>
                  <i className="pop-up">
                    <FontAwesomeIcon icon="bars" />
                  </i>
                </Col>
                <Col className="text-center" sm={8}>
                  <h5>John Henry</h5>
                </Col>
                <Col className="text-right" sm={2}>
                  <FontAwesomeIcon icon="pencil-alt" />
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <PerfectScrollbar>
                <div className="chat-scroll" style={{ height: "350px" }}>
                  <p className="text-center">12:05 A.M.</p>
                  <div className="media">
                    <img
                      className="d-flex m-r-15"
                      src={avatar1}
                      alt="Generic placeholder"
                      style={{ width: "60px" }}
                    />
                    <div className="media-body send-chat">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at
                      <span className="time">3 min ago</span>
                    </div>
                  </div>
                  <div className="media col-sm-8 offset-md-4">
                    <div className="media-body  receive-chat">
                      Cras sit amet nibh libero, in gravida nulla.vel metus
                      scelerisque ante
                      <span className="time">
                        <FontAwesomeIcon icon="check" className="m-r-5" />
                        Seen 2 sec ago
                      </span>
                    </div>
                  </div>
                  <p className="text-center">11:05 A.M.</p>
                  <div className="media">
                    <img
                      className="d-flex m-r-15"
                      src={avatar2}
                      alt="Generic placeholder"
                      style={{ width: "60px" }}
                    />
                    <div className="media-body send-chat">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at
                      <span className="time">3 min ago</span>
                    </div>
                  </div>
                  <div className="media col-sm-8 offset-md-4">
                    <div className="media-body  receive-chat">
                      Cras sit amet nibh libero, in gravida nulla.vel metus
                      scelerisque ante
                      <span className="time">
                        <FontAwesomeIcon icon="check" className="m-r-5" />
                        Seen 2 sec ago
                      </span>
                    </div>
                  </div>
                </div>
              </PerfectScrollbar>
              <div className="right-icon-control m-t-15">
                <div className="input-group input-group-button">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Send message"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary waves-effect waves-light"
                      type="button"
                    >
                      <i className="feather icon-message-circle m-0" />
                    </button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <MainCard title="My Projects" bodyClass="widget-last-task" isOption>
            <PerfectScrollbar style={{ height: "352px" }}>
              <p className="m-b-10">
                New Dashboard <span className="float-right">5 Mins ago</span>
              </p>
              <ul className="list-unstyled m-b-20">
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar1}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
              <p className="m-b-10 ">
                Web Design <span className="float-right">8 Mins ago</span>
              </p>
              <ul className="list-unstyled  m-b-20">
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
              <p className="m-b-10">
                Android Design <span className="float-right">12 Mins ago</span>
              </p>
              <ul className="list-unstyled m-b-20">
                <li className="d-inline-block">
                  <img
                    src={avatar4}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
              <p className="m-b-10">
                New Dashboard <span className="float-right">5 Mins ago</span>
              </p>
              <ul className="list-unstyled m-b-20">
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
              <p className="m-b-10 ">
                photoshop Design <span className="float-right">2 Mins ago</span>
              </p>
              <ul className="list-unstyled  m-b-20">
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
              <p className="m-b-10">
                Ios Design <span className="float-right">1 Mins ago</span>
              </p>
              <ul className="list-unstyled m-b-20">
                <li className="d-inline-block">
                  <img
                    src={avatar4}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
              <p className="m-b-10 ">
                Web Design <span className="float-right">8 Mins ago</span>
              </p>
              <ul className="list-unstyled  m-b-0">
                <li className="d-inline-block">
                  <img
                    src={avatar2}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
                <li className="d-inline-block">
                  <img
                    src={avatar3}
                    style={{ width: "40px" }}
                    alt="user avatar"
                    className="img-radius img-30 m-r-10"
                  />
                </li>
              </ul>
            </PerfectScrollbar>
            <div className="right-icon-control m-t-15">
              <div className="input-group input-group-button">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Project"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="feather icon-plus m-0" />
                  </button>
                </div>
              </div>
            </div>
          </MainCard>
        </Col>
        <Col xl={4} md={12}>
          <MainCard title="Chat" cardClass="chat-card" isOption>
            <PerfectScrollbar style={{ height: "350px" }}>
              <div className="row m-b-20 received-chat">
                <div className="col-auto p-r-0">
                  <img
                    src={avatar1}
                    alt="user"
                    className="img-radius"
                    style={{ width: "40px" }}
                  />
                </div>
                <div className="col">
                  <div className="msg">
                    <p className="m-b-0">Nice to meet you!</p>
                  </div>
                  <p className="m-b-0">
                    <i className="fa fa-clock-o m-r-10" />
                    10:20am
                  </p>
                </div>
              </div>
              <div className="row m-b-20 send-chat">
                <div className="col">
                  <div className="msg">
                    <p className="m-b-0">Nice to meet you!</p>
                  </div>
                  <p className="m-b-0">
                    <i className="fa fa-clock-o m-r-10" />
                    10:20am
                  </p>
                </div>
                <div className="col-auto p-l-0">
                  <img
                    src={avatar2}
                    alt="user"
                    className="img-radius"
                    style={{ width: "40px" }}
                  />
                </div>
              </div>
              <div className="row m-b-20 received-chat">
                <div className="col-auto p-r-0">
                  <img
                    src={avatar1}
                    alt="user"
                    className="img-radius"
                    style={{ width: "40px" }}
                  />
                </div>
                <div className="col">
                  <div className="msg">
                    <p className="m-b-0">Nice to meet you!</p>
                    <img
                      className="img-fluid"
                      src={avatar4}
                      alt="plachholder"
                    />
                    <img
                      className="img-fluid"
                      src={avatar5}
                      alt="plachholder"
                    />
                  </div>
                  <p className="m-b-0">
                    <i className="fa fa-clock-o m-r-10" />
                    10:20am
                  </p>
                </div>
              </div>
              <div className="row m-b-20 send-chat">
                <div className="col">
                  <div className="msg">
                    <p className="m-b-0">Nice to meet you!</p>
                  </div>
                  <p className="m-b-0">
                    <i className="fa fa-clock-o m-r-10" />
                    10:20am
                  </p>
                </div>
                <div className="col-auto p-l-0">
                  <img
                    src={avatar2}
                    alt="user"
                    className="img-radius"
                    style={{ width: "40px" }}
                  />
                </div>
              </div>
              <div className="row m-b-20 received-chat">
                <div className="col-auto p-r-0">
                  <img
                    src={avatar1}
                    alt="user"
                    className="img-radius"
                    style={{ width: "40px" }}
                  />
                </div>
                <div className="col">
                  <div className="msg">
                    <p className="m-b-0">Nice to meet you!</p>
                    <img
                      className="img-fluid"
                      src={slider1}
                      alt="plachholder"
                    />
                    <img
                      className="img-fluid"
                      src={slider2}
                      alt="plachholder"
                    />
                  </div>
                  <p className="m-b-0">
                    <i className="fa fa-clock-o m-r-10" />
                    10:20am
                  </p>
                </div>
              </div>
            </PerfectScrollbar>
            <div className="right-icon-control m-t-15">
              <div className="input-group input-group-button">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Send message"
                />
                <div className="input-group-append">
                  <button className="btn btn-success" type="button">
                    <i className="feather icon-message-circle m-0" />
                  </button>
                </div>
              </div>
            </div>
          </MainCard>
        </Col>
        <Col xl={5} md={12}>
          <MainCard
            title="Feeds"
            cardClass="feed-card"
            isScroll="feed-scroll"
            scrollHeight="410px"
            isOption
          >
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-bell bg-c-blue feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    You have 3 pending tasks.{" "}
                    <span className="text-muted float-right f-14">
                      Just Now
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-shopping-cart bg-c-red feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    New order received{" "}
                    <span className="text-muted float-right f-14">
                      30 min ago
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-file-text bg-c-green feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    You have 3 pending tasks.{" "}
                    <span className="text-muted float-right f-14">
                      Just Now
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-bell bg-c-blue feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    You have 4 tasks Done.{" "}
                    <span className="text-muted float-right f-14">
                      1 hours ago
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-file-text bg-c-green feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    You have 2 pending tasks.{" "}
                    <span className="text-muted float-right f-14">
                      Just Now
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-shopping-cart bg-c-red feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    New order received{" "}
                    <span className="text-muted float-right f-14">
                      4 hours ago
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-shopping-cart bg-c-red feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    New order Done{" "}
                    <span className="text-muted float-right f-14">
                      Just Now
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-25 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-file-text bg-c-green feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    You have 5 pending tasks.{" "}
                    <span className="text-muted float-right f-14">
                      5 hours ago
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
            <div className="row m-b-0 align-items-center">
              <div className="col-auto p-r-0">
                <i className="feather icon-bell bg-c-blue feed-icon" />
              </div>
              <div className="col">
                <Link to="#">
                  <h6 className="m-b-5">
                    You have 4 tasks Done.{" "}
                    <span className="text-muted float-right f-14">
                      2 hours ago
                    </span>
                  </h6>
                </Link>
              </div>
            </div>
          </MainCard>
        </Col>
        <Col xl={7} md={12}>
          <MainCard
            cardClass="User-Activity table-card"
            title="User Activity"
            bodyClass="p-0"
            isScroll="activity-scroll"
            scrollHeight="410px"
            isOption
          >
            <Table className="table-hover m-0" responsive>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>User</th>
                  <th>Activity</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th className="text-right" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar1}
                      alt="activity-user"
                    />
                  </td>
                  <td>Ida Jorgensen</td>
                  <td>The quick brown</td>
                  <td>3:28 PM</td>
                  <td>
                    <span className="m-0 text-c-green">Done</span>
                  </td>

                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-green f-10"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>Albert Andersen</td>
                  <td>Jumps over</td>
                  <td>2:37 PM</td>
                  <td>
                    <span className="m-0 text-c-red">Missed</span>
                  </td>

                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-red f-10"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar3}
                      alt="activity-user"
                    />
                  </td>
                  <td>Silje Larsen</td>
                  <td>Dog the quick</td>
                  <td>10:23 AM</td>
                  <td>
                    <span className="m-0 text-c-purple">Delayed</span>
                  </td>

                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-purple f-10"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle m-r-10"
                      style={{ width: "40px" }}
                      src={avatar1}
                      alt="activity-user"
                    />
                  </td>
                  <td>Ida Jorgensen</td>
                  <td>The quick brown</td>
                  <td>4:28 PM</td>
                  <td>
                    <span className="m-0 text-c-green">Done</span>
                  </td>
                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-green f-10"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>John Deo</td>
                  <td>Dog the quick</td>
                  <td>2:30 PM</td>
                  <td>
                    <span className="m-0 text-c-yellow">pending</span>
                  </td>

                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-yellow f-10"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar3}
                      alt="activity-user"
                    />
                  </td>
                  <td>Alex Thompson</td>
                  <td>Jumps over</td>
                  <td>4:00 PM</td>
                  <td>
                    <span className="m-0 text-c-red">Missed</span>
                  </td>
                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-red f-10"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>Albert Andersen</td>
                  <td>Dog the quick</td>
                  <td>5:37 PM</td>
                  <td>
                    <span className="m-0 text-c-green">Done</span>
                  </td>
                  <td className="text-right">
                    <FontAwesomeIcon
                      icon="circle"
                      className="text-c-green f-10"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard
            cardClass="Application-list table-card"
            title="Application list"
            bodyClass="p-0"
            isScroll="app-scroll"
            scrollHeight="365px"
            isOption
          >
            <Table className="table-hover m-0" responsive>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Application</th>
                  <th>Installs</th>
                  <th>Created</th>
                  <th>Budget</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>
                    <h6 className="mb-1">Facebook</h6>
                    <p className="m-0">Apple</p>
                  </td>
                  <td>
                    <p className="mb-1">523.423</p>
                    <span className="text-c-green m-0">+ 84 Daily</span>
                  </td>
                  <td>Feb 11 2017</td>
                  <td>$ 16,244</td>
                  <td>
                    <Link
                      to="#"
                      className="text-white label label-primary f-12"
                    >
                      Active
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>
                    <h6 className="mb-1">Twitter</h6>
                    <p className="m-0">CS Form</p>
                  </td>
                  <td>
                    <p className="mb-1">7.239</p>
                    <span className="text-c-yellow m-0">+ 5 Daily</span>
                  </td>
                  <td>Jan 19 2017</td>
                  <td>$ 3,937</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-warning f-12 text-white"
                    >
                      Not Active
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar3}
                      alt="activity-user"
                    />
                  </td>
                  <td>
                    <h6 className="mb-1">Instagram</h6>
                    <p className="m-0">Microsoft</p>
                  </td>
                  <td>
                    <p className="mb-1">5.877</p>
                    <span className="text-c-green m-0">+ 12 Daily</span>
                  </td>
                  <td>Aug 04 2017</td>
                  <td>$ 28,039</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-success f-12 text-white"
                    >
                      Paused
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar2}
                      alt="activity-user"
                    />
                  </td>
                  <td>
                    <h6 className="mb-1">Facebook</h6>
                    <p className="m-0">Apple</p>
                  </td>
                  <td>
                    <p className="mb-1">523.423</p>
                    <span className="text-c-green m-0">+ 50 Daily</span>
                  </td>
                  <td>April 10 2017</td>
                  <td>$ 16,244</td>
                  <td>
                    <Link
                      to="#"
                      className="text-white label label-primary f-12"
                    >
                      Active
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      className="rounded-circle"
                      style={{ width: "40px" }}
                      src={avatar1}
                      alt="activity-user"
                    />
                  </td>
                  <td>
                    <h6 className="mb-1">Twitter</h6>
                    <p className="m-0">CS Form</p>
                  </td>
                  <td>
                    <p className="mb-1">7.239</p>
                    <span className="text-c-yellow m-0">+ 5 Daily</span>
                  </td>
                  <td>May 20 2018</td>
                  <td>$ 3,937</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-warning f-12 text-white"
                    >
                      Not Active
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard
            title="Full Width Table"
            cardClass="table-card"
            bodyClass="pb-0"
            isScroll="full-scroll"
            scrollHeight="375px"
            isOption
          >
            <Table className="table-hover" responsive>
              <thead>
                <tr>
                  <th>Id Number</th>
                  <th>Code</th>
                  <th>Date</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th className="text-right">Ratings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#467</td>
                  <td>8765482</td>
                  <td>November 14, 2017</td>
                  <td>$ 874.23</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-primary f-12 text-white"
                    >
                      Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>#466</td>
                  <td>2366482</td>
                  <td>January 10, 2018</td>
                  <td>$ 235.34</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-warning f-12 text-white"
                    >
                      Not Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>#465</td>
                  <td>8832638</td>
                  <td>October 14, 2017</td>
                  <td>$ 233.46</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-success f-12 text-white"
                    >
                      Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>#464</td>
                  <td>9632638</td>
                  <td>December 17, 2017</td>
                  <td>$ 133.46</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-primary f-12 text-white"
                    >
                      Not Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>#463</td>
                  <td>3332538</td>
                  <td>July 14, 2017</td>
                  <td>$ 244.46</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-warning f-12 text-white"
                    >
                      Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>#467</td>
                  <td>8765482</td>
                  <td>November 14, 2017</td>
                  <td>$ 874.23</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-primary f-12 text-white"
                    >
                      Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>#789</td>
                  <td>2378945</td>
                  <td>April 16, 2018</td>
                  <td>$ 235.34</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-warning f-12 text-white"
                    >
                      Not Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>{" "}
                  </td>
                </tr>
                <tr>
                  <td>#789</td>
                  <td>3789645</td>
                  <td>July 7, 2018</td>
                  <td>$ 244.46</td>
                  <td>
                    <Link
                      to="#"
                      className="label label-success f-12 text-white"
                    >
                      Active
                    </Link>
                  </td>
                  <td className="text-right">
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-c-yellow"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>
                    <Link to="#">
                      <FontAwesomeIcon
                        icon={["far", "star"]}
                        className="f-14 text-muted"
                      />
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>
          </MainCard>
        </Col>
        <Col sm={12}>
          <MainCard
          title="Recent Users"
          cardClass="table-card"
            headerClass="borderless"
            bodyClass="p-0"
            isScroll="recent-scroll"
            scrollHeight="384px"
            isOption
          >
            <Table className="table-hover" responsive>
            <tbody>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar1} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Isabella Christensen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                    <h6 className="text-muted">

                      <FontAwesomeIcon icon="circle" className="text-c-green f-10 m-r-15" />11 Sep 12:56</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-primary text-white f-12">Reject</Link><Link to="#" className="label label-success text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar2} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Mathilde Andersen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><FontAwesomeIcon icon="circle" className="text-c-red f-10 m-r-15" />11 May 10:35</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-danger text-white f-12">Reject</Link><Link to="#" className="label label-warning text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar3} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Karla Sorensen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><FontAwesomeIcon icon="circle" className="text-c-green f-10 m-r-15" />9 Feb 17:38</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-primary text-white f-12">Reject</Link><Link to="#" className="label label-success text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar1} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Ida Jorgensen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><FontAwesomeIcon icon="circle" className="text-c-red f-10 m-r-15" />19 May 12:56</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-danger text-white f-12">Reject</Link><Link to="#" className="label label-warning text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar2} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Albert Andersen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><FontAwesomeIcon icon="circle" className="text-c-green f-10 m-r-15" />21 July 12:56</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-primary text-white f-12">Reject</Link><Link to="#" className="label label-success text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar2} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Mathilde Andersen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><FontAwesomeIcon icon="circle" className="text-c-red f-10 m-r-15" />11 May 10:35</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-danger text-white f-12">Reject</Link><Link to="#" className="label label-warning text-white f-12">Approve</Link></td>
                                                        </tr>
                                                        <tr>
                                                            <td><img className="rounded-circle" style={{width:"40px"}} src={avatar1} alt="activity-user" /></td>
                                                            <td>
                                                                <h6 className="mb-1">Isabella Christensen</h6>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                            </td>
                                                            <td>
                                                                <h6 className="text-muted"><FontAwesomeIcon icon="circle" className="text-c-green f-10 m-r-15" />11 Jan 12:56</h6>
                                                            </td>
                                                            <td><Link to="#" className="label label-primary text-white f-12">Reject</Link><Link to="#" className="label label-success text-white f-12">Approve</Link></td>
                                                        </tr>
                                                    </tbody>
            </Table>
        </MainCard>
        </Col>
      </Row>
    );
  }
}

export default DataWidget;
