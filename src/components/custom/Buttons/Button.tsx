// components/GradientOutlineButton.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`select-none bg-[#2E2E2E] rounded-full px-6 py-4 ${className}`}
    >
      <div className="text-white font-semibold">{children}</div>
    </button>
  );
};

export default Button;
