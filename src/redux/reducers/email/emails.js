import emailData from "./emailData";

const emails = (state = emailData, action) => {
  switch (action.type) {
    case "STAR_EMAIL":
      return state.map(email =>
        email.id === action.id ? { ...email, starred: !email.starred } : email
      );
    case "TRASH_EMAIL":
      let emails = [];
      for (let i = 0; i < state.length; i++) {
        emails.push(state[i]);
        for (let j = 0; j < action.id.length; j++) {
          if (state[i].id === action.id[j]) {
            emails[i].trash = true;
          }
        }
      }
      return emails;
    default:
      return state;
  }
};
export default emails;
