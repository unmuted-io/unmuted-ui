import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "reactstrap";
import Data from "./data";
import StaticData from "./staticData";
import AverageStatics from "../../components/cards/basicStaticXYCard/averageStatics";
import CryptoCardStatics from "../../components/cards/basicStaticXYCard/cryptoCardStatics";
import CryptoStatisTics from "../../components/cards/basicsStaticCards/cryptoStatistics";
import CoinMarketStatics from "../../components/cards/basicsStaticCards/coinMarketStaticsTable";
import SiteCardCryptoStatics from "../../components/cards/basicStaticXYCard/siteCardCryptoStatics";
import StaticSliderDark from "../../components/cards/carouselCard/staticSliderCard";

class Crypto extends Component {
  render() {
    return (
      <Row>
        <Col sm={12}>
          <StaticSliderDark dark items={StaticData.sliderDataDark} />
        </Col>
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
        <Col xl="8" md="12">
          <Row>
            <Col md="12">
              <CryptoCardStatics
                width="100%"
                height="247px"
                databtc={Data.databtc}
                dataeth={Data.dataeth}
                dataltc={Data.dataltc}
              />
            </Col>
          </Row>
          <Row className="no-gutters">
            <Col xl="3" md="3" sm="6">
              <SiteCardCryptoStatics
                title="Page bounce rate"
                change="0.50%"
                height="20px"
                color="#f44336"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="3" md="3" sm="6">
              <SiteCardCryptoStatics
                title="Revenue"
                change="$2,45,789"
                height="20px"
                color="#2196f3"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="3" md="3" sm="6">
              <SiteCardCryptoStatics
                title="New Purchases"
                change="45"
                height="20px"
                color="#4caf50"
                data={Data.sitCryptoStatics}
              />
            </Col>
            <Col xl="3" md="3" sm="6">
              <SiteCardCryptoStatics
                title="Current stock"
                change="61"
                height="20px"
                color="#FF9800"
                data={Data.sitCryptoStatics}
              />
            </Col>
          </Row>
        </Col>
        <Col xl="4" md="6">
          <CryptoStatisTics
            title="Crypto statistics"
            cryptoStatist={Data.cryptoStatist}
          />
        </Col>
        <Col xl="12" md="6">
          <CoinMarketStatics title="Coin Market" coinData={Data.coinData} />
        </Col>
      </Row>
    );
  }
}

export default Crypto;
