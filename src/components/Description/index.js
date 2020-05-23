import React, { useEffect, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import { Container, Info, Details, Button } from './styles'
import Loading from '../Loading'

const Description = ({ match }) => {
  const { login: username } = match.params;
  const githubContext = useContext(GithubContext);
  
  useEffect(() => {
    githubContext.getUser(username);
    //eslint-disable-next-line
  },[]); 

  const { login, avatar_url, location, bio } = githubContext.user;

  if(githubContext.loading) return <Loading />

  return (
    <>
      <Container>
      <Button to="/">Back</Button>
        <Info>
          <div>
            <img src={avatar_url} alt={login}/>
            <div>
              <strong>{login}</strong>
              <small>{location}</small>
            </div>
          </div>

          {/* only show bio if has one */}
          {bio && <Details>
            <h3>Bio</h3>
            <p>{bio}</p>
          </Details>}

          
        </Info>

      </Container>
    </>
  );
}

export default Description;