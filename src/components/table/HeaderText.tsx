import React from "react";
import { cn } from "../../utils";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

const HeaderText: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div className={cn("text-left text-[14px] text-weak", className)}>
      {children}
    </div>
  );
};

export default HeaderText;
