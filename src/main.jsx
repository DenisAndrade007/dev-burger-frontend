import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppProvider from './hooks';
import { CartProvider } from './hooks/CartContext';

import '@fontsource/road-rage';
import { Elements } from '@stripe/react-stripe-js';
import { ThemeProvider } from 'styled-components';
import stripePromise from './config/stripeConfig';
import { Router } from './routes';
import GlobalStyle from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
      <CartProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
          <GlobalStyle />
          <ToastContainer autoClose={2000} theme="colored" />
        </Elements>
      </CartProvider>
    </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);