import React from "react";
import { cn } from "../../utils";

type TextSize = "sm" | "base";
type TextColor = "black" | "strong" | "weak";

interface TextProps {
  size?: TextSize;
  color?: TextColor;
  children: React.ReactNode;
}

const sizes = {
  ["sm"]: "text-sm",
  ["base"]: "text-base",
};

const colors = {
  ["strong"]: "text-strong",
  ["weak"]: "text-weak",
  ["black"]: "text-black",
};

const Text: React.FC<TextProps> = (props) => {
  const { size = "base", color = "weak", children } = props;
  return <p className={cn(`${sizes[size]} ${colors[color]}`)}>{children}</p>;
};

export default Text;
