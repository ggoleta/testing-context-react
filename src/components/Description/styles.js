import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  max-width: 800px;
  padding: 30px;
  border: 0;
  background: #f1f1f1;
  border-radius: 5px;
  margin: 0 auto;
  z-index: 0;

  animation: ${cameFromTop} 0.5s ease-in-out;
`;

export const Info = styled.div`
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
`;
export const Details = styled.div``;