import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '@/assets/scss/app.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense>
    <App />
  </React.Suspense>
);
