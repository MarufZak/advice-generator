import React from 'react';
import styled from 'styled-components';
import icon from '../assets/pattern-divider-desktop.svg';

const Line = () => {
  return <StyledLine src={icon} alt="straight line with two columns" />;
};

const StyledLine = styled.img`
  width: 100%;
  pointer-events: none;
`;

export default Line;
