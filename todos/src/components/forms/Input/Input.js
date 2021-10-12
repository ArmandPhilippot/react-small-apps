function Input({
  label,
  id,
  name,
  value,
  updateValue,
  required,
  type = "text",
}) {
  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        required={required ? "required" : false}
        onChange={handleChange}
        className="form__input"
      />
    </>
  );
}

export default Input;
