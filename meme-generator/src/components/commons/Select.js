import { useEffect } from "react";
import Option from "./Option";

function Select({
  selectValue,
  setSelectValue,
  label = "Select an option:",
  options = [{ value: "Option name", name: "option-name" }],
  name = "select",
  defaultValue = "",
}) {
  useEffect(() => setSelectValue(defaultValue), [setSelectValue, defaultValue]);

  const optionsList = options.map(
    (option) => (
      <Option key={option.name} value={option.value} name={option.name} />
    ),
    options
  );

  const updateValue = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <label className="form__label">{label}</label>
      <select
        className="form__select"
        name={name}
        value={selectValue}
        onChange={updateValue}
      >
        {optionsList}
      </select>
    </>
  );
}

export default Select;
