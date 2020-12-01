import axios from 'axios';

export const createPost = postData => {
  return axios.post('/api/posts', postData);
}



