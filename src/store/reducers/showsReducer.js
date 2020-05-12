import { SHOWS_FETCHED, SHOWS_SEARCH_CHANGED, SHOWS_SEARCHED } from '../actions/actionTypes';

const INITIAL_STATE = {
    list: [],
    search: ''
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SHOWS_FETCHED:
        case SHOWS_SEARCHED:
            return {
                ...state,
                list: action.payload
            };
        case SHOWS_SEARCH_CHANGED:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}
