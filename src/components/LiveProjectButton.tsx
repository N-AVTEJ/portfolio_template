import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = '#',
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center cursor-pointer select-none
    rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
    font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    transition-colors duration-200
    hover:bg-[#D7E2EA]/10 active:scale-95
    ${className}
  `.trim();

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
        aria-label={label}
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={baseClasses}
      aria-label={label}
    >
      {label}
    </a>
  );
};
