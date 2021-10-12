function TextArea({ label, id, value, updateValue }) {
  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : ""}
      <textarea value={value} onChange={handleChange} />
    </>
  );
}

export default TextArea;
