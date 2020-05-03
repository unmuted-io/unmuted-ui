import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainLayout from '../containers/templateConfig/mainLayout'
import routes from '../extranalRoute'
import Spinner from '../components/spinner/Spinner'
import { attemptAutoLoginFromCookies } from '../redux/actions/authActions'

import axios from 'axios'

class Layout extends Component {
  fetchExchangeRateInterval

  componentWillMount = () => {
    const { history, dispatch } = this.props
    dispatch(attemptAutoLoginFromCookies(history))
    this.fetchExchangeRates()
    this.fetchExchangeRateInterval = setInterval(this.fetchExchangeRates, 10000 * 60)
  }

  fetchExchangeRates = async () => {
    const { dispatch } = this.props
    const { REACT_APP_NOMICS_API_KEY, REACT_APP_NOMICS_API_BASE_URL } = process.env
    const response = await axios.get(
      `${REACT_APP_NOMICS_API_BASE_URL}/currencies/ticker?key=${REACT_APP_NOMICS_API_KEY}&ids=BTC,ETH,EOS`
    )
    console.log('response.data: ', response.data)
    const prices = {}
    response.data.forEach(rateData => {
      const newData = {
        currencyCode: rateData.currency,
        name: rateData.name,
        price: rateData.price
      }
      prices[rateData.currency] = newData
    })
    dispatch({ type: 'UPDATE_EXCHANGE_RATES', data: prices })
  }

  componentWillUnmount = () => {
    clearInterval(this.fetchExchangeRateInterval)
  }

  render () {
    const menu = routes.map((route, index) => {
      // @ts-ignore
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null
    })

    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {menu}
          <Route path="/" component={MainLayout} />
        </Switch>
      </Suspense>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
