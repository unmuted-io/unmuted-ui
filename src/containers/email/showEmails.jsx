import { connect } from "react-redux";
import emailList from "../../components/email/emailList";
import {
  VisibilityFilters,
  openEmail,
  setSelectedEmail,
  starEmail,
  importantEmail,
  setBody
} from "../../redux/actions/emailActions";

const getVisibleEmails = (emails, filter, emailSearch) => {
  switch (filter) {
    case VisibilityFilters.SHOW_INBOX:
      return emails.filter(
        t =>
          t.inbox &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    case VisibilityFilters.SHOW_SENT:
      return emails.filter(
        t =>
          t.sent &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    case VisibilityFilters.SHOW_DRAFTS:
      return emails.filter(
        t =>
          t.draft &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    case VisibilityFilters.SHOW_SPAM:
      return emails.filter(
        t =>
          t.spam &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    case VisibilityFilters.SHOW_TRASH:
      return emails.filter(
        t =>
          t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    case VisibilityFilters.SHOW_STARRED:
      return emails.filter(
        t =>
          t.starred &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    case VisibilityFilters.SHOW_IMPORTANT:
      return emails.filter(
        t =>
          t.important &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      );
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  emails: getVisibleEmails(
    state.emailApp.emails,
    state.emailApp.visibilityFilter,
    state.emailApp.emailSearch
  ),
  active: state.emailApp.emailContent
});

const mapDispatchToProps = dispatch => ({
  openEmail: id => [dispatch(openEmail(id)), dispatch(setBody("emailcontent"))],
  onStar: id => dispatch(starEmail(id)),
  onImportant: id => dispatch(importantEmail(id)),
  setSelectedEmail: (id, checkStatus) =>
    dispatch(setSelectedEmail(id, checkStatus))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(emailList);
