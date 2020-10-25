import { SEARCH_FRUIT_START } from '../../consts/actionTypes'

const searchFruit = payload => {
    return {
        type: SEARCH_FRUIT_START,
        payload
    }
};

export default searchFruit;