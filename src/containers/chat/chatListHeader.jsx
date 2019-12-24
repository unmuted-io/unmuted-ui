import { connect } from "react-redux";
import chatList from "../../components/chat/chatList";
import { openChat, chatBox } from "../../redux/actions/chatActions";

const filterChats = (chats, chatSearch) => {
  if (chatSearch !== "")
    return chats.filter(t =>
      t.name.toLocaleLowerCase().includes(chatSearch.toLocaleLowerCase())
    );
  else return chats;
};

const mapStateToProps = state => ({
  chats: filterChats(state.chatApp.chats, state.chatApp.chatSearch)
});

const mapDispatchToProps = dispatch => ({
  openChat: id => [dispatch(openChat(id)), dispatch(chatBox())]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(chatList);
