const init = {
  openBody: "emaillist"
};

const EmailBody = (state = init, action) => {
  switch (action.type) {
    case "ACTION_BODY": {
      return { openBody: action.ebody };
    }
    default:
      return state;
  }
};

export default EmailBody;
