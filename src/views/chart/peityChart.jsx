import React, { Component } from "react"
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap"
import { Line } from "peity-react"

class PeityChart extends Component {
  state = {
    width: 50,
  }
  constructor(props) {
    super(props)
    this._element = React.createRef()
  }

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener("resize", this.handleWindowResize)
  }

  handleWindowResize = () => {
    this.setState({ width: this._element.current.clientWidth })
  }
  render() {
    return (
      <Row>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Updating Chart 1</h5>
            </CardHeader>
            <CardBody>
              <div ref={this._element}>
                <Line
                  values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                  fill="rgba(51, 219, 158, 0.32)"
                  stroke="rgb(240, 70, 107)"
                  height={250}
                  width={this.state.width}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Line Chart 1</h5>
            </CardHeader>
            <CardBody>
              <div ref={this._element}>
                <Line
                  values={[5, 3, 2, -1, -3, -2, 2, 3, 5, 2]}
                  fill="rgba(79, 195, 247, 0.45)"
                  stroke="rgba(79, 195, 247, 0.91)"
                  height={250}
                  width={this.state.width}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={4} md={6}>
          <Card>
            <CardHeader>
              <h5>Line Chart 2</h5>
            </CardHeader>
            <CardBody>
              <div ref={this._element}>
                <Line
                  values={[0, -3, -6, -4, -5, -4, -7, -3, -5, -2]}
                  fill="rgba(79, 195, 247, 0.45)"
                  stroke="rgba(79, 195, 247, 0.91)"
                  height={250}
                  width={this.state.width}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default PeityChart
