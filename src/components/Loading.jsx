import React from 'react';
import styled from 'styled-components';
import icon from '../assets/loading.svg';

const Loading = () => {
  return (
    <Wrapper>
      <img className="icon" src={icon} alt="loading icon" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .icon {
    position: absolute;
    object-fit: cover;
    inset: 0;
    margin: auto;
    animation: spin 2.4s infinite linear;
  }
`;

export default Loading;
