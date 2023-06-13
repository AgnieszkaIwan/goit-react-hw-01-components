import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProfileComponent } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileComponent />
    <Statistics title="Upload stats" stats={data} />
  </React.StrictMode>
);
