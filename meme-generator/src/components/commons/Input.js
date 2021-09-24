import { useEffect, useRef } from "react";

function Input({
  inputValue,
  setInputValue,
  label = "",
  type = "text",
  name = "input-text",
  value = "",
}) {
  const inputField = useRef(null);
  useEffect(
    () => setInputValue && setInputValue(value),
    [setInputValue, value]
  );

  const setFocus = () => {
    inputField.current.focus();
  };

  const updateValue = (e) => {
    setInputValue && setInputValue(e.target.value);
  };

  return (
    <>
      {label && (
        <label className="form__label" onClick={setFocus}>
          {label}
        </label>
      )}
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
