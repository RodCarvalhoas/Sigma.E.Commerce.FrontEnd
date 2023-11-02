import Header from '../components/Header/Header';
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: #e9ecef;
`;

function App() {
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
