import React, { Component } from "react"
import { Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import AccountCardStatics from "../../components/cards/basicStaticXYCard/accountCardStatics"
import Data from "../dashboard/data"
import SiteCardCryptoStatics from "../../components/cards/basicStaticXYCard/siteCardCryptoStatics"
import RatingStaticCard from "../../components/cards/basicsStaticCards/ratingStaticCard"
import DataTimeCardStatics from "../../components/cards/basicStaticXYCard/dateTimeCardStatics"
import LineCardStatics from "../../components/cards/basicStaticXYCard/lineCardStatics"
import SiteCardStatics from "../../components/cards/basicStaticXYCard/siteCardStatics"
import SatisfactionCardStatic from "../../components/amChart/staticsXYChart/satisfactionCardStatics"
import StaticsBasicMap from "../../components/cards/basicMapCard/basicMap"
import PieStatics from "../../components/cards/basicStaticPieCard/pieCardStatics"
import StaticsSiteVisitCard from "../../components/cards/basicsStaticCards/staticSiteVisitCard"
import SupportCardStatic from "../../components/cards/basicStaticXYCard/supportCardStatics"
import AverageStatics from "../../components/cards/basicStaticXYCard/averageStatics"
import CryptoCardStatics from "../../components/cards/basicStaticXYCard/cryptoCardStatics"
import SupportAnlyticCard from "../../components/cards/basicStaticXYCard/supportAnalyticCard"
import StoreVisitorsCard from "../../components/cards/basicStaticXYCard/storeVisitorsCard"
import DeviceStaticCard from "../../components/cards/basicStaticXYCard/deviceStaticCard"
import CloudComputingCard from "../../components/cards/basicStaticXYCard/cloudComputingCard"
import DeviceStaticMiniCard from "../../components/cards/basicStaticXYCard/deviceStaticMiniCard"
import ConversionsCard from "../../components/cards/basicStaticXYCard/conversionsCard"
import TrafficTrackerCard from "../../components/cards/basicStaticXYCard/trafficTrackerCard"
import MarketingCampaignCard from "../../components/cards/basicStaticPieCard/marketingCampaignCard"
import ViewCard from "../../components/cards/basicStaticXYCard/viewCard"
import ActiveUserCard from "../../components/cards/basicStaticXYCard/activeUsers"
import TimeSiteCard from "../../components/cards/basicStaticXYCard/timeSiteCard"
import BrowserStatesCard from "../../components/cards/basicsStaticCards/browserStatesCard"
import SalesReportCard from "../../components/cards/basicStaticXYCard/salesReportCard"
import CurrentProjectProgressCard from "../../components/cards/basicsStaticCards/currentProjectProgressCard"
import CustomersCard from "../../components/cards/basicStaticXYCard/customersCard"
import TotalRevenueCard from "../../components/cards/basicStaticXYCard/totalRevenueCard"
import MarketSales from "../../components/cards/basicStaticXYCard/marketSalesCard"

class ChartWidget extends Component {
  render() {
    return (
      <Row>
        <Col xl={4} md={6}>
          <SupportAnlyticCard
            title="Support Analytics"
            static="280"
            close={120}
            response="2d"
          />
        </Col>
        <Col xl={4} md={6}>
          <DeviceStaticCard title="Page view by device" />
        </Col>
        <Col xl={4} md={6}>
          <CloudComputingCard title="Cloud Computing" />
        </Col>
        <Col xl={8}>
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
            height="200px"
          />
        </Col>
        <Col xl={4}>
          <Row>
            <Col xl={12} md={6}>
              <TrafficTrackerCard title="Traffic tracker" />
            </Col>
            <Col xl={12} md={6}>
              <DeviceStaticMiniCard />
            </Col>
          </Row>
        </Col>
        <Col xl={12}>
          <Row className="no-gutters">
            <Col xl="2" md="4" sm="6">
              <SiteCardCryptoStatics
                title="Current stock"
                change="61"
                height="20px"
                color="#FF9800"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="2" md="4" sm="6">
              <SiteCardCryptoStatics
                title="Current stock"
                change="50"
                height="20px"
                color="#dc6788"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="2" md="4" sm="6">
              <SiteCardCryptoStatics
                title="Total order value"
                change="$203.20"
                height="20px"
                color="#7759de"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="2" md="4" sm="6">
              <SiteCardCryptoStatics
                title="Revenue"
                change="$2,45,789"
                height="20px"
                color="#2196f3"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="2" md="4" sm="6">
              <SiteCardCryptoStatics
                title="Page bounce rate"
                change="0.50%"
                height="20px"
                color="#f44336"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="2" md="4" sm="6">
              <SiteCardCryptoStatics
                title="New Purchases"
                change="45"
                height="20px"
                color="#4caf50"
                data={Data.sitCryptoStatics}
              />
            </Col>
          </Row>
        </Col>
        <Col xl={4} md={5}>
          <RatingStaticCard
            title="Task Completed"
            text="Successfull tested"
            initialRating={60}
          />
          <DataTimeCardStatics
            title="Users by time of day [current 1236]"
            height="460px"
            width="100%"
            data={Data.dateTime}
          />
        </Col>
        <Col xl={8} md={7}>
          <ConversionsCard />
          <Row>
            <Col xl={6} md={12}>
              <LineCardStatics
                title="Conversions"
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
            <Col xl={6} md={12}>
              <SiteCardStatics
                statics1="2.86"
                statics2="+85.9%"
                height="135px"
                data={Data.sitVisit}
              />
            </Col>
          </Row>
        </Col>
        <Col xl={6} md={6}>
          <SatisfactionCardStatic
            title="Customer Satisfaction"
            text="It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion..."
            VSatisfied={66}
            Satisfied={50}
            Poor={40}
            VPoor={30}
            height="240px"
            dataChart={Data.satisfactionChart}
          />
        </Col>
        <Col xl={6} md={6}>
          <MarketingCampaignCard title="Marketing campaign" />
        </Col>
        <Col md={4}>
          <ViewCard />
          <ActiveUserCard />
        </Col>
        <Col md={4}>
          <TimeSiteCard />
        </Col>
        <Col md={4}>
          <BrowserStatesCard />
        </Col>
        <Col md={12} xl={5}>
          <StaticsBasicMap
            title="Visits by Location"
            data={Data.amMap1}
            width="100%"
            height="300px"
            visitCountry={Data.visitCountryMap}
          />
        </Col>
        <Col xl={7} md={12}>
          <Row>
            <Col md={6}>
              <SalesReportCard />
              <CurrentProjectProgressCard />
            </Col>
            <Col md={6}>
              <CustomersCard />
              <LineCardStatics
                title="New stock"
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
        <Col xl={4} md={6}>
          <TotalRevenueCard />
        </Col>
        <Col xl={4} md={6}>
          <MarketSales />
        </Col>
        <Col xl={4} md={6}>
          <PieStatics
            title="Sale report of year"
            height="200px"
            data={Data.typePie}
            data1="76.7%"
            data2="15%"
            data3="30%"
          />
        </Col>
        <Col xl={12}>
          <StaticsSiteVisitCard
            cardTitle="Advertising campaign monitor"
            trafficData={Data.siteTraffic}
            siteTrafficHeight="400px"
            campaing="Entire"
            visitsData={Data.siteVisitData2}
            click
            cost
            ctr
            arpu
            ecpi
            roi
            revenue
            conversions
          />
        </Col>
        <Col sm={12}>
          <StoreVisitorsCard
            title="Store Visitors"
            day="563,756"
            total="78,569"
            bounce="40.05%"
          />
        </Col>
        <Col xl={4} md={12}>
          <SupportCardStatic
            static="350"
            color="purple"
            title="Support Requests"
            text="Total number of support requests that come in."
            height="190px"
            colorCode="#7759de"
            bgColor="secondary"
            staticData={Data.supportStatic.staticData}
            chartData={Data.supportStatic.staticChart}
          />
        </Col>
        <Col xl={8} md={12}>
          <Row>
            <Col xl="3" sm="6">
              <AverageStatics
                Icon={<FontAwesomeIcon icon={["fab", "bitcoin"]} />}
                data={Data.averageChart1}
                width="100%"
                height="145px"
                textColor="text-c-blue"
                title="Bitcoin"
                staticsTop="$80"
                numberBottom="Goal : $75"
                colorCode="#2196f3"
              />
            </Col>
            <Col xl="3" sm="6">
              <AverageStatics
                Icon={<FontAwesomeIcon icon={["fab", "ethereum"]} />}
                data={Data.averageChart1}
                width="100%"
                height="145px"
                textColor="text-c-green"
                title="Ethereum"
                staticsTop="$80"
                numberBottom="Goal : $75"
                colorCode="#4caf50"
              />
            </Col>
            <Col xl="3" sm="6">
              <AverageStatics
                Icon={<FontAwesomeIcon icon={["fab", "cloudsmith"]} />}
                data={Data.averageChart1}
                width="100%"
                height="145px"
                textColor="text-c-red"
                title="Ripple"
                staticsTop="$80"
                numberBottom="Goal : $75"
                colorCode="#f44336"
              />
            </Col>
            <Col xl="3" sm="6">
              <AverageStatics
                Icon={<FontAwesomeIcon icon={["fab", "asymmetrik"]} />}
                data={Data.averageChart1}
                width="100%"
                height="145px"
                textColor="text-c-yellow "
                title="Neo"
                staticsTop="$80"
                numberBottom="Goal : $75"
                colorCode="#ff9800"
              />
            </Col>
          </Row>
          <Row>
            <Col xl="3" md="6">
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
            <Col xl="3" md="6">
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
            <Col xl="3" md="6">
              <AverageStatics
                bgColor="bg-danger"
                data={Data.averageChart1}
                width="100%"
                height="145px"
                title="Total ticket Resolved"
                staticsTop="400"
                numberBottom="Pending : 75"
              />
            </Col>
            <Col xl="3" md="6">
              <AverageStatics
                bgColor="bg-warning "
                data={Data.averageChart2}
                width="100%"
                height="145px"
                title="Avg. Customer Satisfaction"
                staticsTop="75%"
                numberBottom="Reopen: 20%"
              />
            </Col>
          </Row>
        </Col>
        <Col md={12}>
          <CryptoCardStatics
            width="100%"
            height="247px"
            databtc={Data.databtc}
            dataeth={Data.dataeth}
            dataltc={Data.dataltc}
          />
        </Col>
      </Row>
    )
  }
}

export default ChartWidget
