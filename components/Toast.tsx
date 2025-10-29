
import React from 'react';
import { ToastMessage } from '../ToastContext';

interface ToastProps {
  toast: ToastMessage;
  onDismiss: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  
  const handleDismiss = () => {
    onDismiss(toast.id);
  };
  
  const typeClasses = {
    error: 'bg-red-500 border-red-600 dark:bg-red-600 dark:border-red-700',
    info: 'bg-blue-500 border-blue-600 dark:bg-blue-600 dark:border-blue-700',
    success: 'bg-green-500 border-green-600 dark:bg-green-600 dark:border-green-700',
    warning: 'bg-yellow-500 border-yellow-600 dark:bg-yellow-600 dark:border-yellow-700',
  };

  const icon = {
    error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z', // XCircleIcon
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // InformationCircleIcon
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // CheckCircleIcon
    warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' // ExclamationIcon
  };
  
  return (
    <div
      className={`animate-fadeInUp relative flex items-center p-4 rounded-lg shadow-lg text-white border-b-4 ${typeClasses[toast.type]}`}
      role="alert"
      aria-live="assertive"
      style={{ animationDuration: '0.3s' }}
    >
      <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon[toast.type]} />
      </svg>
      <span className="flex-grow">{toast.message}</span>
      <button
        onClick={handleDismiss}
        className="ml-4 p-1 rounded-full hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white flex-shrink-0"
        aria-label="Dismiss"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};
export default Toast;
