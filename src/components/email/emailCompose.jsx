import React, { Component } from "react";
import { Form, Input, Label, Button, FormGroup, Row, Col } from "reactstrap";
import { Editor } from "@tinymce/tinymce-react";

class EmailCompose extends Component {
  render() {
    return (
      <div className="mail-body-content">
        <Form className="form-material" onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for="exampleInputEmail1">To</Label>
            <Input
              type="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleInputEmail2">Cc</Label>
                  <Input
                    type="email"
                    id="exampleInputEmail2"
                    placeholder="Enter email"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleInputEmail3">Bcc</Label>
                  <Input
                    type="email"
                    id="exampleInputEmail3"
                    placeholder="Enter email"
                  />
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label for="exampleInputEmail4">Subject</Label>
            <Input type="text" id="exampleInputEmail4" placeholder="Subject" />
          </FormGroup>
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
          <div className="float-right mt-3">
            <Button>Save as draft</Button>
            <Button color="primary">Send</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default EmailCompose;
