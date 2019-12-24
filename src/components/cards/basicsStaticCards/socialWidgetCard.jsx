import React, { PureComponent } from "react";
import { Card } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocialWidgetCard extends PureComponent {
  render() {
    const props = this.props;
    let socialUser;
    let icon;
    if (props.social === "facebook") {
      socialUser = "Facebook Users";
      icon = <FontAwesomeIcon icon={["fab", "facebook"]} />;
    }
    if (props.social === "twitter") {
      socialUser = "Twitter Users";
      icon = <FontAwesomeIcon icon={["fab", "twitter"]} />;
    }
    if (props.social === "linkedin") {
      socialUser = "Linked In Users";
      icon = <FontAwesomeIcon icon={["fab", "linkedin-in"]} />;
    }
    if (props.social === "googleplus") {
      socialUser = "Google Plus Users";
      icon = <FontAwesomeIcon icon={["fab", "google-plus-g"]} />;
    }
    return (
      <Card className="social-widget-card">
        <div className={`card-body-big bg-${props.social}`}>
          <h3 className="text-white">{props.static} +</h3>
          <span className="m-t-10">{socialUser}</span>
          <i>{icon}</i>
        </div>
      </Card>
    );
  }
}

export default SocialWidgetCard;
