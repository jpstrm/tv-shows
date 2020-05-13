import axios from 'axios';
import { CONFIG } from '../config/config';

export default class ShowApi {

    findById = (id) => {
        return axios.get(`${CONFIG.apiUrl}/shows/${id}`)
            .then((({data}) => data));
    };

    findLastEpisode = (_links) => {
        _links = _links || '';
        if (_links) {
            return axios.get(_links.previousepisode.href)
                .then((({data}) => data));
        } else {
            return Promise.resolve({});
        }
    };

    findAll = () => {
        return axios.get(`${CONFIG.apiUrl}/shows`)
            .then((({data}) => data));
    };

    searchByName = (searchValue) => {
        const search = searchValue ? `?q=${searchValue}` : '';

        return axios.get(`${CONFIG.apiUrl}/search/shows${search}`)
            .then(({data}) => data.map(({show}) => show));
    };

}
