import React from 'react';
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'glass-cta' | 'glass-subtle' | 'outline-light';
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
  const baseStyles = `inline-block px-8 py-3 rounded-[var(--radius)] text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 transform hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-sm`;

  const primaryStyles = `bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-accent)] text-white hover:shadow-[var(--glow-shadow)] focus:ring-[var(--color-brand)]/50 shadow-[var(--shadow-md)]`;
  const secondaryStyles = `bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-secondary)] hover:border-[var(--color-brand-accent)] hover:text-white focus:ring-[var(--color-brand)]/50 shadow-[var(--shadow-sm)]`;
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
    case 'glass-cta':
    case 'glass':
      variantStyles = primaryStyles;
      break;
    case 'secondary':
    case 'outline':
    case 'outline-light':
    case 'glass-subtle':
      variantStyles = secondaryStyles;
      break;
  }

  const isDisabled = disabled || href === '#';
  const tooltip = href === '#' ? 'This feature is coming soon.' : undefined;

  const finalClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (isDisabled) {
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
          href={isDisabled ? undefined : href}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className={`${finalClassName} text-center`}
          aria-disabled={isDisabled}
          title={tooltip}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={href}
        onClick={handleClick}
        className={`${finalClassName} text-center ${isDisabled ? 'pointer-events-none' : ''}`}
        aria-disabled={isDisabled}
        title={tooltip}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={finalClassName}
      title={tooltip}
    >
      {children}
    </button>
  );
};

export default Button;