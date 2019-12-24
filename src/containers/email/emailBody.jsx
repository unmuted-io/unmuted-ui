import React, { Fragment } from "react";
import { connect } from "react-redux";
import EmailList from "./showEmails";
import EmailContent from "./emailContent";
import EmailAction from "./emailAction";
import EmailCompose from "../../components/email/emailCompose";

const EmailBody = ({ emaillist }) => {
  if (emaillist === "composemail") {
    return <EmailCompose />;
  } else if (emaillist === "emailcontent") {
    return <EmailContent />;
  } else if (emaillist === "emaillist") {
    return (
      <Fragment>
        <EmailAction />
        <EmailList />
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  emaillist: state.emailApp.emailBody.openBody
});

export default connect(mapStateToProps)(EmailBody);
