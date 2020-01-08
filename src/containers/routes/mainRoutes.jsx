import React, { Suspense } from 'react';
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../routse'
import Spinner from '../../components/spinner/Spinner';

const Routes = props => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {
        routes.map((obj, i) => {
          return (obj.component) ? (<Route
            key={i}
            exact={obj.exact}
            path={obj.path}
            render={matchProps => (
              obj.protected ? (
                props.account ? (
                  <obj.component {...matchProps} />
                ) : (
                  <Redirect from="/" to="/login" />
                )
              ) : (
                <obj.component {...matchProps} />
              )
            )}
          />) : (null)
          })
        }
      <Redirect from="/" to={props.defaultPath} />
    </Switch>
  </Suspense>
)

const mapStateToProps = (state) => {
  return {
    account: state.auth.account
  }
}

export default connect(mapStateToProps)(Routes)