import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE } from '../constants';

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

  const primaryStyles = `bg-[${COLOR_PALETTE.NAVY}] text-white hover:bg-opacity-90 focus:ring-[${COLOR_PALETTE.TEAL}]/50 shadow-md`;
  const secondaryStyles = `bg-[${COLOR_PALETTE.TEAL}] text-white hover:bg-opacity-90 focus:ring-[${COLOR_PALETTE.NAVY}]/50 shadow-md`;
  const outlineStyles = `bg-transparent border-2 border-[${COLOR_PALETTE.NAVY}] text-[${COLOR_PALETTE.NAVY}] hover:bg-[${COLOR_PALETTE.NAVY}] hover:text-white focus:ring-[${COLOR_PALETTE.NAVY}]/50 shadow-sm`;

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
