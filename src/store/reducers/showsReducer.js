import * as actions from '../actions/actionTypes';

const INITIAL_STATE = {
    list: [],
    search: '',
    selected: {},
    episode: {}
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.SHOWS_FETCHED:
        case actions.SHOWS_SEARCHED:
            return {
                ...state,
                list: action.payload
            };
        case actions.SHOWS_SEARCH_CHANGED:
            return {
                ...state,
                search: action.payload
            };
        case actions.SHOWS_FIND_ONE:
            return {
                ...state,
                selected: action.payload
            };
        case actions.SHOWS_FIND_LAST_EPISODE:
            return {
                ...state,
                episode: action.payload
            };
        default:
            return state;
    }
}
