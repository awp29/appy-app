import React from "react";
import { cn } from "../../utils";

interface PrimaryButtonProps {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { className, onClick, children } = props;

  return (
    <button
      className={cn(
        "flex items-center py-2 px-4 rounded-full h-[48px]",
        "text-[14px] text-white font-semibold font-mono",
        "bg-black hover:bg-black/80 active:bg-black/90",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
