import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import icon from '../../assets/pattern-divider-desktop.svg';
import dice from '../../assets/icon-dice.svg';
import Loading from './Loading';

const Card = ({ id, advice, fetchData, isLoading }) => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    fetchData();
  };

  useEffect(() => {
    setDisabled(true);

    let timeout = setTimeout(() => {
      setDisabled(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [advice]);

  return (
    <Wrapper>
      <p className="num">advice #{id}</p>
      <h2 className="text">{advice || 'Loading...'}</h2>
      <img
        className="line"
        src={icon}
        alt="straight line with two columns"
      />
      <button
        onClick={handleClick}
        className={`btn ${disabled && 'disabled'}`}
        type="button"
      >
        {isLoading ? <Loading /> : <img src={dice} alt="dice icon" />}
      </button>
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

  .line {
    width: 100%;
    pointer-events: none;
  }

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

  .btn {
    cursor: pointer;
    width: 64px;
    height: 64px;
    background-color: var(--color-green);
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    transition: 0.3s;

    :hover {
      box-shadow: var(--shadow-green);
      transform: translate(-50%, 50%) rotate(-180deg);
    }
  }

  .btn.disabled {
    pointer-events: none;
  }

  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    border-radius: 16px;
  }

  @media screen and (max-width: 576px) {
    padding: 40px 24px 64px;
  }
`;

export default Card;
