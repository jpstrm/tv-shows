import { CONFIG } from '../../config/config';
import * as actions from './actionTypes';
import axios from 'axios';
import ShowApi from '../../api/showApi';

/**
 * TODO Handle findAll with search to avoid conflict
 * @returns {function(...[*]=)}
 */
export const findAll = () => {
    return (dispatch) => {
        axios.get(`${CONFIG.apiUrl}/shows`)
            .then(({data}) => {
                const shows = data.map(({id, image}) => ({id, image}));

                dispatch({
                    type: actions.SHOWS_FETCHED,
                    payload: shows
                })
            });
    }
};

export const updateSearch = (event) => {
    return {
        type: actions.SHOWS_SEARCH_CHANGED,
        payload: event.target.value
    };
};

export const searchByName = () => {
    return (dispatch, getState) => {
        const searchValue = getState().shows.search;

        new ShowApi().searchByName(searchValue)
            .then(data => {
                const shows = data.map(mapToShow);
                dispatch({
                    type: actions.SHOWS_SEARCHED,
                    payload: shows
                });
            });
    }
};

export const findById = (id) => {
    return (dispatch) => {
        new ShowApi().findById(id).then(show => {
            dispatch({
                type: actions.SHOWS_FIND_ONE,
                payload: show
            });
        });
    }
};

export const findAllSeasons = () => {
    return (dispatch, getState) => {
        const showId = getState().shows.selected.id;
        new ShowApi().findAllSeasons(showId).then(show => {
            dispatch({
                type: actions.SHOWS_SEASONS_FETCHED,
                payload: show
            })
        });
    }
};

export const findAllEpisodes = (season) => {
    return (dispatch) => {
        new ShowApi().findAllEpisodesBySeason(season).then(episodes => {
            dispatch({
                type: actions.SHOWS_EPISODES_FETCHED,
                payload: episodes
            })
        });
    }
};

export const findLastEpisode = () => {
    return (dispatch, getState) => {
        const { _links } = getState().shows.selected;

        new ShowApi().findLastEpisode(_links).then(show => {
            dispatch({
                type: actions.SHOWS_FIND_LAST_EPISODE,
                payload: show
            })
        });
    }
};

export const clearSelected = () => ({
    type: actions.SHOWS_CLEAR_SELECTED
});

const mapToShow = (show) => (
    {
        id: show.id,
        name: show.name,
        image: show.image,
        runtime: show.runtime,
        status: show.status,
        type: show.type,
        genres: show.genres,
        summary: show.summary,
        _links: show._links
    }
);
