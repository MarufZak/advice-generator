import React from 'react';
import Card from './components/Card';
import styled from 'styled-components';
import Subtitle from './components/Subtitle';
import Error from './components/Error';
const endpoint = 'https://api.adviceslip.com/advice';

function App() {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState({ state: false, msg: '' });

  const fetchData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setData(data.slip);
    } catch (error) {
      setError({ state: true, msg: error });
    }

    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      {error.state && <Error msg={error.msg} />}
      {data && <Card isLoading={isLoading} data={data} fetchData={fetchData} />}
      {!isLoading && <Subtitle />}
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
