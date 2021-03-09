// import module, constands
import axios from 'axios';
import * as configs from '../constands/Config';

export default function callApi(endpoint, method, body) {
    return axios(
        {
            method: method,
            url: ''+configs.API_URL+'/'+endpoint,
            data: body
        }
    ).catch(
        err => {
            console.log(err);
        }
    )
}
