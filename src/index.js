import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HeadsProvider, MembersProvider, TeamsProvider } from './contexts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HeadsProvider>
    <TeamsProvider>
      <MembersProvider>
        <App />
      </MembersProvider>
    </TeamsProvider>
  </HeadsProvider>
);

