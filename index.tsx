import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UIStateProvider } from './UIStateContext';
import { ToastProvider } from './ToastContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <UIStateProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </UIStateProvider>
  </React.StrictMode>
);