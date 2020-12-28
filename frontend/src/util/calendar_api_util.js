import axios from 'axios';

export const fetchCalendar = userId => {
  return axios.get(`api/calendar/user/${userId}`);
}