import React, { useEffect } from 'react';
import styled from 'styled-components';

const Error = ({msg}) => {

  useEffect(()=>{
    console.log(msg);
  },[])

  return (
    <Wrapper>
      <p className="text">
        Sorry, error ocurred. See the console for the details...
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text {
    color: var(--color-cyan);
    padding: 16px 32px;
    background-color: red;
    font-size: 1.8rem;
    border-radius: 16px;
    box-shadow: var(--shadow-red);
  }
`;

export default Error;
