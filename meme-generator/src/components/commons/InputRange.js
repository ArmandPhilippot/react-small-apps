import { useEffect } from "react";

function InputRange({
  inputValue,
  setInputValue,
  label = "Input label",
  name = "input-range",
  value = "25",
  min = "5",
  max = "50",
  step = "1",
}) {
  useEffect(() => setInputValue(value), [setInputValue, value]);

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
