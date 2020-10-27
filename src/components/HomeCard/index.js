import React from 'react';
import { Card, Typography, Grid, TextField, Button } from '@material-ui/core';
import styles from './styles';

export default ({ title,
    inputPlaceholder,
    searchText,
    handleSearchTextChange,
    handleClear,
    handleSearch }) => {
    const classes = styles();

    return (

        <Card className={classes.cardContainer}>
            <Grid container className={classes.titleGridContainer}>
                <Grid>
                    <Typography variant="h4" className={classes.title} >{title}</Typography>
                </Grid>
                <TextField
                    color="secondary"
                    value={searchText}
                    className={classes.textField}
                    placeholder={inputPlaceholder}
                    onChange={handleSearchTextChange}>
                </TextField>
            </Grid>
            <Grid className={classes.buttonsContainer}>
                <Button variant="contained" onClick={handleClear}>Clear</Button>
                <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
            </Grid>
        </Card>
    )
}