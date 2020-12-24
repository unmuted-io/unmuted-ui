import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import MainLayout from '../containers/templateConfig/mainLayout'
import routes from '../extranalRoute'
import Spinner from '../components/spinner/Spinner'
import { attemptAutoLoginFromCookies, login } from '../redux/actions/authActions'
import axios from 'axios'

class Layout extends Component {
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
    // this.fetchExchangeRateInterval = setInterval(this.fetchExchangeRates, 10000 * 60)
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
    dispatch,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
