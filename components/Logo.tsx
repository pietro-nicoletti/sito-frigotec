import React from 'react';
const logoImage = '/assets/logo/frigotec logo.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="flex items-center">
      <div className="h-12 w-auto flex-shrink-0">
        <img
          src={logoImage}
          alt="FrigoTec"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
};
