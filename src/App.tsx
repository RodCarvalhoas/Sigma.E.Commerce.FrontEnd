import styled from 'styled-components';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import { ProtectedRoute } from './helpers/ProtectedRoutesHelper';
import LoginPage from './pages/LoginPage/LoginPage';
import AdminPainel from './pages/AdminPainel/AdminPainel';

const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-color: #e9ecef;
`;

function App() {
  return (
    <Container>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product/:name" element={<ProductPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route path="admin" element={<AdminPainel/>}/>
            </Route>
          </Routes>
        </Router>
    </Container>
  );
}

export default App;
