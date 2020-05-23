import React, { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import User from '../User'

import { Container } from './styles'
import Loading from '../Loading'

const Users = () => {
  const githubContext = useContext(GithubContext);
  
  useEffect(() => {
    githubContext.getUsers();
    //eslint-disable-next-line
  },[])

  if(githubContext.loading) return <Loading />

  return (
    
    <Container>
      {githubContext.users.map( user => (
        <User key={user.id} login={user.login} avatar_url={user.avatar_url} />
      ))}
      </Container>
  );
}

export default Users;