import React, { useState } from 'react';
import { useToast } from '../ToastContext';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);


const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent any parent onClick handlers
    e.preventDefault();

    if (!navigator.clipboard) {
        addToast('Clipboard API not available.', 'error');
        return;
    }
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      addToast(`Copied "${textToCopy}" to clipboard`, 'success');
      setTimeout(() => setCopied(false), 2500); // Reset icon after 2.5s
    } catch (err) {
      console.error('Failed to copy text: ', err);
      addToast('Failed to copy to clipboard.', 'error');
    }
  };

  return (
    <button 
        onClick={handleCopy} 
        className="inline-flex items-center justify-center ml-2 p-1.5 rounded-md text-[var(--color-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--color-brand)]" 
        aria-label={`Copy product code ${textToCopy}`}
        title={`Copy ${textToCopy}`}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-green-500" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
    </button>
  );
};

export default CopyButton;