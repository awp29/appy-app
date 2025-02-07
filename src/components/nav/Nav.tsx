import React from "react";
import Item from "./Item";
import Text from "../typography/Text";
import ChevronDownIcon from "../../assets/icons/chevronDown.svg?react";

// AP-TODO - Show how I would manage a nav that is custom depending on user roles
const Nav: React.FC = () => {
  return (
    <div className="min-w-[320px]">
      <nav className="fixed min-w-[320px] h-[100vh] bg-[#EFEFEF] pt-[128px] pb-[48px] border-r border-stroke-weak flex flex-col justify-between">
        <ul>
          <Item to="/">Dashboard</Item>
          <Item to="/people">People</Item>
          <Item to="/settings">Settings</Item>
          <Item to="/help">Help</Item>
        </ul>

        <div className="mx-[48px] flex flex-col gap-3">
          <div className="w-[48px] h-[48px] rounded-full bg-pink-300" />
          <div className="flex items-center gap-2">
            <Text size="sm" color="black">
              Andrew Peirs
            </Text>
            <ChevronDownIcon stroke="black" width={20} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
