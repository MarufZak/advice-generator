import React from 'react';
import styled from 'styled-components';
import Line from './Line';
import SubmitButton from './SubmitButton';

const Card = ({ isLoading, fetchData, data }) => {
  const { advice, id } = data;

  return (
    <Wrapper>
      <p className="num">advice #{id}</p>
      <h2 className="text">{advice}</h2>
      <Line />
      <SubmitButton handleSubmit={fetchData} isLoading={isLoading} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  max-width: 550px;
  width: 100%;
  padding: 48px 48px 72px;
  text-align: center;
  background-color: var(--color-grayish-darkblue);
  border-radius: 16px;
  position: relative;

  .num {
    color: var(--color-green);
    text-transform: uppercase;
    font-size: 1.3rem;
    margin-bottom: 24px;
    letter-spacing: 4px;
  }

  .text {
    color: var(--color-cyan);
    font-size: 2.8rem;
    margin-bottom: 40px;
    letter-spacing: 3px;

    ::before {
      content: open-quote;
    }

    ::after {
      content: close-quote;
    }
  }

  @media screen and (max-width: 576px) {
    padding: 40px 24px 64px;
  }
`;

export default Card;
