import React from 'react';
import { Card, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography, Grid, TableContainer, Container } from '@material-ui/core';
import styles from './styles';
const FruitDetails = ({ name, family, nutritions }) => {
    const classes = styles();

    return (

        <Container className={classes.container}>
            <Grid container>
                <Typography variant="h5" className={classes.title}>{name}</Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Fruit Family</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {family}
                                </TableCell>
                                <TableCell align="right">{nutritions.calories}</TableCell>
                                <TableCell align="right">{nutritions.fat}</TableCell>
                                <TableCell align="right">{nutritions.carbohydrates}</TableCell>
                                <TableCell align="right">{nutritions.protein}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
    )
}

export default FruitDetails