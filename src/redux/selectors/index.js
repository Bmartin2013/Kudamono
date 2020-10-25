import {get} from 'lodash';

export const isSearchLoading = state => get(state,'search.isLoading');
export const fruitResults = state => get(state,'search.fruitResults');