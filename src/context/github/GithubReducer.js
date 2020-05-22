import { GET_USERS, GET_USER } from '../types'

export default (state, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return;
  }
}