import { useEffect } from "react";
import Option from "./Option";

function Select({
  setSelectValue,
  label = "Select an option:",
  options = [{ value: "Option name", name: "option-name" }],
  name = "select",
  value = "",
}) {
  useEffect(() => setSelectValue(value), [setSelectValue, value]);

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
        value={value}
        onChange={updateValue}
      >
        {optionsList}
      </select>
    </>
  );
}

export default Select;
