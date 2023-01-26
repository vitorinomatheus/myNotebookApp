import { API_URL, USER_URL } from './api_constants';
import axios from "axios"

export const listUsers = () => {
    return axios.get(API_URL + USER_URL)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}