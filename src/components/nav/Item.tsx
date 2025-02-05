import React from "react";
import { NavLink, To } from "react-router";
import { cn } from "../../utils";

interface ItemProps {
  to: To;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = (props) => {
  const { to, children } = props;

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return cn(
            "block px-[48px] py-[12px] text-weak hover:text-strong",
            isActive && "text-strong font-bold"
          );
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Item;
