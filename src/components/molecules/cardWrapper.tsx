'use client';

import React from 'react';
import clsx from 'clsx';

interface CardWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  centerContent?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  title,
  description,
  className,
  centerContent = false,
}) => {
  return (
    <div
      className={clsx(
        'w-full max-w-md mx-auto p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900',
        className
      )}
    >
      {(title || description) && (
        <div className={clsx('mb-6', centerContent && 'text-center')}>
          {title && <h2 className="text-2xl font-semibold mb-1 text-gray-800 dark:text-white">{title}</h2>}
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
          )}
        </div>
      )}

      <div className={clsx(centerContent && 'flex flex-col items-center')}>{children}</div>
    </div>
  );
};

export default CardWrapper;
