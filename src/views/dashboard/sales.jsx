import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Data from "./data";
import LineCardStatics from "../../components/cards/basicStaticXYCard/lineCardStatics";
import StaticsBasicMap from "../../components/cards/basicMapCard/basicMap";
import AverageStatics from "../../components/cards/basicStaticXYCard/averageStatics";
import SiteCardStatics from "../../components/cards/basicStaticXYCard/siteCardStatics";
import StaticsSiteVisitCard from "../../components/cards/basicsStaticCards/staticSiteVisitCard";
import ProgressBouble from "../../components/cards/basicsStaticCards/basicCardProgressDouble";

class Sales extends Component {
  render() {
    return (
      <Row>
        <Col md="4">
          <LineCardStatics
            title="New stock"
            current="Purchased"
            value="0.85%"
            status="0.50%"
            width="100%"
            height="65px"
            color="text-c-blue"
            data={Data.lineChart2}
            colorCode="#2196f3"
          />
        </Col>
        <Col md="4">
          <LineCardStatics
            title="Avg. order in month"
            info="current"
            current="Ordered"
            value="0.80%"
            status="0.40%"
            width="100%"
            height="65px"
            color="text-c-purple"
            data={Data.lineChart3}
            colorCode="#7759de"
          />
        </Col>
        <Col md="4">
          <LineCardStatics
            title="Profit in year"
            info="opare to prv. year"
            current="Delivered"
            value="0.90%"
            status="0.40%"
            width="100%"
            height="65px"
            color="text-c-green"
            data={Data.lineChart4}
            colorCode="#4caf50"
          />
        </Col>
        <Col xl="6" md="6">
          <StaticsSiteVisitCard
            cardTitle="Sale report"
            trafficData={Data.siteTraffic}
            siteTrafficHeight="400px"
            campaing="Entire"
            visitsData={Data.siteVisitData2}
            click={true}
            cost={true}
            ctr={true}
            arpu={true}
          />
        </Col>
        <Col xl="6" md="6">
          <Row>
            <Col md="12">
              <StaticsBasicMap
                title="Visits by Location"
                data={Data.amMap1}
                width="100%"
                height="350px"
                visitCountry={Data.visitCountryMap}
              />
            </Col>
            <Col xl="6" md="6">
              <AverageStatics
                bgColor="bg-primary"
                data={Data.averageChart1}
                width="100%"
                height="145px"
                title="Average profit per year"
                staticsTop="$80"
                numberBottom="Goal : $105"
              />
            </Col>
            <Col xl="6" md="6">
              <AverageStatics
                data={Data.averageChart1}
                user="Lary Doe"
                width="100%"
                height="145px"
                title="sale by Merchant"
                staticsTop="$80"
                numberBottom="Goal : 75%"
                colorCode="#FF9800"
              />
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <ProgressBouble
            progressValue1="60"
            earning="$6.455"
            expense="$3.869"
            budget="$5,569"
            budgetEarning="$1,000"
            progressValue2="40"
          />
        </Col>
        <Col md="6">
          <SiteCardStatics
            statics1="2.86"
            statics2="+85.9%"
            height="135px"
            data={Data.sitVisit}
          />
        </Col>
      </Row>
    );
  }
}

export default Sales;
