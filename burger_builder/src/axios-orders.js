import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-ea147.firebaseio.com/'
});

export default instance;
