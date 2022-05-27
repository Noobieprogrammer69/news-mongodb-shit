import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://news-mongodb-shit.vercel.app'
});

export default instance;