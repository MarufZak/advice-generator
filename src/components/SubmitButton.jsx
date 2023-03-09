import React from 'react';
import Loading from './Loading';
import dice from '../assets/icon-dice.svg';
import styled from 'styled-components';

const Button = ({ handleSubmit, isLoading, delay = 3000 }) => {
  const [disabled, setDisabled] = React.useState(true);

  const handleClick = () => {
    setDisabled(true);
    handleSubmit();
  };

  React.useEffect(() => {
    if (!disabled) return;

    const timeout = window.setTimeout(() => {
      setDisabled(false);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [disabled]);

  return (
    <StyledButton onClick={handleClick} disabled={disabled} type="button">
      {isLoading ? <Loading /> : <img src={dice} alt="dice icon" />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
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
  pointer-events: ${(props) => props.disabled && 'none'};

  :hover {
    box-shadow: var(--shadow-green);
    transform: translate(-50%, 50%) rotate(-180deg);
  }
`;

export default Button;
