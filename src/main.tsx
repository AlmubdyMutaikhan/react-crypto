import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Coin from './components/Coin/Coin.jsx';
import Header from './components/Header/Header.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/coin/:uuid',
    element: <Coin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
