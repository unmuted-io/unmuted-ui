import { connect } from "react-redux";
import chatContent from "../../components/chat/chatContent";

const mapStateToProps = state => ({
  chatDetails: state.chatApp.chats[state.chatApp.chatContent - 1]
});

export default connect(mapStateToProps)(chatContent);
