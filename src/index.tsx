import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CreatePort from './pages/CreatePort/CreatePort';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CreatePort />
  </React.StrictMode>
);
