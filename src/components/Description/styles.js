import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom'

const cameFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 10px;
  font-weight: 500;
  color: #000;
  transform: all 0.3s;
  text-decoration: none;

  &:hover{
    opacity: 0.7;
  }

`;

export const Container = styled.div`
  max-width: 800px;
  border: 0;
  margin: 0 auto;
  z-index: 0;

  animation: ${cameFromTop} 0.5s ease-in-out;
`;

export const Info = styled.div`
  background: #f1f1f1;
  border-radius: 5px;
  padding: 30px;
  
  div {
    display: flex;
    align-items: center;
    img {
      width: 70px;
      border: 2px solid #fff;
      border-radius: 50%;
      margin-right: 10px;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
  
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin-top: 15px;
    text-align: center;
  }
`;