import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './main.css';


import { ProviderThemeContext } from './contexts/Theme-context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderThemeContext>
        <App />
      </ProviderThemeContext>
    </BrowserRouter>

  </React.StrictMode>
);
