import { connect } from "react-redux";
import { emailSearch } from "../../redux/actions/emailActions";
import Search from "../../components/email/emailSearch";

const mapStateToProps = state => ({
  searchTerm: state.emailApp.emailSearch
});

const mapDispatchToProps = dispatch => ({
  onChange: searchTerm => dispatch(emailSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
