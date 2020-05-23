import React, { useReducer } from 'react'
import api from '../../services/api'
import GithubReducer from './GithubReducer';
import GithubContext from './githubContext'
import { GET_USERS, GET_USER, SET_LOADING } from '../types'

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {

  const initialState = {
    users: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => dispatch({type: SET_LOADING})

  const getUsers = async () => {
    setLoading();
    const response = await api.get('/users');
    dispatch({
      type: GET_USERS,
      payload: response.data,
    })
  }

  const getUser = async (username) => {
    setLoading();
    const response = await api.get(`/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)

    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      loading: state.loading,
      setLoading,
      getUsers,
      getUser
    }}
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;