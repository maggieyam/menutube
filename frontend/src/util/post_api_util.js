import axios from 'axios';
window.axios = axios;

export const createPost = postData => {
  return axios.post('/api/posts/create', postData);
}

export const fetchPost = postId => {
  return axios.get(`/api/posts/${postId}`);
}

export const fetchPosts = () => {
  return axios.get('/api/posts/');
}

// export const fetchSavedPosts = userId => {
//   return axios.get(`/api/posts/saved/${userId}`);
// }

export const fetchUserPosts = userId => {
  return axios.get(`api/posts/user/${userId}`);
}

export const savePost = (postId, body) => {
  return axios.post(`api/posts/save/${postId}`, body)
}

export const unsavePost = (postId, userId) => {
  return axios.delete(`api/posts/unsave/${postId}?userId=${userId}`)
}

export const editPost = (postId, body) => {
  return axios.patch(`api/posts/edit/${postId}`, body)
}
export const deletePost = (postId) => {
  return axios.delete(`api/posts/delete/${postId}`);
};
