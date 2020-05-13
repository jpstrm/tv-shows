import axios from 'axios';
import { CONFIG } from '../../config/config';

export default class ShowService {

    findById = (id) => {
        return axios.get(`${CONFIG.apiUrl}/shows/${id}`)
            .then((({data}) => data));
    }


}
