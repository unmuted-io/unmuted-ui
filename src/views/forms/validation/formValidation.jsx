import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Input,
  FormGroup,
  Label,
  Form,
  CustomInput,
  Button,
  FormFeedback
} from "reactstrap";

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.changeHandelar = this.changeHandelar.bind(this);
    this.state = {
      email: false,
      password: false,
      conpassword: false,
      required: false,
      url: false,
      phone: false,
      selects: false,
      texts: false,
      files: false,
      switchCheck: false,
      radiocheck1: false,
      radiocheck2: false,
      checkbox1: false,
      checkbox2: false,
      passValue: ""
    };
  }
  changeHandelar(e) {
    let { name, value } = e.target;
    let emailValue;
    switch (name) {
      case "email": {
        emailValue = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (emailValue) {
          this.setState({ email: false });
        } else {
          this.setState({ email: true });
        }
        break;
      }
      case "password": {
        value.length > 5
          ? this.setState({ password: false, passValue: value })
          : this.setState({ password: true });
        break;
      }
      case "conpassword": {
        if (this.state.passValue === value && value !== "") {
          this.setState({ conpassword: false });
        } else {
          this.setState({ conpassword: true });
        }
        break;
      }
      case "required": {
        value !== ""
          ? this.setState({ required: false })
          : this.setState({ required: true });
        break;
      }
      case "url": {
        value !== ""
          ? this.setState({ url: false })
          : this.setState({ url: true });
        break;
      }
      case "phone": {
        value !== ""
          ? this.setState({ phone: false })
          : this.setState({ phone: true });
        break;
      }
      case "selects": {
        value !== ""
          ? this.setState({ selects: false })
          : this.setState({ selects: true });
        break;
      }
      case "texts": {
        value !== ""
          ? this.setState({ texts: false })
          : this.setState({ texts: true });
        break;
      }
      case "files": {
        value !== ""
          ? this.setState({ files: false })
          : this.setState({ files: true });
        break;
      }
      case "switchCheck": {
        value !== "" && this.setState({ switchCheck: !this.state.switchCheck });
        break;
      }
      case "radiocheck1": {
        this.setState({ radiocheck1: false });
        break;
      }
      case "radiocheck2": {
        this.setState({ radiocheck2: false });
        break;
      }
      case "checkbox1": {
        value !== "" && this.setState({ checkbox1: !this.state.checkbox1 });
        break;
      }
      case "checkbox2": {
        value !== "" && this.setState({ checkbox2: !this.state.checkbox2 });
        break;
      }

      default:
        break;
    }
  }
  render() {
    let email,
      password,
      conpassword,
      required,
      url,
      phone,
      selects,
      texts,
      files,
      switchCheck,
      radiocheck1,
      radiocheck2,
      checkbox1,
      checkbox2;
    return (
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h5>Form Validation</h5>
            </CardHeader>
            <CardBody>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                  const emailValue = email.value.match(
                    /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
                  );
                  if (emailValue) {
                    this.setState({ email: false });
                  } else {
                    this.setState({ email: true });
                  }
                  password.value.length > 5
                    ? this.setState({ password: false })
                    : this.setState({ password: true });
                  password.value === conpassword.value &&
                  conpassword.value !== ""
                    ? this.setState({ conpassword: false })
                    : this.setState({ conpassword: true });
                  required.value !== ""
                    ? this.setState({ required: false })
                    : this.setState({ required: true });
                  url.value !== ""
                    ? this.setState({ url: false })
                    : this.setState({ url: true });
                  phone.value !== ""
                    ? this.setState({ phone: false })
                    : this.setState({ phone: true });
                  selects.value !== ""
                    ? this.setState({ selects: false })
                    : this.setState({ selects: true });
                  texts.value !== ""
                    ? this.setState({ texts: false })
                    : this.setState({ texts: true });
                  files.value !== ""
                    ? this.setState({ files: false })
                    : this.setState({ files: true });
                  switchCheck.value !== "" &&
                    this.setState({ switchCheck: !this.state.switchCheck });
                  radiocheck1.value !== "" &&
                    this.setState({ radiocheck1: !this.state.radiocheck1 });
                  radiocheck2.value !== "" &&
                    this.setState({ radiocheck2: !this.state.radiocheck2 });
                  checkbox1.value !== "" &&
                    this.setState({ checkbox1: !this.state.checkbox1 });
                  checkbox2.value !== "" &&
                    this.setState({ checkbox2: !this.state.checkbox2 });
                }}
              >
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        innerRef={node => (email = node)}
                        invalid={this.state.email}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Password</Label>
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        innerRef={node => (password = node)}
                        invalid={this.state.password}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Confirm password</Label>
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        name="conpassword"
                        innerRef={node => (conpassword = node)}
                        invalid={this.state.conpassword}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Required</Label>
                      <Input
                        type="text"
                        placeholder="Required"
                        name="required"
                        innerRef={node => (required = node)}
                        invalid={this.state.required}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>URL</Label>
                      <Input
                        type="text"
                        placeholder="Url"
                        name="url"
                        innerRef={node => (url = node)}
                        invalid={this.state.url}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Phone</Label>
                      <Input
                        type="text"
                        placeholder="Phone (999) 999-9999"
                        name="phone"
                        innerRef={node => (phone = node)}
                        invalid={this.state.phone}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Select</Label>
                      <Input
                        type="select"
                        name="selects"
                        innerRef={node => (selects = node)}
                        invalid={this.state.selects}
                        onChange={this.changeHandelar}
                      >
                        <option value="">Select gear...</option>
                        <optgroup label="Climbing">
                          <option value="pitons">Pitons</option>
                          <option value="cams">Cams</option>
                          <option value="nuts">Nuts</option>
                          <option value="bolts">Bolts</option>
                          <option value="stoppers">Stoppers</option>
                          <option value="sling">Sling</option>
                        </optgroup>
                        <optgroup label="Skiing">
                          <option value="skis">Skis</option>
                          <option value="skins">Skins</option>
                          <option value="poles">Poles</option>
                        </optgroup>
                      </Input>
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Text</Label>
                      <Input
                        type="textarea"
                        name="texts"
                        innerRef={node => (texts = node)}
                        invalid={this.state.texts}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>File</Label>
                      <Input
                        type="file"
                        name="files"
                        innerRef={node => (files = node)}
                        invalid={this.state.files}
                        onChange={this.changeHandelar}
                      />
                      <FormFeedback>This field is required.</FormFeedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <div className="switch d-inline m-r-10">
                        <Input
                          type="checkbox"
                          className="switcher-input"
                          id="switch-1"
                          name="switchCheck"
                          innerRef={node => (switchCheck = node)}
                          invalid={this.state.switchCheck}
                          onChange={this.changeHandelar}
                        />
                        <Label for="switch-1" className="cr" />
                        <Label className="m-l-10">Check me</Label>
                        <FormFeedback>This field is required.</FormFeedback>
                      </div>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Radios</Label>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="radiocheck1"
                            innerRef={node => (radiocheck1 = node)}
                            invalid={this.state.radiocheck1}
                            onChange={this.changeHandelar}
                          />
                          Option one is this and that—be sure to include why
                          it's great
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="radiocheck1"
                            innerRef={node => (radiocheck1 = node)}
                            invalid={this.state.radiocheck1}
                            onChange={this.changeHandelar}
                          />
                          Option two can be something else and selecting it will
                          deselect option one
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="radiocheck1"
                            innerRef={node => (radiocheck1 = node)}
                            invalid={this.state.radiocheck1}
                          />
                          Option three is disabled
                          <FormFeedback>This field is required.</FormFeedback>
                        </Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Custom radios</Label>
                      <CustomInput
                        type="radio"
                        id="customRadio1"
                        name="radiocheck2"
                        innerRef={node => (radiocheck2 = node)}
                        invalid={this.state.radiocheck2}
                        onChange={this.changeHandelar}
                        label="Option one is this and that—be sure to include why it's great"
                      />
                      <CustomInput
                        type="radio"
                        id="customRadio2"
                        name="radiocheck2"
                        innerRef={node => (radiocheck2 = node)}
                        invalid={this.state.radiocheck2}
                        label="Option two can be something else and selecting it will deselect option one"
                      />
                      <CustomInput
                        type="radio"
                        id="customRadio3"
                        name="radiocheck2"
                        innerRef={node => (radiocheck2 = node)}
                        invalid={this.state.radiocheck2}
                        onChange={this.changeHandelar}
                        label="Option three is disabled"
                        children={
                          <FormFeedback>This field is required.</FormFeedback>
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Checkbox</Label>
                      <FormGroup check>
                        <Input
                          type="checkbox"
                          id="exampleCheck1"
                          name="checkbox1"
                          innerRef={node => (checkbox1 = node)}
                          invalid={this.state.checkbox1}
                          onChange={this.changeHandelar}
                        />
                        <Label for="exampleCheck1" check>
                          Check me out
                        </Label>
                        <FormFeedback>This field is required.</FormFeedback>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Custom checkbox</Label>
                      <CustomInput
                        type="checkbox"
                        id="customCheck1"
                        label="Check me"
                        name="checkbox2"
                        innerRef={node => (checkbox2 = node)}
                        invalid={this.state.checkbox2}
                        onChange={this.changeHandelar}
                        children={
                          <FormFeedback>This field is required.</FormFeedback>
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="text"
                        className="form-control mob_no"
                        data-mask="9999-999-999"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FormValidation;
