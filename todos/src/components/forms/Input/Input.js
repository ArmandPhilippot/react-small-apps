function Input({
  label,
  id,
  name,
  value,
  updateValue,
  onBlurHandler,
  required,
  type = "text",
}) {
  const handleChange = (e) => {
    e.target.type === "checkbox"
      ? updateValue(e.target.checked)
      : updateValue(e.target.value);
  };

  return (
    <>
      {label && (
        <label htmlFor={id} className="form__label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={type === "checkbox" ? undefined : value}
        checked={type === "checkbox" ? value : null}
        required={required ? "required" : false}
        onChange={handleChange}
        onBlur={onBlurHandler}
        className="form__field"
      />
    </>
  );
}

export default Input;
