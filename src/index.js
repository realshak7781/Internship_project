import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing
import App from './app';  // Import the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element

root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the App in BrowserRouter to enable routing */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

