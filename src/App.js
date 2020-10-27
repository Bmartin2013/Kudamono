import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/Results';
import Layout from './components/Layout'
import watermelon from './themes/watermelon'

const App = ({ store }) => (
	<Provider store={store}>
	<ThemeProvider theme={watermelon}>
		<Layout 
			appName="Kudamono"
			Home={Home}
			Results={Results}>
		</Layout>
	</ThemeProvider>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
