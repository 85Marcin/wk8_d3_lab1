import Quote from './Quote';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;

`

function App() {

  return (
    <Div>
      <Quote by="Bill Gates" source="https://www.microsoft.com">
        640kb of memory ought to be enough for anyone
      </Quote>
      <Quote by="Steve Jobs" source="https://www.apple.com">
        Don't let the noise of others' opinions drown out your own inner voice
      </Quote>
    </Div>
  );
}

export default App;

