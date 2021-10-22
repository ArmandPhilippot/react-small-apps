import { forwardRef } from "react";

function Input(
  {
    label,
    id,
    name,
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
    <>
      {label ? (
        <label className="form__label" htmlFor={id}>
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        id={id}
        name={name}
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        className={classNames}
      />
    </>
  );
}

export default forwardRef(Input);
