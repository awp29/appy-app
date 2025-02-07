import React from "react";
import { cn } from "../../../utils";

interface PageButtonProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const PageButton: React.FC<PageButtonProps> = (props) => {
  const { disabled, onClick, children } = props;

  return (
    <button
      className={cn(
        "flex items-center justify-around w-8 h-8",
        disabled && "opacity-50"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PageButton;
