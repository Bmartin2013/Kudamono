import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/Results';
import AppBar from './components/AppBar';


const App = ({ store }) => (
	<Provider store={store}>
		<AppBar appName="Kudamono v0.1"></AppBar>
		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/results" component={Results} />
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
