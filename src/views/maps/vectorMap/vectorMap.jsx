import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { VectorMap } from "react-jvectormap";

class StaticVectorMap extends Component {
  render() {
    return (
      <Row>
        <Col md={6} sm={12}>
          <Card>
            <CardHeader>
              <h5>Basic Map with Markers</h5>
            </CardHeader>
            <CardBody>
              <div style={{ height: "400px" }}>
                <VectorMap
                  map={"world_mill"}
                  scaleColors={["#2196F3", "#1B8BF9"]}
                  normalizeFunction="polynomial"
                  hoverOpacity={0.7}
                  hoverColor="!1"
                  regionStyle={{
                    initial: {
                      fill: "#EC407A"
                    }
                  }}
                  ref="map"
                  containerStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  containerClassName="set-map"
                  markerStyle={{
                    initial: {
                      r: 9,
                      fill: "#2196F3",
                      "fill-opacity": 0.9,
                      stroke: "#fff",
                      "stroke-width": 7,
                      "stroke-opacity": 0.4
                    },
                    hover: {
                      stroke: "#fff",
                      "fill-opacity": 1,
                      "stroke-width": 1.5
                    }
                  }}
                  backgroundColor="transparent"
                  markers={[
                    {
                      latLng: [41.9, 12.45],
                      name: "Vatican City"
                    },
                    {
                      latLng: [43.73, 7.41],
                      name: "Monaco"
                    },
                    {
                      latLng: [-0.52, 166.93],
                      name: "Nauru"
                    },
                    {
                      latLng: [-8.51, 179.21],
                      name: "Tuvalu"
                    },
                    {
                      latLng: [43.93, 12.46],
                      name: "San Marino"
                    },
                    {
                      latLng: [47.14, 9.52],
                      name: "Liechtenstein"
                    },
                    {
                      latLng: [7.11, 171.06],
                      name: "Marshall Islands"
                    },
                    {
                      latLng: [17.3, -62.73],
                      name: "Saint Kitts and Nevis"
                    },
                    {
                      latLng: [3.2, 73.22],
                      name: "Maldives"
                    },
                    {
                      latLng: [35.88, 14.5],
                      name: "Malta"
                    },
                    {
                      latLng: [12.05, -61.75],
                      name: "Grenada"
                    },
                    {
                      latLng: [13.16, -61.23],
                      name: "Saint Vincent and the Grenadines"
                    },
                    {
                      latLng: [13.16, -59.55],
                      name: "Barbados"
                    },
                    {
                      latLng: [17.11, -61.85],
                      name: "Antigua and Barbuda"
                    },
                    {
                      latLng: [-4.61, 55.45],
                      name: "Seychelles"
                    },
                    {
                      latLng: [7.35, 134.46],
                      name: "Palau"
                    },
                    {
                      latLng: [42.5, 1.51],
                      name: "Andorra"
                    },
                    {
                      latLng: [14.01, -60.98],
                      name: "Saint Lucia"
                    },
                    {
                      latLng: [6.91, 158.18],
                      name: "Federated States of Micronesia"
                    },
                    {
                      latLng: [1.3, 103.8],
                      name: "Singapore"
                    },
                    {
                      latLng: [1.46, 173.03],
                      name: "Kiribati"
                    },
                    {
                      latLng: [-21.13, -175.2],
                      name: "Tonga"
                    },
                    {
                      latLng: [15.3, -61.38],
                      name: "Dominica"
                    },
                    {
                      latLng: [-20.2, 57.5],
                      name: "Mauritius"
                    },
                    {
                      latLng: [26.02, 50.55],
                      name: "Bahrain"
                    },
                    {
                      latLng: [0.33, 6.73],
                      name: "São Tomé and Príncipe"
                    }
                  ]}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <CardHeader>
              <h5>Brazil Map</h5>
            </CardHeader>
            <CardBody>
              <div style={{ height: "400px" }}>
                <VectorMap
                  map={"brazil"}
                  ref="map"
                  backgroundColor="transparent"
                  containerStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  containerClassName="set-map"
                  regionStyle={{
                    initial: {
                      fill: "#1B8BF9"
                    }
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <CardHeader>
              <h5>Asia Map</h5>
            </CardHeader>
            <CardBody>
              <div style={{ height: "400px" }}>
                <VectorMap
                  map={"asia_mill"}
                  ref="map"
                  backgroundColor="transparent"
                  containerStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  containerClassName="set-map"
                  regionStyle={{
                    initial: {
                      fill: "#4DB6AC"
                    }
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <CardHeader>
              <h5>Europe Map</h5>
            </CardHeader>
            <CardBody>
              <div style={{ height: "400px" }}>
                <VectorMap
                  map={"europe_mill"}
                  ref="map"
                  backgroundColor="transparent"
                  containerStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  containerClassName="set-map"
                  regionStyle={{
                    initial: {
                      fill: "#81c868"
                    }
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <CardHeader>
              <h5>Canada Map</h5>
            </CardHeader>
            <CardBody>
              <div style={{ height: "400px" }}>
                <VectorMap
                  map={"north_america_mill"}
                  ref="map"
                  backgroundColor="transparent"
                  containerStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  containerClassName="set-map"
                  regionStyle={{
                    initial: {
                      fill: "#18FFFF"
                    }
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={6} sm={12}>
          <Card>
            <CardHeader>
              <h5>USA Map</h5>
            </CardHeader>
            <CardBody>
              <div style={{ height: "400px" }}>
                <VectorMap
                  map={"us_aea"}
                  ref="map"
                  backgroundColor="transparent"
                  containerStyle={{
                    width: "100%",
                    height: "100%"
                  }}
                  containerClassName="set-map"
                  regionStyle={{
                    initial: {
                      fill: "#CDDC39"
                    }
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default StaticVectorMap;
