import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './services/routes/routes';

function App() {
  console.log('run App')
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
