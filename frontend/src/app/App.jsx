import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { i18n } from 'app/i18n';
import { appRouter } from 'app/routers';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { setProfil } from 'shared/model/currentUser';
import { toggleStatusAuth } from 'shared/model/ui';
import { fetchInitAppData } from 'app/store';

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
              {appRouter.map(({ path, element }) => (
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
