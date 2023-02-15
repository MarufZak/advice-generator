import Card from './components/Card/Card';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import Subtitle from './components/Subtitle';
import Error from './components/Error';
const endpoint = 'https://api.adviceslip.com/advice';

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ state: false, msg: '' });

  // useMemo is used for learning purposes.
  const fetchData = useMemo(
    () => async () => {
      setIsLoading(true);
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setData(data.slip);
      } catch (error) {
        setError({ state: true, msg: error });
      }

      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (error.state) {
    return (
      <Wrapper>
        <Error msg={error.msg} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Card
        isLoading={isLoading}
        id={data.id}
        advice={data.advice}
        fetchData={fetchData}
      />
      {isLoading || <Subtitle />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100%;
  background-color: var(--color-darkblue);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
`;

export default App;
