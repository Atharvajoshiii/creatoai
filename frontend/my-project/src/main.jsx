// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-gv7r58hms8lw2uv0.us.auth0.com"
    clientId="1YhKW0qMP4RbSH7p9C2AuJT4Ma4INdin"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>,
);