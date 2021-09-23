import { useEffect, useState } from "react";

function InputRange({
  label = "Input label",
  name = "input-range",
  value = "25",
  min = "5",
  max = "50",
  step = "1",
}) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => setInputValue(value), [value]);

  const updateValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <label className="form__label">{label}</label>
      <input
        className="form__input form__input--range"
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={inputValue}
        title={`${inputValue}px`}
        onChange={updateValue}
      />
    </>
  );
}

export default InputRange;
