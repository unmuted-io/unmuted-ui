// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// import internal(own) modules
import Data from "./data";
import StaticData from "./staticData";
import SimpaleStaticsCard from "../../components/cards/basicsStaticCards/simpaleStaticsCard";
import PieStatics from "../../components/cards/basicStaticPieCard/pieCardStatics";
import RatingStaticCard from "../../components/cards/basicsStaticCards/ratingStaticCard";
import ProgressSingle from "../../components/cards/basicsStaticCards/basicCardProgressSingle";
import NotificationStatic from "../../components/cards/basicsStaticCards/notificationStaticsCard";
import UserlistStaticCard from "../../components/cards/basicsStaticCards/userlistStaticsCard";
import ProfileStaticCard from "../../components/cards/basicsStaticCards/profileStaticCard";
import profileImage from "../../assets/images/widget/img-round1.jpg";

class Project extends Component {
  render() {
    return (
      <Row>
        <Col xl="12">
          <SimpaleStaticsCard>
            <SimpaleStaticsCard.SingleCard
              title="Published Project"
              static="532"
              change="+1.69"
              color="red"
              progressValue="25"
            />
            <SimpaleStaticsCard.SingleCard
              title="Completed Task"
              static="4,569"
              change="-0.5"
              color="blue"
              progressValue="65"
            />
            <SimpaleStaticsCard.SingleCard
              title="Successfull Task"
              static="89%"
              change="+0.99"
              color="green"
              progressValue="85"
            />
            <SimpaleStaticsCard.SingleCard
              title="Ongoing Project"
              static="365"
              change="+0.35"
              color="yellow"
              progressValue="45"
            />
          </SimpaleStaticsCard>
        </Col>
        <Col xl="4" md="6">
          <PieStatics
            title="Avg. use of project by different devices"
            height="180px"
            data={Data.typePie}
            data1="76.7%"
            data2="15%"
            data3="30%"
          />
        </Col>
        <Col xl="4" md="6">
          <RatingStaticCard
            title="Task Completed"
            text="Successfull tested"
            initialRating={60}
          />
          <Row>
            <Col xl="12">
              <ProgressSingle
                position="down"
                downValue={6456}
                upValue={2500}
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                textTitle="App design and development"
                color="blue"
                leftText="This Week"
                rightText="Previous Week"
                progressValue={60}
                progressColor="primary"
              />
            </Col>
          </Row>
        </Col>
        <Col xl="4" md="6">
          <NotificationStatic
            title="Notification"
            notifications={StaticData.notifications}
          />
        </Col>
        <Col xl={4} md={6}>
          <ProfileStaticCard
            name="Sara Soudein"
            title="Web Designer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium recusandae beatae."
            card="top"
            profileImage={profileImage}
            design={400}
            project={90}
            devlopment={70}
          />
        </Col>
        <Col xl="8" md="12">
          <UserlistStaticCard
            title="User Project List"
            userList={StaticData.userList}
          />
        </Col>
      </Row>
    );
  }
}

export default Project;
