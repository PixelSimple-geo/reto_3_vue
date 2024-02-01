import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost',
    timeout: 5000,
});

export default instance;
