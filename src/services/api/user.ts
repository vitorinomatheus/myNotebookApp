import { CreateUserDto } from './dtos/createUser.dto';
import { ListUserDto } from './dtos/listUser.dto';
import { API_URL, USER_URL } from './api_constants';
import axios from "axios"

export const listUsers = (listUserDto: ListUserDto) => {
    return axios.get(API_URL + USER_URL)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}

export const createUser = (createUserDto: CreateUserDto) => {
    return axios.post(API_URL + USER_URL, createUserDto)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
}