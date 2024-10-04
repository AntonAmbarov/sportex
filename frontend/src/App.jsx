import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './services/routes/routes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setProfil } from './slices/authorizedUser';
import { toggleStatusAuth } from './slices/ui';
import fetchInitAppData from './config/fetchInitAppData';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18nextConfig';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('currentUser'));
    if (profile) {
      dispatch(setProfil({ profile }));
      dispatch(toggleStatusAuth(true));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchInitAppData())
  }, [dispatch]);

  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}

export default App;
