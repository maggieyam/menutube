import axios from 'axios';

export const createPost = postData => {
  return axios.post('/api/posts/create', postData);
}

export const fetchPost = postId => {
  return axios.get(`/api/posts/${postId}`);
}

export const fetchPosts = () => {
  return axios.get('/api/posts/');
}

export const fetchUserPosts = () => {
  return axios.get('/api/posts/user/5fc65d661d78856736687b9d');
}


