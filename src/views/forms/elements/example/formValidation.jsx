import React, { Component, Fragment } from "react";
import { Form, CustomInput, FormGroup, FormFeedback } from "reactstrap";

import FormValidationToltip from "./formValidationToltip";
import FormValidationText from "./formValidationText";

class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.changeHandeler = this.changeHandeler.bind(this);
    this.state = {
      checkbox1: false,
      radiobutton1: false,
      selects: false,
      filecheck: false
    };
  }
  changeHandeler(e) {
    const { name, value } = e.target;
    switch (name) {
      case "checkbox1":
        this.setState({ checkbox1: !this.state.checkbox1 });
        break;
      case "customRadio3":
        this.setState({ radiobutton1: true });
        break;
      case "selects":
        value > 0 || value !== ""
          ? this.setState({ selects: true })
          : this.setState({ selects: false });
        break;
      case "filecheck":
        value !== ""
          ? this.setState({ filecheck: true })
          : this.setState({ filecheck: false });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Fragment>
        <FormValidationText />
        <h5 className="mt-5">Supported Elements</h5>
        <hr />
        <Form onSubmit={e => e.preventDefault()}>
          <CustomInput
            onChange={this.changeHandeler}
            valid={this.state.checkbox1}
            invalid={!this.state.checkbox1}
            defaultChecked={this.state.checkbox1}
            className="mb-3"
            name="checkbox1"
            type="checkbox"
            id="exampleCustomCheckbox"
            label="Check this custom checkbox"
            children={
              <FormFeedback>Example invalid feedback text</FormFeedback>
            }
          />
          <CustomInput
            type="radio"
            id="customRadio5"
            name="customRadio3"
            onChange={this.changeHandeler}
            valid={this.state.radiobutton1}
            invalid={!this.state.radiobutton1}
            label="Toggle this custom radio"
          />
          <CustomInput
            onChange={this.changeHandeler}
            valid={this.state.radiobutton1}
            invalid={!this.state.radiobutton1}
            className="mb-3"
            type="radio"
            id="customRadio6"
            name="customRadio3"
            label="or Toggle this custom radio"
            children={
              <FormFeedback>More example invalid feedback text</FormFeedback>
            }
          />
          <FormGroup>
            <CustomInput
              type="select"
              onChange={this.changeHandeler}
              name="selects"
              id="exampleCustomselect"
              valid={this.state.selects}
              invalid={!this.state.selects}
            >
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CustomInput>
            <FormFeedback>Example invalid custom select feedback</FormFeedback>
          </FormGroup>
          <CustomInput
            onChange={this.changeHandeler}
            valid={this.state.filecheck}
            invalid={!this.state.filecheck}
            className="mb-3"
            type="file"
            id="customfilecheck"
            name="filecheck"
            label="Choose file..."
            children={
              <FormFeedback>Example invalid custom file feedback</FormFeedback>
            }
          />
        </Form>
        <FormValidationToltip />
      </Fragment>
    );
  }
}

export default FormValidation;
