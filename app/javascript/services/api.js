import axios from 'axios';
const Api = axios.create({baseURL: 'http://localhos:300/api/v1'});

export default Api;