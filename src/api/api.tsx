import axios from "axios";
import { User } from "../types/user.interface";
import { Post } from "../types/post.interface";

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
    getUser(userId: number) {
      return instance.get(`/users/${userId}`)
        .then(response => {
          return response.data;
        });
    }
  };

  export const postsAPI = {
    getPosts() {
      return instance.get(`/posts`)
        .then<Post[]>(response => {
          return response.data;
        });
    },
    getPostComments(postId: number) {
      return instance.get(`/comments?postId=${postId}`)
        .then(response => {
          return response.data;
        });
    }
  }
  