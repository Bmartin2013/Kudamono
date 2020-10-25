import {
    SEARCH_FRUIT_START,
    SEARCH_FRUIT_ERROR,
    SEARCH_FRUIT_COMPLETE
} from '../../consts/actionTypes'


const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_FRUIT_START:
            return { ...state };
        case SEARCH_FRUIT_ERROR:
            return { ...state, fruitResults: null };
        case SEARCH_FRUIT_COMPLETE:
            return { ...state, fruitResults: action.results.data };
        default:
            return {...state};
    }
}