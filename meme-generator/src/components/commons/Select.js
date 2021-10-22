import Option from "./Option";

function Select({ id, name, label, options, value, onChangeHandler }) {
  const optionsList = options.map((option) => {
    const optionValue = option.replace(" ", "-");
    return <Option key={optionValue} value={optionValue} body={option} />;
  });

  return (
    <>
      {label ? (
        <label className="form__label" htmlFor={id}>
          {label}
        </label>
      ) : (
        ""
      )}
      <select
        id={id}
        name={name}
        className="form__select"
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </>
  );
}

export default Select;
