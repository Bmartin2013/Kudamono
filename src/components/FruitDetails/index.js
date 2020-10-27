import React from 'react';
import {
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Grid,
    TableContainer,
    Link
} from '@material-ui/core';

import styles from './styles';

const FruitDetails = ({ name, family, nutritions, history }) => {
    const classes = styles();

    const renderNutritionKeys = () => {
        if (nutritions)
            return Object.getOwnPropertyNames(nutritions).map((nutriName, index) => <TableCell key={index} align="right">{nutriName}&nbsp;(g)</TableCell>);
    }

    const renderNutritionValues = () => {
        if (nutritions)
            return Object.values(nutritions).map((nutriValue, index) => <TableCell key={index} align="right">{nutriValue}</TableCell>);
    }

    const handleLink = () => {
        history.push('./')
    }

    return (
        <Grid container>
            <Typography variant="h5" className={classes.title}>{name}</Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Fruit Family</TableCell>
                            {renderNutritionKeys()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">{family}</TableCell>
                            {renderNutritionValues()}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Link
                color="secondary"
                component="button"
                variant="body2"
                className={classes.link}
                onClick={handleLink}
            >
                To home page
            </Link>
        </Grid>
    )
}

export default FruitDetails