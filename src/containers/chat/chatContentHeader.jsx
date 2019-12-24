import { connect } from "react-redux";
import chatContent from "../../components/chat/chatContentHeader";
import { chatBox } from "../../redux/actions/chatActions";

const mapStateToProps = state => ({
  chatDetails: state.chatApp.chats[state.chatApp.chatContent - 1],
  chating: state.chatApp.chatContextBox
});

const mapDispatchToProps = dispatch => ({
  chatBox: () => dispatch(chatBox())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(chatContent);
