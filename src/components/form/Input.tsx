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
        "border-[2px] border-solid border-black rounded-[4px]",
        className
      )}
      {...rest}
    />
  );
};

export default Input;
