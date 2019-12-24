import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label
} from "reactstrap";
import InputMask from "react-input-mask";
import ReactNumeric, { predefinedOptions } from "react-numeric";

const InputMasking = props => (
  <FormGroup row>
    <Label sm={3}>{props.label}</Label>
    <Col sm={9}>
      <InputMask mask={props.mask} className="form-control" />
    </Col>
  </FormGroup>
);

const InputNumeric = props => (
  <FormGroup row>
    <Label sm={3}>{props.children}</Label>
    <Col sm={9}>
      <ReactNumeric {...props} className="form-control" />
    </Col>
  </FormGroup>
);

const FullCard = props => (
  <Col md={6}>
    <Card>
      <CardHeader>
        <h5>{props.title}</h5>
      </CardHeader>
      <CardBody>{props.children}</CardBody>
    </Card>
  </Col>
);

class FormMasking extends Component {
  render() {
    return (
      <Row>
        <FullCard title="Date">
          <InputMasking mask="99/99/999" label="Insert Date 1" />
          <InputMasking mask="99/99/999" label="Insert Date 2" />
        </FullCard>
        <FullCard title="Time">
          <InputMasking mask="99:99:99" label="Hour" />
          <InputMasking mask="99/99/9999 99:99:99" label="Date & Hour" />
        </FullCard>
        <FullCard title="Phone no.">
          <InputMasking mask="9999-999-999" label="Mobile No." />
          <InputMasking mask="9999-9999" label="Telephone" />
          <InputMasking mask="(99) 9999-9999" label="Tel. with Code Area" />
          <InputMasking mask="(999) 999-9999" label="US Telephone" />
        </FullCard>
        <FullCard title="Network">
          <InputMasking mask="999.999.999.999" label="IP Address" />
          <InputMasking mask="99/99/9999 99:99:99" label="IPV4" />
          <InputMasking
            mask="9999:9999:9999:9:999:9999:9999:9999"
            label="IPV6"
          />
        </FullCard>
        <FullCard title="Numbers">
          <InputNumeric outputFormat="string">Default</InputNumeric>
          <InputNumeric preDefined={predefinedOptions.percentageEU2dec}>
            Auto Numeric (%)
          </InputNumeric>
          <InputNumeric minimumValue="0" maximumValue="9999">
            Maximum Value (0 - 9999)
          </InputNumeric>
          <InputNumeric
            outputFormat="string"
            minimumValue="-99.99"
            maximumValue="1000.00"
          >
            Range Value (-99.99 - 1000.00)
          </InputNumeric>
          <InputNumeric
            minimumValue="-9999.99"
            maximumValue="0.00"
            negativeBracketsTypeOnBlur="(,)"
          >
            Bracket Value
          </InputNumeric>
        </FullCard>
        <FullCard title="Currency">
          <InputNumeric currencySymbol="$ ">Dollar ($)</InputNumeric>
          <InputNumeric currencySymbol="€ ">Euro (€)</InputNumeric>
          <InputNumeric currencySymbol="Rs. ">Rupee (Rs.)</InputNumeric>
          <InputNumeric currencySymbol="¥ ">Renminbi (¥)</InputNumeric>
          <InputNumeric currencySymbol="£ ">Pound (£)</InputNumeric>
          <InputNumeric currencySymbol="৳ ">Taka (৳)</InputNumeric>
        </FullCard>
      </Row>
    );
  }
}

export default FormMasking;
