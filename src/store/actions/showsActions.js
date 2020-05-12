// Action creator

import { CONFIG } from '../../config/config';
import { SHOWS_FETCHED, SHOWS_SEARCH_CHANGED, SHOWS_SEARCHED } from './actionTypes';
import axios from 'axios';

/**
 * TODO Handle findAll with search to avoid conflict
 * @returns {function(...[*]=)}
 */
export const findAll = () => {
    return (dispatch) => {
        axios.get(`${CONFIG.apiUrl}/shows`)
            .then(({data}) => dispatch({
                type: SHOWS_FETCHED,
                payload: data
            }));
    }
};

export const updateSearch = (event) => {
    return {
        type: SHOWS_SEARCH_CHANGED,
        payload: event.target.value
    };
};

export const search = () => {
    return (dispatch, getState) => {
        console.log('test', getState().shows);
        const searchValue = getState().shows.search;
        const search = searchValue ? `?q=${searchValue}` : '';

        axios.get(`${CONFIG.apiUrl}/search/shows${search}`)
            .then((({data}) => {
                const movies = data.map(d => d.show);
                console.log(movies);
                dispatch({
                    type: SHOWS_SEARCHED,
                    payload: movies
                });
            }));
    }
};

