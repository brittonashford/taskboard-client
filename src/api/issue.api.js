import axios from 'axios';
const BASE_URL = 'https://localhost:7283/Issue';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});