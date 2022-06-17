import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { EmployeesProvider, HeadsProvider, MembersProvider, TeamsProvider } from './contexts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HeadsProvider>
    <TeamsProvider>
      <MembersProvider>
        <EmployeesProvider>
          <App />
        </EmployeesProvider>
      </MembersProvider>
    </TeamsProvider>
  </HeadsProvider>
);

