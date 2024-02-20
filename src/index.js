import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'style';
import GlobalStyle from 'style/Globalstyles';
import { MemoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryRouter>
      <GlobalStyle />
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
