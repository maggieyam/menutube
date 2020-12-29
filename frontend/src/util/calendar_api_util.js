import axios from 'axios';

export const fetchCalendar = userId => {
  return axios.get(`api/calendar/user/${userId}`);
}

export const addCalVideo = (calId, body) => {
  return axios.post(`api/calendar/${calId}`, body);
}

export const deleteCalVideo = (calId, body) => {
  return axios.patch(`api/calendar/${calId}`, body);
}