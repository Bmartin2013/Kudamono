import { Container } from '@material-ui/core';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AppBar from '../AppBar';

const Layout = ({ appName }) => {

    const LazyHome = lazy(() => import('../../pages/Home'));
    const LazyResults = lazy(() => import('../../pages/Results'));

    return (
        <Container>
            <AppBar appName={appName}></AppBar>
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LazyHome} />
                        <Route path="/results" component={LazyResults} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </Suspense>
        </Container>
    )
}

export default Layout;