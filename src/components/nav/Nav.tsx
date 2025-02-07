import React from "react";
import Item from "./Item";

// AP-TODO - Show how I would manage a nav that is custom depending on user roles
const Nav: React.FC = () => {
  return (
    <div className="min-w-[320px]">
      <nav className="fixed min-w-[320px] h-[100vh] bg-[#EFEFEF] pt-[96px]">
        <ul>
          <Item to="/">Dashboard</Item>
          <Item to="/people">People</Item>
          <Item to="/settings">Settings</Item>
          <Item to="/help">Help</Item>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
