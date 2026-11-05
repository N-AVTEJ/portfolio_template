import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href = '#contact',
  className = '',
}) => {
  const content = (
    <span className="relative z-10 flex items-center justify-center">
      Contact Me
    </span>
  );

  const baseClasses = `
    contact-btn
    inline-flex items-center justify-center cursor-pointer select-none
    rounded-full text-white font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    transition-transform duration-200 active:scale-95
    hover:brightness-110
    ${className}
  `.trim();

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
        aria-label="Contact Mina"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={baseClasses}
      aria-label="Contact Mina"
    >
      {content}
    </a>
  );
};
