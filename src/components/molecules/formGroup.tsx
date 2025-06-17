'use client';

import React from 'react';
import clsx from 'clsx';
import Input from '../atoms/input';

interface FormGroupProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  type = 'text',
  placeholder,
  error,
  icon,
  ...rest
}) => {
  return (
    <div className="w-full space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <Input type={type} placeholder={placeholder} icon={icon} error={error} {...rest} />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default FormGroup;
