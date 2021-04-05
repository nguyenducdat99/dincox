// import module, constands
import axios from 'axios';
import * as configs from '../constands/Config';

export default async function callApi(endpoint, method, body) {
    const token = localStorage.getItem('token');

    return await axios(
        {
            method: method,
            url: ''+configs.API_URL+'/'+endpoint,
            data: body,
            headers: {
                'Authorization': token
            }
        }
    ).catch(
        err => {
            console.log(err);
        }
    )
}
