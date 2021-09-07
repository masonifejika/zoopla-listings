import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001/listings',
    headers: { 'Content-Type': 'application/json' }
});