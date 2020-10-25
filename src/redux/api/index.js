import axios from 'axios';

const baseUrl = ' http://localhost:3010/fruits';

export const apiCall = ({ url, data, headers, method }) => axios({
    method,
    url: baseUrl + url,
    data,
    headers
});