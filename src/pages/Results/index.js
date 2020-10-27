import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import queryString from 'query-string';

import FruitDetails from '../../components/FruitDetails'
import FruitError from '../../components/FruitError'
import searchFruit from '../../redux/actions/search'
import { fruitResults } from '../../redux/selectors';

export default ({ location, history }) => {
    const dispatch = useDispatch();
    const fruits = useSelector(state => fruitResults(state))

    useEffect(() => {
        const { fruitName } = queryString.parse(location.search);

        if (!fruits || fruits[0].name !== fruitName)
            dispatch(searchFruit({ fruitName }));
    })

    const renderFruits = () => {
        if (fruits)
            return fruits.map((value, index) => <FruitDetails history={history} key={index}{...value}></FruitDetails>)
    }

    const renderError = () => {
        return <FruitError history={history} title="Fruit not found! Try searching another one"
            description="please try again searching another fruit"></FruitError>
    }

    return (
        <Container>
            {fruits ? renderFruits() : renderError()}
        </Container>
    )
}