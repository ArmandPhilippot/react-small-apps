function InputRange({
  label,
  id,
  name,
  min = 5,
  max = 200,
  step = 1,
  unit = "px",
  value,
  onChangeHandler,
}) {
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
        type="range"
        id={id}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChangeHandler}
        title={`${value}${unit}`}
        className="form__input form__input--range"
      />
    </>
  );
}

export default InputRange;
