// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import * as Icons from "react-feather";

// import internal(own) modules
import StaticData from "../dashboard/staticData";
import StaticTableCard from "../../components/cards/basicsStaticCards/staticTableCard";
import UpdateStaticCard from "../../components/cards/basicsStaticCards/updateStaticsCard";
import StaticSliderCard from "../../components/cards/carouselCard/stasticCard";
import StaticSliderDark from "../../components/cards/carouselCard/staticSliderCard";
import SalesStaticCard from "../../components/cards/basicsStaticCards/salesStaticCard";
import WeatherStaticCard from "../../components/cards/basicsStaticCards/weatherStaticcard";
import OrderStaticCard from "../../components/cards/basicsStaticCards/orderStaticCard";
import OrderTaskCard from "../../components/cards/basicsStaticCards/orderTaskCard";
import ProgressBouble from "../../components/cards/basicsStaticCards/basicCardProgressDouble";
import WeatherPlaceCard from "../../components/cards/basicsStaticCards/weatherPlaceCard";
import TimelineStaticCard from "../../components/cards/basicsStaticCards/timelineStaticCard";
import SocialWidgetCard from "../../components/cards/basicsStaticCards/socialWidgetCard";
import ImprestionStaticCard from "../../components/cards/basicsStaticCards/imprestionStaticCard";
import ProductProfitCard from "../../components/cards/basicsStaticCards/productProfitCard";
import ClientStaticCard from "../../components/cards/basicsStaticCards/clientStaticCard";
import SimpaleStaticsCard from "../../components/cards/basicsStaticCards/simpaleStaticsCard";
import ProjectTicketStaticCard from "../../components/cards/basicsStaticCards/projectTicketStaticCard";
import TicketStaticCard from "../../components/cards/basicsStaticCards/ticketStaticCard";
import AnalyticStaticCard from "../../components/cards/basicsStaticCards/analyticStaticCard";
import ProfileStaticCard from "../../components/cards/basicsStaticCards/profileStaticCard";
import SocialresStaticCard from "../../components/cards/basicsStaticCards/socialresStaticCard";
import ProductStaticsCard from "../../components/cards/basicsStaticCards/productStaticsCard";
import SocialUserCard from "../../components/cards/basicsStaticCards/socialUserCard";
import WeatherFullCard from "../../components/cards/basicsStaticCards/weatherFullCard";
import socialUser1 from "../../assets/images/widget/profile-person1.jpg";
import socialUser2 from "../../assets/images/widget/user-blur-bg.png";
import weatherImage from "../../assets/images/widget/weather-card-bg.png";
import coverImage from "../../assets/images/widget/slider7.jpg";
import profileImage from "../../assets/images/widget/img-round1.jpg";

class StatistcWidget extends Component {
  render() {
    return (
      <Row>
        <Col md={12} xl={4}>
          <StaticTableCard
            value1="10k"
            value2="100%"
            value3="2000 +"
            value4="120"
            text1="VISITORS"
            text2="VOLUME"
            text3="FILES"
            text4="MAILS"
            textColor1="text-c-green"
            textColor2="text-c-red"
            textColor3="text-c-blue"
            textColor4="text-c-yellow"
            Icon1={<Icons.Eye size={28} />}
            Icon2={<Icons.Music size={28} />}
            Icon3={<Icons.FileText size={28} />}
            Icon4={<Icons.Mail size={28} />}
          />
        </Col>
        <Col md={12} xl={4}>
          <StaticTableCard
            value1="1000"
            value2="600"
            value3="3550"
            value4="100%"
            text1="SHARES"
            text2="NETWORK"
            text3="RETURNS"
            text4="ORDER"
            textColor1="text-c-purple"
            textColor2="text-c-purple"
            textColor3="text-c-purple"
            textColor4="text-c-purple"
            Icon1={<Icons.Share2 size={28} />}
            Icon2={<Icons.Wifi size={28} />}
            Icon3={<Icons.RotateCcw size={28} />}
            Icon4={<Icons.ShoppingCart size={28} />}
          />
        </Col>
        <Col md={12} xl={4}>
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
        <Col sm={12}>
          <StaticSliderCard items={StaticData.sliderData} />
        </Col>
        <Col sm={12}>
          <StaticSliderDark dark items={StaticData.sliderDataDark} />
        </Col>
        <Col sm={12}>
          <StaticSliderDark items={StaticData.sliderDataDark} />
        </Col>
        <Col xl={4} md={6}>
          <SalesStaticCard
            title="Sales view"
            static={1042}
            desktop={66}
            tablet={26}
            mobile={8}
          />
          <WeatherStaticCard place="New York , NY" weather="23" />
        </Col>
        <Col xl={4} md={6}>
          <OrderStaticCard
            static={954}
            success={24}
            danger={20}
            primary={10}
            warning={10}
            info={35}
          />
          <OrderTaskCard task={4} complete={15} lastMonth={6} />
        </Col>
        <Col xl={4} md={12}>
          <ProgressBouble
            progressValue1="60"
            earning="6.455"
            expense="3.869"
            budget="5,569"
            budgetEarning="1,000"
            progressValue2="40"
          />
          <WeatherPlaceCard place="New York , NY" weather={19} />
        </Col>
        <Col sm={12}>
          <Row className="statstic-data-card" noGutters>
            <Col md={6} xl={3}>
              <TimelineStaticCard
                static1={0.56}
                staticColor1="red"
                static2={0.88}
                staticColor2="red"
                static3={160.4}
                data={StaticData.timelineData1}
                timeline
              />
            </Col>
            <Col md={6} xl={3}>
              <TimelineStaticCard
                static1={0.56}
                staticColor1="green"
                static2={0.45}
                staticColor2="green"
                static3={110.4}
                icon="down"
                iconText="SPY"
                name="BANKEX"
              />
            </Col>
            <Col md={6} xl={3}>
              <TimelineStaticCard
                static1={0.56}
                staticColor1="red"
                static2={0.88}
                staticColor2="red"
                static3={160.4}
                data={StaticData.timelineData1}
                timeline
              />
            </Col>
            <Col md={6} xl={3}>
              <TimelineStaticCard
                static1={0.56}
                staticColor1="green"
                static2={0.45}
                staticColor2="green"
                static3={110.4}
                icon="down"
                iconText="SPY"
                name="UTILS"
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} xl={3}>
          <SocialWidgetCard static={1165} social="facebook" />
        </Col>
        <Col md={6} xl={3}>
          <SocialWidgetCard static={780} social="twitter" />
        </Col>
        <Col md={6} xl={3}>
          <SocialWidgetCard static={998} social="linkedin" />
        </Col>
        <Col md={6} xl={3}>
          <SocialWidgetCard static={650} social="googleplus" />
        </Col>
        <Col xl={4} md={12}>
          <ImprestionStaticCard
            title="Impressions"
            static="1,563"
            date="May 23 - June 01 (2018)"
            color="blue"
            icon={["far", "eye"]}
          />
        </Col>
        <Col xl={4} md={12}>
          <ImprestionStaticCard
            title="Goal"
            static="30,564"
            date="May 28 - June 01 (2018)"
            color="green"
            icon="bullseye"
          />
        </Col>
        <Col xl={4} md={12}>
          <ImprestionStaticCard
            title="Impact"
            static="42.6%"
            date="May 30 - June 01 (2018)"
            color="yellow"
            icon="hand-paper"
          />
        </Col>
        <Col xl={3} md={6}>
          <ProductProfitCard
            title="Total Profit"
            static="$1,783"
            icon={["far", "money-bill-alt"]}
            color="red"
            change={11}
          />
        </Col>
        <Col xl={3} md={6}>
          <ProductProfitCard
            title="Total Orders"
            static="15,830  "
            icon="database"
            color="blue"
            change={12}
          />
        </Col>
        <Col xl={3} md={6}>
          <ProductProfitCard
            title="Average Price"
            static="$6,780 "
            icon="tags"
            color="green"
            change={52}
          />
        </Col>
        <Col xl={3} md={6}>
          <ProductProfitCard
            title="Product Sold"
            static="6,784 "
            icon="dollar-sign"
            color="yellow"
            change={52}
          />
        </Col>
        <Col sm={12}>
          <ClientStaticCard data={StaticData.clientData} />
        </Col>
        <Col sm="12">
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
        <Col xl={4} md={12}>
          <ProjectTicketStaticCard
            title="Ticket Answered"
            color="red"
            staticLeft={327}
            staticRight="10 Days"
            change={53}
            icon="calendar-check"
          />
        </Col>
        <Col xl={4} md={12}>
          <ProjectTicketStaticCard
            title="Project Launched"
            color="green"
            staticLeft="3 Year"
            staticRight="623"
            change={76}
            icon={["far", "paper-plane"]}
          />
        </Col>
        <Col xl={4} md={12}>
          <ProjectTicketStaticCard
            title="Unique Innovation"
            color="yellow"
            staticLeft="1 Month"
            staticRight="248"
            change={73}
            icon="lightbulb"
          />
        </Col>
        <Col xl={3} md={6}>
          <TicketStaticCard
            title="Open Tickets"
            color="red"
            static={128}
            staticText="Tickets"
            status="down"
            icon="folder-open"
          />
        </Col>
        <Col xl={3} md={6}>
          <TicketStaticCard
            title="Close Tickets"
            color="blue"
            static={134}
            staticText="Tickets"
            status="up"
            icon={["far", "file-archive"]}
          />
        </Col>
        <Col xl={3} md={6}>
          <TicketStaticCard
            title="New Clients"
            color="green"
            static={307}
            staticText="Clients"
            status="up"
            icon="users"
          />
        </Col>
        <Col xl={3} md={6}>
          <TicketStaticCard
            title="New Orders"
            color="yellow"
            static={231}
            staticText="Orders"
            status="up"
            icon="database"
          />
        </Col>
        <Col xl={4} md={12}>
          <AnalyticStaticCard
            title="Total Sales"
            static="15,678"
            text="Total Income"
            price="2,451"
            change={10}
            color="green"
            icon="shopping-cart"
            status="up"
          />
        </Col>
        <Col xl={4} md={12}>
          <AnalyticStaticCard
            title="Total Users"
            static="1,678"
            text="Total Revenue "
            price="2,451"
            change={30}
            color="blue"
            icon="users"
            status="up"
          />
        </Col>
        <Col xl={4} md={12}>
          <AnalyticStaticCard
            title="Total Project"
            static="15,678"
            text="Active Projects  "
            price="2,451"
            change={30}
            color="red"
            icon={["far", "file-code"]}
            status="down"
          />
        </Col>
        <Col xl={4} md={6}>
          <ProfileStaticCard
            name="Lary Doe"
            title="Web Designer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium recusandae beatae."
            card="middle"
            coverImage={coverImage}
            profileImage={profileImage}
            design={400}
            project={90}
            devlopment={70}
          />
        </Col>
        <Col xl={4} md={6}>
          <ProfileStaticCard
            name="Jenny Joe"
            title="Web Designer"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium recusandae beatae."
            card="body"
            coverImage={coverImage}
            profileImage={profileImage}
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
        <Col xl="3" md="12">
          <SocialresStaticCard
            title="Facebook Source"
            progres={StaticData.socialresProgres}
          />
        </Col>
        <Col xl="3" md="12">
          <SocialresStaticCard
            title="Twitter Source"
            progres={StaticData.socialresProgres1}
          />
        </Col>
        <Col xl="3" md="12">
          <SocialresStaticCard
            title="Google+ Source"
            progres={StaticData.socialresProgres2}
          />
        </Col>
        <Col xl="3" md="12">
          <SocialresStaticCard
            title="Linkedin Source"
            progres={StaticData.socialresProgres3}
          />
        </Col>
        <Col sm={12}>
          <ProductStaticsCard>
            <ProductStaticsCard.SingleCard
              title="Total Product"
              static={2476}
              change={64}
              color="blue"
              status="up"
              progressValue={45}
              icon="cube"
            />
            <ProductStaticsCard.SingleCard
              title="New Orders"
              static={843}
              change={36}
              color="red"
              status="down"
              progressValue={75}
              icon="tag"
            />
            <ProductStaticsCard.SingleCard
              title="Conversion Rate"
              static="63%"
              change={64}
              color="yellow"
              status="up"
              progressValue={85}
              icon="random"
            />
            <ProductStaticsCard.SingleCard
              title="Conversion Rate"
              static="41M"
              change={54}
              color="green"
              status="up"
              progressValue={45}
              icon="dollar-sign"
            />
          </ProductStaticsCard>
        </Col>
        <Col xl={4} md={6}>
          <SocialUserCard
            name="John Steve"
            bio="UI/UX Designer at CreativesCastle Studio"
            card="normal"
            shots={134}
            followers="13,227"
            following={488}
            image={socialUser1}
          />
        </Col>
        <Col xl={4} md={6}>
          <SocialUserCard
            name="Linda Fox"
            bio="UI/UX Designer at CreativesCastle Studio"
            card="blur"
            shots={134}
            followers="13,227"
            following={488}
            image={socialUser2}
          />
        </Col>
        <Col xl={4} md={6}>
          <WeatherFullCard
            place="New York , NY , USA"
            temp={8}
            status="Clear Today"
            image={weatherImage}
          />
        </Col>
      </Row>
    );
  }
}

export default StatistcWidget;
