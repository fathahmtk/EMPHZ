import React from 'react';
import { Link } from "react-router-dom";

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
  const baseStyles = `inline-block px-8 py-3 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 transform hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-sm`;

  const primaryStyles = `bg-[var(--color-primary)] text-white hover:bg-gray-900 focus:ring-gray-500/50 shadow-[var(--shadow-md)]`;
  const secondaryStyles = `bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-light)] focus:ring-[var(--color-brand)]/50 shadow-[var(--shadow-md)]`;
  const outlineStyles = `bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]/50 shadow-[var(--shadow-sm)]`;

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