import * as APIUtil from '../util/calendar_api_util';

export const RECEIVE_CALENDAR = 'RECEIVE_CALENDAR';

export const receiveCalendar = calendar => ({
  type: RECEIVE_CALENDAR,
  calendar
})

export const fetchCalendar = userId => dispatch => {
  return APIUtil.fetchCalendar(userId).then(
    calendar => dispatch(receiveCalendar(calendar.data))
  )
}