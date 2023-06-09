import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/index.css';
import App from './App';
import { DadosDoUsuarioProviders } from './Context/dadosDoUsuario';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DadosDoUsuarioProviders>
        <App />
      </DadosDoUsuarioProviders>
    </BrowserRouter>
  </React.StrictMode>

);
    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
