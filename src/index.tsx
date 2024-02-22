import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style';
// @ts-ignore
import GlobalStyle from './style/Globalstyles.js';
import { MemoryRouter } from 'react-router-dom';
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <GlobalStyle/>
      <App/>
    </MemoryRouter>
  </React.StrictMode>
);
