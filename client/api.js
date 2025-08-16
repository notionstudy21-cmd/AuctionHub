// client/src/api.js
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || '';

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // optional, for cookies
});

export default api;
