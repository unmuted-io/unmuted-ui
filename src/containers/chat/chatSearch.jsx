import { connect } from "react-redux";
import { chatSearch } from "../../redux/actions/chatActions";
import Search from "../../components/chat/chatSearch";

const mapStateToProps = state => ({
  searchTerm: state.chatApp.chatSearch
});

const mapDispatchToProps = dispatch => ({
  onChange: searchTerm => dispatch(chatSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
