import { connect } from "react-redux";
import { sendMsg } from "../../redux/actions/chatActions";
import chatMsgForm from "../../components/chat/chatMsgFormHeader";

const mapStateToProps = state => ({
  id: state.chatApp.chatContent
});

const mapDispatchToProps = dispatch => ({
  onClick: (id, chatMsg) => dispatch(sendMsg(id, chatMsg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(chatMsgForm);
