import { connect } from "react-redux";
import { setVisibilityFilter, setBody } from "../../redux/actions/emailActions";
import Link from "../../components/email/filterLinks";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.emailApp.visibilityFilter,
  emaillist: state.emailApp.emailBody.openBody
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => [
    dispatch(setVisibilityFilter(ownProps.filter)),
    dispatch(setBody("emaillist"))
  ]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
