import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './main.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sobre from './pages/sobre';
import Suport from './pages/suport';
import { ProviderThemeContext } from './contexts/theme-context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages/sobre",
    element: <Sobre />,
  },
  {
    path: "/pages/suport",
    element: <Suport />,
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProviderThemeContext>
      <RouterProvider router={router} />
    </ProviderThemeContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
