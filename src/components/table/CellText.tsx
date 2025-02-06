import React from "react";
import { cn } from "../../utils";

interface CellTextProps {
  className?: string;
  children: React.ReactNode;
}

const CellText: React.FC<CellTextProps> = ({ className, children }) => {
  return <div className={cn("text-left text-weak", className)}>{children}</div>;
};

export default CellText;
