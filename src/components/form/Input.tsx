import React from "react";
import { cn } from "../../utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <input
      className={cn(
        "border-[1px] border-solid border-stroke-strong rounded-lg h-8 text-sm text-weak px-4",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
