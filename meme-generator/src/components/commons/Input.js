import React, { useEffect } from "react";

const Input = React.forwardRef(
  (
    {
      setInputValue,
      label = "",
      type = "text",
      name = "input-text",
      value = "",
    },
    ref
  ) => {
    useEffect(
      () => setInputValue && setInputValue(value),
      [setInputValue, value]
    );

    const setFocus = () => {
      ref.current.focus();
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
          ref={ref}
          className={`form__input form__input--${type}`}
          type={type}
          name={name}
          value={value}
          onChange={updateValue}
        />
      </>
    );
  }
);

export default Input;
