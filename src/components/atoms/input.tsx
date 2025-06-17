'use client';

import React from 'react';
import clsx from 'clsx';

type InputTypes = 'text' | 'email' | 'password' | 'number' | 'textarea';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputTypes;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  error,
  icon,
  className,
  ...rest
}) => {
  const inputClasses = clsx(
    'w-full px-4 py-2 rounded-xl border outline-none transition-all duration-300',
    error
      ? 'border-red-500 focus:border-red-500'
      : 'border-gray-300 focus:border-blue-500',
    icon ? 'pl-10' : '',
    className
  );

  return (
    <div className="w-full flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative">
        {icon && <div className="absolute left-3 top-2.5 text-gray-400">{icon}</div>}

        {type === 'textarea' ? (
          <textarea {...(rest as any)} className={inputClasses} rows={4} />
        ) : (
          <input type={type} {...rest} className={inputClasses} />
        )}
      </div>

      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
