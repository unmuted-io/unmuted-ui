import React from "react";
import { Form, InputGroup, InputGroupAddon, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { Search } from "react-feather";

const EmailSearch = ({ onChange, searchTerm }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <Label for="inputGroupS01" className="input-group-text">
          <Search size={16} />
        </Label>
      </InputGroupAddon>
      <Input
        type="text"
        id="inputGroupS01"
        placeholder="Search emails"
        onChange={e => onChange(e.target.value)}
        value={searchTerm}
      />
    </InputGroup>
  </Form>
);

EmailSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default EmailSearch;
