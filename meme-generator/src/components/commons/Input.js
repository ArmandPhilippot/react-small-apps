import { useEffect, useRef, useState } from "react";

function Input({
  label = "Input label",
  type = "text",
  name = "input-text",
  value = "",
}) {
  const inputField = useRef(null);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => setInputValue(value), [value]);

  const setFocus = () => {
    inputField.current.focus();
  };

  const updateValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <label className="form__label" onClick={setFocus}>
        {label}
      </label>
      <input
        ref={inputField}
        className={`form__input form__input--${type}`}
        type={type}
        name={name}
        value={inputValue}
        onChange={updateValue}
      />
    </>
  );
}

export default Input;
