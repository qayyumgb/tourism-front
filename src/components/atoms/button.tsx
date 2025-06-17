'use client';

import React from 'react';
import clsx from 'clsx';
import { Spin } from 'antd';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  loading?: boolean;
  icon?: ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  className,
  variant = 'primary',
  loading = false,
  icon,
  disabled,
  ...rest
}) => {
  const baseStyle = 'px-4 py-2 rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300';

  const variantStyles: Record<Variant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-300',
  };

  return (
    <button
      className={clsx(baseStyle, variantStyles[variant], className)}
      disabled={loading || disabled}
      {...rest}
    >
      {loading ? <Spin size="small" /> : icon}
      {children}
    </button>
  );
};

export default Button;
