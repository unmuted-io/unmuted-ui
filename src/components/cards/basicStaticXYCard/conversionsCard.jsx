import React, { Component } from "react"
import { Card, CardHeader, CardBody } from "reactstrap"
import ConversionsStaics from "../../amChart/staticsXYChart/conversionsStatics"

class ConversionsCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h5>Product manufacturing completion by Region</h5>
        </CardHeader>
        <CardBody>
          <ConversionsStaics height="400px" />
        </CardBody>
      </Card>
    )
  }
}

export default ConversionsCard
