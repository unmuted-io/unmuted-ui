import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { Editor } from "@tinymce/tinymce-react";

class TinymceEditor extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Tinymce Editor</h5>
            </CardHeader>
            <CardBody>
              <Editor
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                  height: 200,
                  theme: "modern",
                  plugins:
                    "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                  toolbar1:
                    "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
                  toolbar2:
                    "print preview media | forecolor backcolor emoticons | codesample",
                  image_advtab: true
                }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default TinymceEditor;
