import * as APIUtil from '../util/calendar_api_util';

export const RECEIVE_CALENDAR = 'RECEIVE_CALENDAR';
export const TOGGLE_CALENDAR = 'TOGGLE_CALENDAR';

export const toggleCalendar = () => ({
  type: TOGGLE_CALENDAR
})

export const receiveCalendar = calendar => ({
  type: RECEIVE_CALENDAR,
  calendar
})

export const fetchCalendar = userId => dispatch => {
  return APIUtil.fetchCalendar(userId).then(
    calendar => dispatch(receiveCalendar(calendar.data))
  )
}

export const addCalVideo = (calId, body) => dispatch => {
  return APIUtil.addCalVideo(calId, body).then(
    calendar => dispatch(receiveCalendar(calendar.data))
  )
}

export const deleteCalVideo = (calId, body) => dispatch => {
  return APIUtil.deleteCalVideo(calId, body).then(
    calendar => dispatch(receiveCalendar(calendar.data))
  )
}

