import React from 'react';
import PropTypes from 'prop-types';

import { Container, Test } from './styles'

const User = ({ login, avatar_url }) => {

  return (
    <Container>
      <img src={avatar_url} alt={login}/>
      <strong>{login}</strong>
      <Test to={`/description/${login}`}>See more</Test>
    </Container>
  );
}

User.prototypes = {
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
}

export default User;