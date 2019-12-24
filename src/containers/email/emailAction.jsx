import { connect } from "react-redux";
import emailActions from "../../components/email/emailAction";
import { trashEmail } from "../../redux/actions/emailActions";

const mapStateToProps = state => ({
  id: state.emailApp.selectedEmail
});

const mapDispatchToProps = dispatch => ({
  trashEmail: id => dispatch(trashEmail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(emailActions);
