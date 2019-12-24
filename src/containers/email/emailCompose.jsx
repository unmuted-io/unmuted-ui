import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setBody } from "../../redux/actions/emailActions";

const EmailCompose = ({ onClick }) => (
  <div className="mb-3">
    <Link
      to="#"
      onClick={onClick}
      className="btn btnb btn-rounded btn-outline-primary"
    >
      + Compose
    </Link>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(setBody("composemail"))
});

export default connect(
  null,
  mapDispatchToProps
)(EmailCompose);
