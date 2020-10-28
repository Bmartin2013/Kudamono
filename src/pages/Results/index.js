import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import queryString from 'query-string';

import FruitDetails from '../../components/FruitDetails'
import searchFruit from '../../redux/actions/search'
import { fruitResults } from '../../redux/selectors';

export default ({ location, history }) => {
    const dispatch = useDispatch();
    const fruits = useSelector(state => fruitResults(state))
    const { fruitName } = queryString.parse(location.search);

    useEffect(() => {
        dispatch(searchFruit({ fruitName }));
    }, [fruitName])

    const renderFruits = () => {
        if (fruits)
            return fruits.map((value, index) => <FruitDetails history={history} key={index}{...value}></FruitDetails>)
    }

    return (
        <Container>
            {renderFruits()}
        </Container>
    )
}