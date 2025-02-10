import React from "react";
import { cn } from "../../utils";

interface TertiaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={cn(
        "underline text-black text-[14px] font-semibold font-mono px-4 h-[32px]",
        "rounded-full hover:bg-black/5 active:opacity-80",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default TertiaryButton;
