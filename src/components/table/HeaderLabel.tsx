import React from "react";
import { cn } from "../../utils";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

const HeaderLabel: React.FC<HeaderProps> = ({ className, children }) => {
  console.log("className", className);

  return (
    <div className={cn("text-left text-[14px] text-weak", className)}>
      {children}
    </div>
  );
};

export default HeaderLabel;
