import React, { Component, Fragment, createRef } from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Tooltip,
} from "reactstrap"

class Items extends Component {
  constructor(props) {
    super(props)
    this.myRef = createRef()
    this.toggle = this.toggle.bind(this)
    this.state = {
      tooltipOpen: false,
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    })
  }
  render() {
    return (
      <Fragment>
        <span
          id={this.props.id}
          className={`hei-75 wid-75 bg-light d-inline-block mr-2 ${
            this.props.border
          }`}
        />
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target={this.props.id}
          toggle={this.toggle}
        >
          {this.props.border}
        </Tooltip>
      </Fragment>
    )
  }
}

class ExtraUi extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>
                Border <Badge color="danger">NEW</Badge>
              </h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm={12}>
                  <h5>Border color</h5>
                  <hr />
                  <Items id="b1" border="border border-primary" />
                  <Items id="b2" border="border border-secondary" />
                  <Items id="b3" border="border border-success" />
                  <Items id="b4" border="border border-danger" />
                  <Items id="b5" border="border border-warning" />
                  <Items id="b6" border="border border-info" />
                  <Items id="b7" border="border border-light" />
                  <Items id="b8" border="border border-dark" />
                  <Items id="b9" border="border border-white" />
                </Col>
                <Col md={6} className="additive">
                  <h5 className="mt-5">Additive</h5>
                  <hr />
                  <Items id="b10" border="border" />
                  <Items id="b11" border="border-top" />
                  <Items id="b12" border="border-right" />
                  <Items id="b13" border="border-bottom" />
                  <Items id="b14" border="border-left" />
                </Col>
                <Col md={6}>
                  <h5 className="mt-5">Subtractive</h5>
                  <hr />
                  <Items id="b15" border="border border-0" />
                  <Items id="b16" border="border border-top-0" />
                  <Items id="b17" border="border border-right-0" />
                  <Items id="b18" border="border border-bottom-0" />
                  <Items id="b19" border="border border-left-0" />
                </Col>
                <Col sm={12}>
                  <h5 className="mt-5">Border-radius</h5>
                  <hr />
                  <Items id="b20" border="border border-secondary rounded" />
                  <Items
                    id="b21"
                    border="border border-secondary rounded-top"
                  />
                  <Items
                    id="b22"
                    border="border border-secondary rounded-right"
                  />
                  <Items
                    id="b23"
                    border="border border-secondary rounded-bottom"
                  />
                  <Items
                    id="b24"
                    border="border border-secondary rounded-left"
                  />
                  <Items
                    id="b25"
                    border="border border-secondary rounded-circle"
                  />
                  <Items
                    id="b26"
                    border="border border-secondary rounded-pill"
                  />
                  <Items id="b27" border="border border-secondary rounded-0" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Shadows</h5>
            </CardHeader>
            <CardBody>
              <div className="shadow-none p-3 mb-5 bg-light rounded">
                No shadow
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                Small shadow
              </div>
              <div className="shadow p-3 mb-5 bg-white rounded">
                Regular shadow
              </div>
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                Larger shadow
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Embeds</h5>
            </CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col md={8}>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="Ration 21by9"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/IkyZHPnfFnE?rel=0"
                      allowFullScreen
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Aspect Ratios</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6}>
                  <h5 className="mt-5">Aspect Ratios 21 by 9</h5>
                  <hr />
                  <div className="embed-responsive embed-responsive-21by9">
                    <iframe
                      title="Ratios 21by9"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/IkyZHPnfFnE?rel=0"
                      allowFullScreen
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="mt-5">Aspect Ratios 16 by 9</h5>
                  <hr />
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      title="Ratios 16by9"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/IkyZHPnfFnE?rel=0"
                      allowFullScreen
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="mt-5">Aspect Ratios 4 by 3</h5>
                  <hr />
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe
                      title="Ratios 4by3"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/IkyZHPnfFnE?rel=0"
                      allowFullScreen
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <h5 className="mt-5">Aspect Ratios 1 by 1</h5>
                  <hr />
                  <div className="embed-responsive embed-responsive-1by1">
                    <iframe
                      title="Ratios 1by1"
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/IkyZHPnfFnE?rel=0"
                      allowFullScreen
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default ExtraUi
