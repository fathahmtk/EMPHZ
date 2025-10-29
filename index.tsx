
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import { UIStateProvider } from './UIStateContext';
import { ToastProvider } from './ToastContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UIStateProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </UIStateProvider>
    </ThemeProvider>
  </React.StrictMode>
);
