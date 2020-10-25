import React, { useState } from 'react';
import { capitalize } from '../../utils'
import { Container } from '@material-ui/core';

import HomeCard from '../../components/HomeCard'
import styles from '../../styles';

export default ({ history }) => {
	const [searchText, setSearchText] = useState('');
	const classes = styles();

	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
	}

	const handleClear = () => {
		setSearchText('');
	}

	const handleSearch = () => {
		history.push(`/results?fruitName=${capitalize(searchText)}`);
	}

	return (
		<Container className={classes.container}>
			<HomeCard
				title="Choose your fruit!"
				handleSearchTextChange={handleSearchTextChange}
				handleSearch={handleSearch}
				handleClear={handleClear}
				searchText={searchText}
				inputPlaceholder="type your favorite fruit (e.g. Apple)"
			></HomeCard>
		</Container>
	)
}