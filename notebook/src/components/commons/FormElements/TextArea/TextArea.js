import { forwardRef, useEffect, useState } from "react";

function autoGrow(field) {
  let fieldHeight = field.style.height;
  if (field.scrollHeight > field.clientHeight) {
    fieldHeight = field.scrollHeight + "px";
  }
  return fieldHeight;
}

function TextArea(
  { value, name, onBlurHandler, onChangeHandler, additionalClasses },
  ref
) {
  const [fieldHeight, setFieldHeight] = useState();
  const classNames = additionalClasses
    ? `form__textarea ${additionalClasses}`
    : "form__textarea";

  useEffect(() => {
    ref && setFieldHeight(() => autoGrow(ref.current));
  }, [ref]);

  return (
    <textarea
      ref={ref}
      className={classNames}
      name={name}
      value={value}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      onKeyUp={(e) => setFieldHeight(autoGrow(e.target))}
      style={{ height: fieldHeight }}
    />
  );
}

export default forwardRef(TextArea);
