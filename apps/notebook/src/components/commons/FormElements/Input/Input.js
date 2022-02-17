import { forwardRef } from "react";

function Input(
  {
    type = "text",
    name,
    value,
    onChangeHandler,
    onBlurHandler,
    additionalClasses,
  },
  ref
) {
  const classNames = additionalClasses
    ? `form__input ${additionalClasses}`
    : "form__input";

  return (
    <input
      ref={ref}
      type={type}
      name={name}
      className={classNames}
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
    />
  );
}

export default forwardRef(Input);
