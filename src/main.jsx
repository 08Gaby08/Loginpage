import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import AppRouter from './router';
import { globalStyles } from './styles/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <AppRouter />
  </React.StrictMode>
);
