import { GET_USERS, GET_USER, SET_LOADING } from '../types'

export default (state, action) => {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    default:
      return;
  }
}