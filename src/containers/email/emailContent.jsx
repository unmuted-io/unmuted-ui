import { connect } from "react-redux";
import emailContent from "../../components/email/emailContent";

const mapStateToProps = state => ({
  emailDetails: state.emailApp.emails[state.emailApp.emailContent - 1]
});

export default connect(mapStateToProps)(emailContent);
