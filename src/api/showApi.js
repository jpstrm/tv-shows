import axios from 'axios';
import { CONFIG } from '../config/config';

export default class ShowApi {

    findById = (id) => {
        return axios.get(`${CONFIG.apiUrl}/shows/${id}`)
            .then((({data}) => data));
    };

    findAll = () => {
        return axios.get(`${CONFIG.apiUrl}/shows`)
            .then((({data}) => data));
    };

    findAllSeasons = (showId) => {
        return axios.get(`${CONFIG.apiUrl}/shows/${showId}/seasons`)
            .then((({data}) => data));
    };

    findLastEpisode = (_links) => {
        const { href } = _links.previousepisode;
        const url = href.replace('http', 'https');

        return axios.get(url)
            .then((({data}) => data));
    };

    findAllEpisodesBySeason = (showId, season) => {
        return axios.get(`${CONFIG.apiUrl}/shows/${showId}/episodes`)
            .then((({data}) => data));
    };

    searchByName = (searchValue) => {
        const search = searchValue ? `?q=${searchValue}` : '';

        return axios.get(`${CONFIG.apiUrl}/search/shows${search}`)
            .then(({data}) => data.map(({show}) => show));
    };

}
