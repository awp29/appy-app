import React from "react";
import { cn } from "../../utils";
import CheckIcon from "../../assets/icons/check.svg?react";
import MinusIcon from "../../assets/icons/minus.svg?react";
import { CheckboxIcon } from "./types";

const iconToRender = (iconType: CheckboxIcon) => {
  if (iconType === CheckboxIcon.Dash) {
    return <MinusIcon width={20} height={20} />;
  }

  return <CheckIcon width={20} height={20} />;
};

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconType?: CheckboxIcon;
}

const Checkbox: React.FC<Props> = (props) => {
  const { iconType = CheckboxIcon.Check, checked, onChange } = props;

  return (
    <div className="grid grid-cols-1 w-fit">
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        className={cn(
          "appearance-none row-start-1 col-start-1 block w-[24px] h-[24px] border-[1px] border-solid border-stroke-strong rounded-[4px] cursor-pointer",
          checked && "bg-black"
        )}
      />

      <span className="justify-self-center self-center row-start-1 col-start-1 pointer-events-none">
        {checked && iconToRender(iconType)}
      </span>
    </div>
  );
};

export default Checkbox;
