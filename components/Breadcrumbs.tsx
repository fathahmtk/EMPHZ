import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Separator: React.FC = () => (
  <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
  </svg>
);

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className={`text-sm text-[var(--color-text-secondary)] ${className}`} aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex items-center flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.path && !isLast ? (
                <Link to={item.path} className="hover:text-[var(--color-primary)] transition-colors duration-200 truncate" title={item.label}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'text-[var(--color-primary)] truncate' : 'truncate'}
                  aria-current={isLast ? 'page' : undefined}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <Separator />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
