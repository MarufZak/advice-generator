import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Subtitle = () => {
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeLeft((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft <= 0) return;

  return (
    <Wrapper>
      <p className="text">
        You can re-fetch in{' '}
        <span className="time">{timeLeft}...</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .text {
    margin-top: 48px;
    font-size: 1.8rem;
    color: var(--color-cyan);
  }

  .time {
    color: var(--color-green);
  }
`;

export default Subtitle;
