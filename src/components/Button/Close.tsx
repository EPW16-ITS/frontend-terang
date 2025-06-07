import React from "react";

interface CloseIconButtonProps {
  onClick: () => void;
  size?: number; // Optional, default: 40
  className?: string;
}

const CloseIconButton: React.FC<CloseIconButtonProps> = ({
  onClick,
  size = 40,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full bg-primary-A50 hover:bg-primary-300 transition-colors duration-200 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Close menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
};

export default CloseIconButton;
