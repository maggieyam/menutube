import axios from 'axios';

export const fetchTags = () => {
  return axios.get('/api/tags')
}

