
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  href,
  disabled = false,
}) => {
  const baseStyles = `inline-block px-8 py-3 rounded-md text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 transform hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-sm`;

  const primaryStyles = `bg-gray-800 text-white hover:bg-gray-900 focus:ring-teal-500/50 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white dark:focus:ring-teal-400/50 shadow-md`;
  const secondaryStyles = `bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500/50 dark:hover:bg-teal-500 dark:focus:ring-teal-400/50 shadow-md`;
  const outlineStyles = `bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900 focus:ring-gray-800/50 dark:focus:ring-gray-300/50 shadow-sm`;

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = primaryStyles;
      break;
    case 'secondary':
      variantStyles = secondaryStyles;
      break;
    case 'outline':
      variantStyles = outlineStyles;
      break;
  }

  const finalClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    if (isExternal) {
      return (
        <a
          href={disabled ? undefined : href}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className={`${finalClassName} text-center`}
          aria-disabled={disabled}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={href}
        onClick={handleClick}
        className={`${finalClassName} text-center ${disabled ? 'pointer-events-none' : ''}`}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
    >
      {children}
    </button>
  );
};

export default Button;
