import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import DropzoneComponent from "react-dropzone-component";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.djsConfig = {
      addRemoveLinks: false,
      acceptedFiles: "image/jpeg,image/png,image/gif",
      autoProcessQueue: false,
      uploadprogress: 100
    };
    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "no-url"
    };
    this.handleFileAdded = this.handleFileAdded.bind(this);
  }
  handleFileAdded(file) {
    console.log(file);
  }
  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h5>File Upload</h5>
            </CardHeader>
            <CardBody>
              <DropzoneComponent
                config={this.componentConfig}
                djsConfig={this.djsConfig}
                eventHandlers={this.handleFileAdded}
              />
              <div className="text-center m-t-20">
                <Button color="primary">Upload Now</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FileUpload;
