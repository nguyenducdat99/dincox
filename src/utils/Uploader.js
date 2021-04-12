// import module, constants
import axios from 'axios';
import * as configs from '../constants/Config';

export default async function callApi(endpoint, method, body) {
    return await axios(
        {
            method: method,
            url: ''+configs.API_URL+'/'+endpoint,
            data: body,
            header: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
        }
    ).catch(
        err => {
            console.log(err);
        }
    )
}
