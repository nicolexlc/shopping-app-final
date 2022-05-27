import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="shoppingproject.us.auth0.com"
      clientId="aqnrLO2LkJX6eHMmiYhPnpuSrKLXSSyw"
      redirectUri={window.location.origin}
    >
    <Context>
      <App />
    </Context>
    </Auth0Provider>
  </React.StrictMode>
);

