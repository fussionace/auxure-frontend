import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
// eslint-disable-next-line import/no-unassigned-import
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
