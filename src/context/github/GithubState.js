import React, { useReducer } from 'react'
import api from '../../services/api'
import GithubReducer from './GithubReducer';
import GithubContext from './githubContext'
import { GET_USERS, GET_USER } from '../types'

const GithubState = props => {

  const initialState = {
    users: [],
    user: {}
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const getUsers = async () => {
    const response = await api.get('/users');
    
    dispatch({
      type: GET_USERS,
      payload: response.data,
    })
  }

  const getUser = async (username) => {
    const response = await api.get(`/users/${username}`)

    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      getUsers,
      getUser
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;