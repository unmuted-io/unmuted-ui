import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from '../containers/templateConfig/mainLayout'
import routes from "../extranalRoute";
import Spinner from '../components/spinner/Spinner';

class Layout extends Component {
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

export default Layout;