import React from 'react';
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'glass' | 'glass-cta' | 'glass-subtle';
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

  const primaryStyles = `bg-[var(--color-primary)] text-white hover:bg-slate-800 focus:ring-slate-500/50 shadow-[var(--shadow-md)]`;
  const secondaryStyles = `bg-[var(--color-brand)] text-white hover:bg-[var(--color-accent)] focus:ring-[var(--color-brand)]/50 shadow-[var(--shadow-md)]`;
  const outlineStyles = `bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]/50 shadow-[var(--shadow-sm)]`;
  const glassStyles = `bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 focus:ring-white/50 shadow-[var(--shadow-md)]`;
  const glassCtaStyles = `bg-white/80 backdrop-blur-sm border-2 border-transparent text-[var(--color-primary)] hover:bg-white focus:ring-white/50 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]`;
  const glassSubtleStyles = `bg-transparent backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/80 focus:ring-white/50`;

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
    case 'glass':
      variantStyles = glassStyles;
      break;
    case 'glass-cta':
      variantStyles = glassCtaStyles;
      break;
    case 'glass-subtle':
      variantStyles = glassSubtleStyles;
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
