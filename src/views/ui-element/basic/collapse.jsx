// import external modules
import React, { Component } from "react"
import { Row, Col, Card, CardBody, CardHeader, Collapse } from "reactstrap"
import { Link } from "react-router-dom"

// import internal(own) modules
import BasicCollapse from "./example/collapse/basicCollapse"

class Collapses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accordion: 1,
      setting: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle(v) {
    this.setState(prevState => ({
      accordion: prevState.accordion !== v ? v : 0,
    }))
  }
  render() {
    const { accordion } = this.state
    const Accordion = ({ id, title, children }) => (
      <Card>
        <CardHeader
          className={accordion === id ? "active" : ""}
          onClick={() => this.toggle(id)}
        >
          <h5 className="mb-0">
            <Link to="#">{title}</Link>
          </h5>
        </CardHeader>
        <Collapse isOpen={accordion === id}>
          <CardBody>{children}</CardBody>
        </Collapse>
      </Card>
    )
    return (
      <Row>
        <Col sm="12">
          <h5 className="mb-3">Basic Collapse</h5>
          <hr />
          <BasicCollapse />
        </Col>
        <Col sm={12}>
          <h5 className="mb-3">Accordion Example</h5>
          <Accordion id="1" title="Collapsible Group Item #1">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Accordion>
          <Accordion id="2" title="Collapsible Group Item #2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Accordion>
          <Accordion id="3" title="Collapsible Group Item #3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </Accordion>
        </Col>
      </Row>
    )
  }
}

export default Collapses
