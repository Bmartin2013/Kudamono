import React, { useState } from 'react';
import { Card, Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import styles from '../styles/styles';

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
		history.push(`/results?fruitName=${searchText}`);
	}

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography variant="h4">Choose your fruit!</Typography>
					</Grid>
					<Grid>
						<AppleIcon className={classes.fruitIcon} />
					</Grid>
					<TextField
						value={searchText}
						className={classes.textField}
						placeholder="Search fruit..."
						onChange={handleSearchTextChange}>
					</TextField>
				</Grid>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleClear}>Clear</Button>
					<Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
				</Grid>
			</Card>
		</Container>
	)
}