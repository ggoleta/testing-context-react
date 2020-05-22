import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const appearFromTheBottom = keyframes`
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  padding: 30px;
  border: 0;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  transition: all 0.2s ease;

  animation: ${appearFromTheBottom} 0.5s ease-in-out;

  &:hover {
    transform: scale(0.9)
  }

  img {
    margin-bottom: 10px;
    width: 70px;
    border-radius: 50%;
  }
`;

export const Test = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  padding: 10px;
  color: #fff;
  background: #000;
  border-radius: 5px;
`;