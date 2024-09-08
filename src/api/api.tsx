import axios from "axios";
import { User } from "../types/user.interface";

const baseUrl = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL: baseUrl, 
});

export const userAPI = {
    getUsers() {
      return instance.get('/users') 
        .then<User[]>(response => {
          return response.data;
        });
    },
  };
  