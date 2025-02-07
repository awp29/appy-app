import React from "react";
import { cn } from "../../utils";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      className={cn(
        "border border-black rounded-full text-black text-[14px] font-semibold font-mono px-4 h-[32px]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
