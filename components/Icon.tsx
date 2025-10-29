import React from 'react';
import { ICONS } from '../constants';

type IconName = keyof typeof ICONS;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
  const path = ICONS[name];
  
  if (!path) {
    console.warn(`Icon with name "${name}" not found.`);
    return null;
  }
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;