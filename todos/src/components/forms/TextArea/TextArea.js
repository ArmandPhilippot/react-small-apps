function TextArea({ label, id, value, updateValue }) {
  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <>
      {label ? (
        <label htmlFor={id} className="form__label">
          {label}
        </label>
      ) : (
        ""
      )}
      <textarea
        value={value}
        onChange={handleChange}
        className="form__field form__field--textarea"
      />
    </>
  );
}

export default TextArea;
