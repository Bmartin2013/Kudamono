import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import queryString from 'query-string';

import FruitDetails from '../../components/FruitDetails'
import searchFruit from '../../redux/actions/search'
import { fruitResults } from '../../redux/selectors';

export default ({ location }) => {
    const dispatch = useDispatch();
    const fruits = useSelector(state => fruitResults(state))

    useEffect(() => {
        const { fruitName } = queryString.parse(location.search);
        if (fruitName && !fruits)
            dispatch(searchFruit({ fruitName }));
    })

    const renderFruits = () => {
        if (fruits)
            return fruits.map((value, index) => <FruitDetails key={index}{...value}></FruitDetails>)
    }

    return (
        <Container>
            {renderFruits()}
        </Container>

    )
}