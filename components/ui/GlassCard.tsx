'use client';

import type { HTMLAttributes, ReactNode } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function GlassCard({
  children,
  className = '',
  hoverable = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      {...props}
      className={`
        rounded-lg border border-white/10 bg-white/5 backdrop-blur-md
        ${hoverable ? 'transition-all hover:bg-white/10 hover:border-white/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
