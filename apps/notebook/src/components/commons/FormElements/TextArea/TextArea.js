import { forwardRef, useEffect, useState } from "react";

function autoGrow(field, initialValue = null) {
  let fieldHeight = initialValue ?? field.style.height;
  if (field.scrollHeight > field.clientHeight) {
    fieldHeight = field.scrollHeight + "px";
  }
  return fieldHeight;
}

function isSetHeightNeeded(e) {
  const key = e.key;
  const isBackspace = key === "Backspace";
  const isDelete = key === "Delete";
  const isCtrlZ = e.ctrlKey && e.key === "z";
  const isCut = e.ctrlKey && e.key === "x";
  return isBackspace || isDelete || isCtrlZ || isCut;
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
    ref && setFieldHeight(autoGrow(ref.current));
  }, [ref]);

  return (
    <textarea
      ref={ref}
      className={classNames}
      name={name}
      value={value}
      onChange={(e) => {
        onChangeHandler(e);
        setFieldHeight(autoGrow(e.target));
      }}
      onKeyDown={(e) => {
        if (isSetHeightNeeded(e)) setFieldHeight(autoGrow(e.target, "auto"));
      }}
      onBlur={onBlurHandler}
      style={{ height: fieldHeight }}
    />
  );
}

export default forwardRef(TextArea);
