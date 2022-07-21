/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Donuts from '../SetCity/images/donutss.png';

const blastRipple = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgb(239, 173, 174), 0 0 0 10px rgb(239, 173, 174), 0 0 0 30px rgb(239, 173, 174), 0 0 0 60px rgb(239, 173, 174);
    }
    100% {
        box-shadow: 0 0 0 10px rgb(239, 173, 174), 0 0 0 30px rgb(239, 173, 174), 0 0 0 60px rgb(239, 173, 174), 0 0 0 90px rgba(0, 231, 255, 0);
    }
`;
const Wrapper = styled.div`
  text-decoration: none;
  color: #fff;
  width: 12px;
  height: 12px;
  margin: 0 auto;
  border-radius: 100px;
  -webkit-animation: ${blastRipple} 0.7s linear infinite;
  animation: ${blastRipple} 0.7s linear infinite;
`;
const StyledDiv = styled.div`
  background: url(${Donuts}) no-repeat;
  background-size: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #eaeaec;
`;
const Spinner = () => (
  <StyledDiv>
    <div style={{ marginTop: '25%' }}>
      <Wrapper />
    </div>
  </StyledDiv>
);

export default Spinner;
