import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './services/routes/routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setToken } from './slices/token';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(userName, token));
    }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
