import React from 'react';

interface RouteContainerProps {
  children: React.ReactNode;
}

export const RouteContainer: React.FC<RouteContainerProps> = ({ children }) => (
  <div>
    {children}
  </div>
);