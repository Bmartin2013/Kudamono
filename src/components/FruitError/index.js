import React from 'react';
import {
    Typography,
    Grid,
    Card,
    Link
} from '@material-ui/core';

import styles from './styles';

const FruitDetails = ({ title, history }) => {
    const classes = styles();

    const handleLink = () => {
        history.push('./')
    }

    return (
        <Card className={classes.cardContainer}>
            <Grid container className={classes.titleGridContainer}>
                <Grid>
                    <Typography variant="h5" className={classes.title} >{title}</Typography>
                </Grid>
            </Grid>
            <Link
                color="secondary"
                component="button"
                variant="body2"
                className={classes.link}
                onClick={handleLink}
            >
                To home page
            </Link>
        </Card>
    )
}

export default FruitDetails