import React, { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'

import { Container, Info, Details } from './styles'

const Description = ({ match }) => {
  const { login: username } = match.params;
  const githubContext = useContext(GithubContext);
  
  useEffect(() => {
    githubContext.getUser(username);
    //eslint-disable-next-line
  },[]); 

  const { login, avatar_url, location, bio } = githubContext.user;

  return (
    <Container>
      <Info>
        <img src={avatar_url} alt={login}/>
        <div>
          <strong>{login}</strong>
          <small>{location}</small>
        </div>
      </Info>

      <Details>
        <p>{bio}</p>
      </Details>
    </Container>
  );
}

export default Description;