import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import "./index.scss";
import Icon from "./Icon";

export type MultiDropdownSelectOptionsType =
  | { value: string; customTitle?: React.ReactNode }
  | string;
interface MultiDropdownSelectprops
  extends Pick<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "name" | "className" | "onChange"
  > {
  defaultValue?: string[];
  initialOtions?: MultiDropdownSelectOptionsType[];
  onOptionsUpdate?: (arg0: MultiDropdownSelectOptionsType[]) => void;
  fullWidth?: boolean;
  color?: string;
}

const MultiDropdownSelect = ({
  name,
  className,
  onChange,
  defaultValue,
  initialOtions,
  onOptionsUpdate,
  fullWidth,
  color,
}: MultiDropdownSelectprops) => {
  // states
  const containerRef = useRef<HTMLDivElement>(null),
    selectRef = useRef<HTMLSelectElement>(null),
    [focused, setFocused] = useState(false),
    [optionsState, setOptionsState] = useState<
      MultiDropdownSelectOptionsType[]
    >([]),
    [inputValue, setInputValue] = useState(""),
    [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // helper functions
  // handle close dropdown
  const triggerChange = () => {
      if (selectRef.current) {
        // Create a new event
        const event = new Event("change", { bubbles: true });

        // Dispatch the event
        selectRef.current.dispatchEvent(event);
      }
    },
    handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setFocused(false);
        setTimeout(() => {
          setInputValue("");
        }, 500);
        triggerChange();
      }
    },
    handleSelect = (value: string | number) => {
      const entryValue = value.toString();
      setSelectedOptions((prevSelectedOptions) => {
        // Check if the item already exists in the array
        if (prevSelectedOptions.includes(entryValue)) {
          // If it exists, remove it by filtering
          return prevSelectedOptions.filter(
            (existingItem) => existingItem !== value
          );
        } else {
          // If it does not exist, add it
          return [...prevSelectedOptions, entryValue];
        }
      });
    },
    // handle new entry on press Enter
    handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if ((e.key === "Enter" || e.keyCode === 13) && inputValue !== undefined) {
        e.preventDefault();

        if (!!inputValue) {
          // add entered input value to options
          setOptionsState((prevOptionStates) => [
            inputValue,
            ...prevOptionStates,
          ]);

          // add new entry to selected options
          handleSelect(inputValue);

          setInputValue("");
          onOptionsUpdate && onOptionsUpdate(optionsState);
        }
      }
    },
    // format values to help search
    formatValues = (value: string | number | React.ReactNode) =>
      value?.toString().toLowerCase() || "",
    // detect selected options
    checkSelectedOptions = (value: number | string) => {
      return selectedOptions && selectedOptions.includes(value.toString());
    },
    // concat selected values to display
    concatSelectedOptions = () => {
      if (typeof selectedOptions !== "object") {
        return selectedOptions;
      } else {
        let selectedOptionsStr = "";

        selectedOptions &&
          optionsState &&
          optionsState.map((optionState) => {
            if (
              selectedOptions.includes(
                typeof optionState !== "object"
                  ? optionState.toString()
                  : optionState.value.toString()
              )
            ) {
              selectedOptionsStr =
                selectedOptionsStr +
                `${selectedOptionsStr != "" ? ", " : ""}${typeof optionState !== "object" ? optionState : optionState.customTitle || optionState.value}`;
            }
          });

        return selectedOptionsStr;
      }
    };

  useEffect(() => {
    initialOtions && setOptionsState(initialOtions);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    defaultValue && setSelectedOptions(defaultValue);
  }, [defaultValue]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "mainContainer",
        className,
        fullWidth && "fullWidth",
        focused && "focused"
      )}
      style={
        {
          "--base-color": color,
        } as React.CSSProperties
      }
    >
      {/* search current options and add new option field */}
      <div className="inputContainer">
        <input
          type="text"
          value={focused ? inputValue : concatSelectedOptions()}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => {
            setFocused(true);
          }}
          onKeyDown={handleInputKeydown}
        />
        <Icon name="arrow" />
      </div>

      {/* custom display of options */}
      <ul>
        {optionsState &&
          optionsState
            // search enterd input value among existing options
            .map((option, index) => {
              const formattedInputValue = formatValues(inputValue);
              return typeof option === "object"
                ? (formatValues(option.value).includes(formattedInputValue) ||
                    (option.customTitle &&
                      formatValues(option.customTitle).includes(
                        formattedInputValue
                      ))) && (
                    <li
                      key={`dsp-opt-${name}-${index}`}
                      className={clsx(
                        checkSelectedOptions(option.value) && "active"
                      )}
                      onClick={() => handleSelect(option.value)}
                    >
                      {option.customTitle || option.value}{" "}
                      {checkSelectedOptions(option.value) && (
                        <Icon name="checked" />
                      )}
                    </li>
                  )
                : formatValues(option).includes(formattedInputValue) && (
                    <li
                      key={`dsp-opt-${name}-${index}`}
                      className={clsx(checkSelectedOptions(option) && "active")}
                      onClick={() => handleSelect(option)}
                    >
                      {option}
                      {checkSelectedOptions(option) && <Icon name="checked" />}
                    </li>
                  );
            })}
      </ul>

      {/* hidden select element to handle select element */}
      <select
        ref={selectRef}
        multiple
        name={name}
        value={selectedOptions}
        onChange={onChange}
      >
        {optionsState &&
          optionsState.map((option, index) => (
            <option
              value={typeof option !== "object" ? option : option?.value}
              key={`opt-${name}-${index}`}
            />
          ))}
      </select>
    </div>
  );
};

export default MultiDropdownSelect;
