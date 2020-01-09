import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import MainLayout from '../containers/templateConfig/mainLayout'
import routes from "../extranalRoute";
import Spinner from '../components/spinner/Spinner';
import { attemptAutoLoginFromCookies } from '../redux/actions/authActions'
import { withRouter } from 'react-router-dom'

class Layout extends Component {
    componentWillMount = () => {
        const { history, attemptAutoLoginFromCookies } = this.props
        attemptAutoLoginFromCookies(history)
    }

    render() {
        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        return (
            <Suspense fallback={<Spinner />}>
                <Switch>
                    {menu}
                    <Route path="/" component={MainLayout} />
                </Switch>
            </Suspense>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.auth.account
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        attemptAutoLoginFromCookies: (history) => dispatch(attemptAutoLoginFromCookies(history))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))