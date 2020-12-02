import axios from 'axios';

export const createPost = postData => {
  return axios.post('/api/posts/create', postData);
}

export const fetchPost = postId => {
  return axios.post(`/api/posts/${postId}`);
}

export const fetchPosts = () => {
  return axios.post('/api/posts');
}


