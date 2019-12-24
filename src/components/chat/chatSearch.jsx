import React from "react";
import {
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { Search } from "react-feather";
import PropTypes from "prop-types";

const ChatSearch = ({ onChange, searchTerm }) => (
  <div className="h-list-header">
    <Form onSubmit={e => e.preventDefault()}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Search Friend . . ."
          onChange={e => onChange(e.target.value)}
          value={searchTerm}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <Search size={16} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  </div>
);

ChatSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default ChatSearch;
