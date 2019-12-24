import React from "react";
import { Star } from "react-feather";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Email = ({
  id,
  onClick,
  onChange,
  onStar,
  from,
  emailExcerpt,
  time,
  starred,
  unread
}) => (
  <tr className={unread ? "unread" : null}>
    <td>
      <div className="check-star">
        <div className="form-group d-inline">
          <div className="checkbox checkbox-primary checkbox-fill d-inline">
            <input type="checkbox" onChange={onChange} id={id} />
            <label htmlFor={id} className="cr" />
          </div>
        </div>
        <Link to="#">
          <Star
            size={14}
            className={`ml-2  ${starred && "text-c-yellow"}`}
            onClick={onStar}
          />
        </Link>
      </div>
    </td>
    <td>
      <Link to="#" onClick={onClick} className="email-name waves-effect">
        {from}
      </Link>
    </td>
    <td>
      <Link to="#" onClick={onClick} className="email-name waves-effect">
        {emailExcerpt}
      </Link>
    </td>
    <td className="email-time">{time}</td>
  </tr>
);

Email.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onStar: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  emailExcerpt: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired
};

export default Email;
