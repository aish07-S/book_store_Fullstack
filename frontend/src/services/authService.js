import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

/**
 * Registers a new user by making a POST request to the /register endpoint.
 * @param {object} userData - The user's registration data.
 * @param {string} userData.email - The user's email.
 * @param {string} userData.phoneNumber - The user's phone number.
 * @param {string} userData.password - The user's password.
 * @returns {Promise} - The axios promise from the API call.
 */
const register = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};


const login = (credentials) => {
    // return axios.post(`${API_URL}/login`, credentials);
};



const authService = {
    register,
    login,
};

export default authService;