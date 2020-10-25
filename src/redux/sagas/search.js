import { put, call, takeLatest } from 'redux-saga/effects'
import {
    SEARCH_FRUIT_START,
    SEARCH_FRUIT_ERROR,
    SEARCH_FRUIT_COMPLETE
} from '../../consts/actionTypes'

import { apiCall } from '../api'

export function* searchFruit({ payload }) {
    try {
        const results = yield call(apiCall, {
            url: `?name=${payload.fruitName}`
            , data: null
            , headers: { 'Access-Control-Allow-Origin': '*' }
            , method: 'GET'
        });

        yield put({ type: SEARCH_FRUIT_COMPLETE, results })
    }
    catch (error) {
        yield put({ type: SEARCH_FRUIT_ERROR, error })
    }
}

export default function* search() {
    yield takeLatest(SEARCH_FRUIT_START, searchFruit);
}