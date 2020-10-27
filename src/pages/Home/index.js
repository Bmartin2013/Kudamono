import React, { useState } from 'react';
import { capitalize } from '../../utils'
import { Container } from '@material-ui/core';

import HomeCard from '../../components/HomeCard'
import CustomSnackbar from '../../components/CustomSnackbar'

export default ({ history }) => {
	const [searchText, setSearchText] = useState('');
	const [open, setOpen] = useState(false);

	const handleSearchTextChange = event => {
		setSearchText(event.target.value);
	}

	const handleClear = () => {
		setSearchText('');
	}

	const handleSearch = () => {
		if (searchText)
			history.push(`/results?fruitName=${capitalize(searchText)}`);
		else
			setOpen(true);
	}
	
	const handleSnackClose = () => {
		setOpen(false);
	}

	return (
		<Container>
			<CustomSnackbar open={open}
				handleClose={handleSnackClose}
				message="Fruit input cannot be empty!">
			</CustomSnackbar>
			<HomeCard
				title="Choose your fruit!"
				handleSearchTextChange={handleSearchTextChange}
				handleSearch={handleSearch}
				handleClear={handleClear}
				searchText={searchText}
				inputPlaceholder="Type your favorite fruit (e.g. Apple)"
			></HomeCard>
		</Container>
	)
}