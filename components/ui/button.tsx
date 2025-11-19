'use client';

import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  surface?: 'raised' | 'inset';
  size?: 'sm' | 'md' | 'lg';
};

const sizeMap: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', surface = 'raised', size = 'md', style, ...props }, ref) => {
    const shadow =
      surface === 'inset'
        ? 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff'
        : '8px 8px 16px #bec3c9, -8px -8px 16px #ffffff';

    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-2xl font-light text-[#0f172a] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e3a8a]/40 disabled:opacity-50 disabled:pointer-events-none ${sizeMap[size]} ${className}`}
        style={{ background: '#e0e5ec', boxShadow: shadow, ...style }}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
