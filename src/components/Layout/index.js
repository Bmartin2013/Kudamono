import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppBar from '../AppBar';

const Layout = ({ appName, Home, Results }) => {

    return (
        <Container>
            <AppBar appName={appName}></AppBar>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/results" component={Results} />
                </div>
            </Router>
        </Container>
    )
}

export default Layout;