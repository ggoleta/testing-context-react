import React from 'react';
import PropTypes from 'prop-types'

import { Container, Test } from './styles'

const User = ({ avatar_url, login }) => {
  return (
    <Container>
      <img src={avatar_url} alt={login}/>
      <strong>{login}</strong>
      <Test to={`/description/${login}`}>See more</Test>
    </Container>
    
  );
}

User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
}

export default User;