import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import Cropper from "react-cropper";
import previewImage from "../../assets/images/light-box/l1.jpg";
import "cropperjs/dist/cropper.css";

class ImageCropper extends Component {
  constructor(props) {
    super(props);
    this.crop = this.crop.bind(this);
    this.state = {
      image: previewImage,
      dataX: "",
      dataY: "",
      dataHeight: "",
      dataWidth: "",
      dataRotate: "",
      dataScaleX: "",
      dataScaleY: ""
    };
  }
  crop(event) {
    let dataUrl = this.refs.myRef.getCroppedCanvas().toDataURL();
    this.setState({
      image: dataUrl,
      dataX: Math.round(event.detail.x),
      dataY: Math.round(event.detail.y),
      dataHeight: Math.round(event.detail.height),
      dataWidth: Math.round(event.detail.width),
      dataRotate: Math.round(event.detail.rotate),
      dataScaleX: Math.round(event.detail.scaleX),
      dataScaleY: Math.round(event.detail.scaleY)
    });
  }
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Image Cropper Plugin</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={9}>
                  <div className="m-b-4">
                    <Cropper
                      ref="myRef"
                      src={previewImage}
                      style={{ height: 420, width: "100%" }}
                      // Cropper.js options
                      aspectRatio={16 / 9}
                      guides={true}
                      crop={this.crop}
                    />
                  </div>
                </Col>
                <Col md={3}>
                  <div className="docs-preview clearfix">
                    <div className="img-preview preview-md">
                      <img src={this.state.image} alt="s" />
                    </div>
                    <div className="img-preview preview-sm">
                      <img src={this.state.image} alt="s" />
                    </div>
                    <div className="img-preview preview-xs">
                      <img src={this.state.image} alt="s" />
                    </div>
                  </div>
                  <div className="docs-data">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">X</InputGroupAddon>
                      <Input type="text" value={this.state.dataX} readOnly />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">Y</InputGroupAddon>
                      <Input type="text" value={this.state.dataY} readOnly />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        width
                      </InputGroupAddon>
                      <Input
                        type="text"
                        value={this.state.dataWidth}
                        readOnly
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        height
                      </InputGroupAddon>
                      <Input
                        type="text"
                        value={this.state.dataHeight}
                        readOnly
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        Rotate
                      </InputGroupAddon>
                      <Input
                        type="text"
                        value={this.state.dataRotate}
                        readOnly
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        ScaleX
                      </InputGroupAddon>
                      <Input
                        type="text"
                        value={this.state.dataScaleX}
                        readOnly
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        ScaleY
                      </InputGroupAddon>
                      <Input
                        type="text"
                        value={this.state.dataScaleY}
                        readOnly
                      />
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ImageCropper;
