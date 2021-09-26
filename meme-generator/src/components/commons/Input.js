import { forwardRef } from "react";

function Input(
  {
    type = "text",
    value,
    onChangeHandler,
    onBlurHandler,
    additionalClasses = "",
  },
  ref
) {
  const classNames = `form__input ${additionalClasses}`;

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      className={classNames}
    />
  );
}

export default forwardRef(Input);
