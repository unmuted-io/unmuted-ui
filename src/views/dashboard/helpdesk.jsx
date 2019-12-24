// import external modules
import React, { PureComponent } from "react";
import * as Icons from "react-feather";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import Data from "./data";
import StaticData from "./staticData";
import SupportCardStatic from "../../components/cards/basicStaticXYCard/supportCardStatics";
import SatisfactionCardStatic from "../../components/amChart/staticsXYChart/satisfactionCardStatics";
import SocialresStaticCard from "../../components/cards/basicsStaticCards/socialresStaticCard";
import ActivityStaticCard from "../../components/cards/basicsStaticCards/activityStaticsCard";
import UpdateStaticCard from "../../components/cards/basicsStaticCards/updateStaticsCard";

class HelpDesk extends PureComponent {
  state = {};
  render() {
    return (
      <Row>
        <Col xl="4" md="6">
          <SupportCardStatic
            static="350"
            color="purple"
            title="Support Requests"
            text="Total number of support requests that come in."
            height="100px"
            colorCode="#7759de"
            bgColor="purple"
            staticData={Data.supportStatic.staticData}
            chartData={Data.supportStatic.staticChart}
          />
        </Col>
        <Col xl="4" md="6">
          <SupportCardStatic
            static="30min"
            color="blue"
            title="Agent Response"
            text="Total number ticket solve by the agent."
            height="100px"
            colorCode="#2196f3"
            bgColor="primary"
            staticData={Data.supportStatic1.staticData}
            chartData={Data.supportStatic1.staticChart}
          />
        </Col>
        <Col xl="4" md="6">
          <SupportCardStatic
            static="800"
            color="green"
            title="upport Resolved"
            text="Total number of support requests that come in."
            height="100px"
            colorCode="#4caf50"
            bgColor="success"
            staticData={Data.supportStatic2.staticData}
            chartData={Data.supportStatic2.staticChart}
          />
        </Col>
        <Col xl="8" md="6">
          <SatisfactionCardStatic
            title="Customer Satisfaction"
            text="It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion..."
            VSatisfied={66}
            Satisfied={50}
            Poor={40}
            VPoor={30}
            height="200px"
            dataChart={Data.satisfactionChart}
          />
          <Row>
            <Col xl="6" md="12">
              <SocialresStaticCard
                title="Facebook Source"
                progres={StaticData.socialresProgres}
              />
            </Col>
            <Col xl="6" md="12">
              <SocialresStaticCard
                title="Twitter Source"
                progres={StaticData.socialresProgres1}
              />
            </Col>
          </Row>
        </Col>
        <Col xl="4" md="6">
          <ActivityStaticCard
            title="Latest Activity"
            activityList={StaticData.activityList}
          />
          <Row>
            <Col md="12">
              <UpdateStaticCard
                color="primary"
                static="4000 +"
                text="Ratings Received"
                icon={<Icons.Star size={28} />}
              />
            </Col>
            <Col md="12">
              <UpdateStaticCard
                color="purple"
                static="17"
                text="Achievements"
                icon={<Icons.Sunrise size={28} />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default HelpDesk;
