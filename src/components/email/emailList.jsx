import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import Email from "./emailListItem";

const EmailList = ({
  active,
  emails,
  openEmail,
  onStar,
  onImportant,
  setSelectedEmail
}) => (
  <div className="tab-content">
    <div className="mail-body-content">
      <PerfectScrollbar>
        <Table>
          <tbody>
            {emails.map(email => (
              <Email
                key={email.id}
                active={active}
                {...email}
                onClick={() => openEmail(email.id)}
                onStar={() => onStar(email.id)}
                onImportant={() => onImportant(email.id)}
                onChange={e => {
                  if (e.target.checked === true)
                    setSelectedEmail(email.id, "checked");
                  else setSelectedEmail(email.id, "unchecked");
                }}
              />
            ))}
          </tbody>
        </Table>
      </PerfectScrollbar>
    </div>
  </div>
);

EmailList.propTypes = {
  emails: PropTypes.array.isRequired,
  openEmail: PropTypes.func.isRequired,
  onStar: PropTypes.func.isRequired,
  onImportant: PropTypes.func.isRequired,
  setSelectedEmail: PropTypes.func.isRequired
};

export default EmailList;
