import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FilterLinks = ({ active, children, onClick }) => (
  <Link
    to="#"
    className={classnames("nav-link text-left ", {
      active: active
    })}
    onClick={onClick}
  >
    {children}
  </Link>
);

FilterLinks.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilterLinks;
