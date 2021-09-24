function Fieldset({ id = "", legend = "Fieldset legend", children }) {
  return (
    <fieldset id={`fieldset-${id}`} className="form__fieldset">
      <legend className="form__legend">{legend}</legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
