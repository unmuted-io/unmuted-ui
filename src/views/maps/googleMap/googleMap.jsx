import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  InputGroup,
  InputGroupAddon,
  Button,
  Input
} from "reactstrap";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

class GoogleMap extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    position: null
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  componentDidMount() {
    this.renderAutoComplete();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();
  }

  renderAutoComplete() {
    const { google, map } = this.props;

    if (!google || !map) return;

    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    autocomplete.bindTo("bounds", map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      if (place.geometry.viewport) map.fitBounds(place.geometry.viewport);
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      this.setState({ position: place.geometry.location });
    });
  }

  render() {
    const { position } = this.state;
    return (
      <Row>
        <Col lg={12} xl={6}>
          <Card>
            <CardHeader>
              <h5>Basic</h5>
              <span className="d-block m-t-5">
                Map shows places around the world
              </span>
            </CardHeader>
            <CardBody>
              <div
                style={{ height: "300px", width: "100%", position: "relative" }}
              >
                <Map
                  centerAroundCurrentLocation
                  google={this.props.google}
                  className="map"
                  zoom={13}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12} xl={6}>
          <Card>
            <CardHeader>
              <h5>Markers</h5>
              <span className="d-block m-t-5">
                Maps shows <code>location</code> of the place
              </span>
            </CardHeader>
            <CardBody>
              <div
                style={{ height: "300px", width: "100%", position: "relative" }}
              >
                <Map
                  centerAroundCurrentLocation
                  google={this.props.google}
                  className="map"
                  zoom={13}
                >
                  <Marker
                    name="Ariful Islam"
                    position={{ lat: 21.2335163, lng: 72.8643298 }}
                  />
                  <Marker
                    name="phoenix coded"
                    position={{ lat: 21.2148165, lng: 72.8627243 }}
                  />
                  <Marker />
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12} xl={6}>
          <Card>
            <CardHeader>
              <h5>Geo-Coding</h5>
              <span className="d-block m-t-5">Search your location</span>
            </CardHeader>
            <CardBody>
              <Form className="mb-3" onSubmit={this.onSubmit}>
                <InputGroup>
                  <Input
                    ref={ref => (this.autocomplete = ref)}
                    type="text"
                    placeholder="Write Your place"
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="primary">Search location</Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
              <div
                style={{ height: "300px", width: "100%", position: "relative" }}
              >
                <Map
                  className="map"
                  {...this.props}
                  center={position}
                  centerAroundCurrentLocation
                >
                  <Marker position={position} />
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12} xl={6}>
          <Card>
            <CardHeader>
              <h5>Click-Able Markers</h5>
              <span className="d-block m-t-5">
                Maps shows on click of the place
              </span>
            </CardHeader>
            <CardBody>
              <div
                style={{ height: "300px", width: "100%", position: "relative" }}
              >
                <Map
                  centerAroundCurrentLocation
                  className="map"
                  google={this.props.google}
                  onClick={this.onMapClicked}
                  zoom={12}
                >
                  <Marker
                    name="Codedthemes"
                    position={{ lat: 21.2335163, lng: 72.8643298 }}
                    onClick={this.onMarkerClick}
                  />

                  <Marker
                    name="Roman Point"
                    position={{ lat: 21.2148165, lng: 72.8627243 }}
                    onClick={this.onMarkerClick}
                  />

                  <Marker
                    name="Current Location"
                    onClick={this.onMarkerClick}
                  />

                  <InfoWindow
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={this.state.showingInfoWindow}
                  >
                    <div>
                      <h3>{this.state.selectedPlace.name}</h3>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
})(GoogleMap);
