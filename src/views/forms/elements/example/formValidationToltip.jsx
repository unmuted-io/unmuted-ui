import React, { Component, Fragment } from "react";
import {
  Form,
  Input,
  InputGroup,
  FormGroup,
  Label,
  Col,
  Button,
  FormFeedback,
  InputGroupAddon
} from "reactstrap";

class FormValidationToltip extends Component {
  constructor(props) {
    super(props);
    this.formValidation = this.formValidation.bind(this);
    this.state = {
      checkboxl: null,
      firstNameV: null,
      lastNameV: null,
      userNameV: null,
      cityV: null,
      stateV: null,
      zipV: null
    };
  }
  formValidation(e) {
    let { name, value } = e.target;
    switch (name) {
      case "firstName":
        value.length > 3
          ? this.setState({ firstName: false, firstNameV: true })
          : this.setState({ firstName: true, firstNameV: false });
        break;
      case "lastName":
        value.length > 3
          ? this.setState({ lastName: false, lastNameV: true })
          : this.setState({ lastName: true, lastNameV: false });
        break;
      case "userName":
        value.length > 3
          ? this.setState({ userName: false, userNameV: true })
          : this.setState({ userName: true, userNameV: false });
        break;
      case "city":
        value.length > 3
          ? this.setState({ city: false, cityV: true })
          : this.setState({ city: true, cityV: false });
        break;
      case "state":
        value.length > 3
          ? this.setState({ state: false, stateV: true })
          : this.setState({ state: true, stateV: false });
        break;
      case "zip":
        value.length > 3
          ? this.setState({ zip: false, zipV: true })
          : this.setState({ zip: true, zipV: false });
        break;
      case "checkboxl":
        this.state.checkboxl !== null
          ? this.setState({ checkboxl: !this.state.checkboxl })
          : this.setState({ checkboxl: false });
        break;
      default:
        break;
    }
  }
  render() {
    let firstName, lastName, userName, city, state, zip;
    return (
      <Fragment>
        <h5 className="mt-5">Tooltips</h5>
        <hr />
        <Form
          onSubmit={e => {
            e.preventDefault();
            firstName.value.length > 3
              ? this.setState({ firstName: false, firstNameV: true })
              : this.setState({ firstName: true, firstNameV: false });
            lastName.value.length > 3
              ? this.setState({ lastName: false, lastNameV: true })
              : this.setState({ lastName: true, lastNameV: false });
            userName.value.length > 3
              ? this.setState({ userName: false, userNameV: true })
              : this.setState({ userName: true, userNameV: false });
            city.value.length > 3
              ? this.setState({ city: false, cityV: true })
              : this.setState({ city: true, cityV: false });
            state.value.length > 3
              ? this.setState({ state: false, stateV: true })
              : this.setState({ state: true, stateV: false });
            zip.value.length > 3
              ? this.setState({ zip: false, zipV: true })
              : this.setState({ zip: true, zipV: false });
            this.state.checkboxl === null && this.setState({ checkboxl: true });
          }}
        >
          <div className="form-row">
            <Col md={4} className="mb-3">
              <Label for="validationCustom01">First name</Label>
              <Input
                type="text"
                placeholder="First name"
                name="firstName"
                defaultValue="Mark"
                onChange={this.formValidation}
                innerRef={node => (firstName = node)}
                valid={this.state.firstNameV}
                invalid={this.state.firstName}
              />
              {this.state.firstNameV ? (
                <FormFeedback valid tooltip>
                  Looks good!
                </FormFeedback>
              ) : (
                <FormFeedback tooltip>
                  Please provide a First name .
                </FormFeedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Label for="validationCustom02">Last name</Label>
              <Input
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                name="lastName"
                onChange={this.formValidation}
                innerRef={node => (lastName = node)}
                valid={this.state.lastNameV}
                invalid={this.state.lastName}
              />
              {this.state.lastNameV ? (
                <FormFeedback valid tooltip>
                  Looks good!
                </FormFeedback>
              ) : (
                <FormFeedback tooltip>
                  Please provide a Last name .
                </FormFeedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Label for="validationCustomUsername">Username</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  onChange={this.formValidation}
                  innerRef={node => (userName = node)}
                  valid={this.state.userNameV}
                  invalid={this.state.userName}
                />
                {this.state.userNameV ? (
                  <FormFeedback tooltip valid>
                    Looks good!
                  </FormFeedback>
                ) : (
                  <FormFeedback tooltip>Please choose a username.</FormFeedback>
                )}
              </InputGroup>
            </Col>
          </div>
          <div className="form-row">
            <Col md={4} className="mb-3">
              <Label for="validationCustom03">City</Label>
              <Input
                type="text"
                name="city"
                placeholder="City"
                onChange={this.formValidation}
                innerRef={node => (city = node)}
                valid={this.state.cityV}
                invalid={this.state.city}
              />
              {this.state.cityV ? (
                <FormFeedback valid tooltip>
                  Looks good!
                </FormFeedback>
              ) : (
                <FormFeedback tooltip>
                  Please provide a valid city.
                </FormFeedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Label for="validationCustom04">State</Label>
              <Input
                type="text"
                name="state"
                placeholder="State"
                onChange={this.formValidation}
                innerRef={node => (state = node)}
                valid={this.state.stateV}
                invalid={this.state.state}
              />
              {this.state.stateV ? (
                <FormFeedback valid tooltip>
                  Looks good!
                </FormFeedback>
              ) : (
                <FormFeedback tooltip>
                  Please provide a valid state.
                </FormFeedback>
              )}
            </Col>
            <Col md={4} className="mb-3">
              <Label for="validationCustom05">Zip</Label>
              <Input
                type="text"
                name="zip"
                placeholder="Zip"
                onChange={this.formValidation}
                innerRef={node => (zip = node)}
                valid={this.state.zipV}
                invalid={this.state.zip}
              />
              {this.state.zipV ? (
                <FormFeedback valid tooltip>
                  Looks good!
                </FormFeedback>
              ) : (
                <FormFeedback tooltip>Please provide a valid zip.</FormFeedback>
              )}
            </Col>
          </div>
          <FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  name="checkboxl"
                  onChange={this.formValidation}
                  invalid={this.state.checkboxl}
                />
                Agree to terms and conditions
                <FormFeedback tooltip>
                  You must agree before submitting.
                </FormFeedback>
              </Label>
            </FormGroup>
          </FormGroup>
          <Button type="submit" color="primary">
            Submit form
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default FormValidationToltip;
