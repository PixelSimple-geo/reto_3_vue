import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 5000,
});

console.log('Base URL:', instance.defaults.baseURL);

export default instance;
