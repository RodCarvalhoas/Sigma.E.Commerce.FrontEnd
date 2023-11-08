import styled from 'styled-components';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  background-color: #e9ecef;
`;

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product/:name" element={<ProductPage/>}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
