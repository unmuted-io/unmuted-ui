// import external modules
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import * as Icons from "react-feather";

// import internal(own) modules
import Data from "./data";
import AverageStatics from "../../components/cards/basicStaticXYCard/averageStatics";
import PieStatics from "../../components/cards/basicStaticPieCard/pieCardStatics";
import StaticsBasicMap from "../../components/cards/basicMapCard/basicMap";
import LineCardStatics from "../../components/cards/basicStaticXYCard/lineCardStatics";
import DataTimeCardStatics from "../../components/cards/basicStaticXYCard/dateTimeCardStatics";
import AccountCardStatics from "../../components/cards/basicStaticXYCard/accountCardStatics";
import StaticTableCard from "../../components/cards/basicsStaticCards/staticTableCard";
import ProgressBouble from "../../components/cards/basicsStaticCards/basicCardProgressDouble";
import ProgressSingle from "../../components/cards/basicsStaticCards/basicCardProgressSingle";
import StaticsSiteVisitCard from "../../components/cards/basicsStaticCards/staticSiteVisitCard";

class Analytic extends Component {
  render() {
    return (
      <Row>
        <Col xl="8" md="12">
          <Row>
            <Col md="6">
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
            <Col md="6">
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
            <Col md="12">
              <AccountCardStatics
                title="Department wise annual recurring and profit"
                value="$687,578"
                valueTitle="Marketing Growth"
                valueText="Measure How Fast You're Growing in current Market."
                profit="30%"
                profitTitle="Annual profit/stakeholders"
                profitText="Ave 30% or more profite provide to investor as Anual return."
                data={Data.account1}
                width="100%"
                height="215px"
              />
            </Col>
            <Col md="6">
              <Row>
                <Col md="12">
                  <PieStatics
                    title="Sale report of year"
                    height="170px"
                    data={Data.typePie}
                    data1="76.7%"
                    data2="15%"
                    data3="30%"
                  />
                </Col>
                <Col md="12">
                  <LineCardStatics
                    title="Conversions"
                    info="purchased"
                    value="0.85%"
                    status="0.50%"
                    width="100%"
                    height="60px"
                    color="text-c-purple"
                    data={Data.lineChart1}
                    colorCode="#7759de"
                  />
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <StaticsBasicMap
                title="Visits by Location"
                data={Data.amMap1}
                width="100%"
                height="278px"
                visitCountry={Data.visitCountryMap}
              />
            </Col>
          </Row>
        </Col>
        <Col xl="4" md="12">
          <Row>
            <Col xl="6" md="6">
              <AverageStatics
                bgColor="bg-primary"
                data={Data.averageChart1}
                width="100%"
                height="145px"
                title="Average Support Requests"
                staticsTop="20"
                numberBottom="Solved : 15"
              />
            </Col>
            <Col xl="6" md="6">
              <AverageStatics
                bgColor="bg-success "
                data={Data.averageChart2}
                width="100%"
                height="145px"
                title="Quick Agent Response"
                staticsTop="30 min"
                numberBottom="Remain: 3"
              />
            </Col>
            <Col md="12">
              <DataTimeCardStatics
                title="Users by time of day [current 1236]"
                height="460px"
                width="100%"
                data={Data.dateTime}
              />
            </Col>
            <Col md="12">
              <ProgressBouble
                progressValue1="60"
                earning="6.455"
                expense="3.869"
                budget="5,569"
                budgetEarning="1,000"
                progressValue2="40"
              />
            </Col>
            <Col md="12">
              <ProgressSingle
                position="top"
                downValue={2450}
                upValue={5420}
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
                textTitle="Landing page design"
                color="red"
                leftText="This Year"
                rightText="Previous Year"
                progressValue={40}
                progressColor="danger"
              />
            </Col>
          </Row>
        </Col>
        <Col md="12">
          <StaticsSiteVisitCard
            cardTitle="Site visitors session log"
            campaing="Total and average"
            visitsData={Data.siteVisitData}
            click={true}
            cost={true}
            ctr={true}
            arpu={true}
            ecpi={true}
            roi={true}
            revenue={true}
            conversions={true}
          />
        </Col>
      </Row>
    );
  }
}

export default Analytic;
