import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import {theme} from './components/theme'
import { BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
