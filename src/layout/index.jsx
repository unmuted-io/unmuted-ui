import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainLayout from '../containers/templateConfig/mainLayout'
import routes from '../extranalRoute'
import Spinner from '../components/spinner/Spinner'
import { attemptAutoLoginFromCookies, login } from '../redux/actions/authActions'
import axios from 'axios'

const { REACT_APP_FACEBOOK_APP_ID } = process.env

class Layout extends Component {
  fetchExchangeRateInterval

  componentDidMount = () => {
    // on dev will automatically log in
    // if (process.env.REACT_APP_ENVIRONMENT === 'dev') {
    //   const { dispatch, history } = this.props
    //   dispatch(login({ email: 'kylan.hurt@gmail.com', password: 'Test123456' }, history))
    // }
  }

  componentWillMount = () => {
    const { history, dispatch } = this.props
    dispatch(attemptAutoLoginFromCookies(history))
    this.fetchExchangeRates()
    // this.fetchExchangeRateInterval = setInterval(this.fetchExchangeRates, 10000 * 60)
    FB.getLoginStatus(function(response) {
      console.log('FB response: ', response)
      // {
      //   status: 'connected',
      //   authResponse: {
      //       accessToken: '...',
      //       expiresIn:'...',
      //       signedRequest:'...',
      //       userID:'...'
      //   }
      // }
    })

    initializeFacebook = () => {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : REACT_APP_FACEBOOK_APP_ID,
          cookie     : true,
          xfbml      : true,
          version    : '{api-version}'
        });

        FB.AppEvents.logPageView();

      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'))
    }

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
        price: rateData.price,
      }
      prices[rateData.currency] = newData
    })
    prices.TLOS = {
      currencyCode: 'TLOS',
      name: 'Telos',
      price: '0.03',
    }
    dispatch({ type: 'UPDATE_EXCHANGE_RATES', data: prices })
  }

  componentWillUnmount = () => {
    clearInterval(this.fetchExchangeRateInterval)
  }

  render() {
    const menu = routes.map((route, index) => {
      // @ts-ignore
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={props => <route.component {...props} />}
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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
