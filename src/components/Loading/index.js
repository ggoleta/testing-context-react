import React from 'react';

import { Container } from './styles'

import logoLoader from '../../assets/spinner.gif'

const Loading = () => <Container>
  <img src={logoLoader} alt=""/>
</Container>

export default Loading;