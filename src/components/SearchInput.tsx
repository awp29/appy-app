import React from "react";
import { cn } from "../utils";
import SearchIcon from "../assets/icons/search.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { debounce } from "lodash";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear: () => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { className, onClear, onChange, ...rest } = props;

  const [value, setValue] = React.useState("");

  // AP-TODO: Fix this
  const debounceFn = React.useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
    }, 300),
    [onChange]
  );

  return (
    <div className="relative">
      <input
        type="text"
        className={cn(
          "max-w-[220px] w-[220px]",
          "placeholder:text-weak text-strong text-sm",
          "border-[1px] border-solid border-stroke-weak rounded-lg h-8 pl-8 pr-3 hover:border-stroke-strong",
          value && "pr-8 border-stroke-strong",
          className
        )}
        placeholder="Search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debounceFn(e);
        }}
        {...rest}
      />

      <SearchIcon
        className="absolute left-[12px] top-[9px]"
        width={16}
        height={16}
      />

      {value && (
        <button
          className="absolute right-[12px] top-[9px]"
          onClick={() => {
            setValue("");
            onClear();
          }}
        >
          <XIcon width={16} height={16} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
