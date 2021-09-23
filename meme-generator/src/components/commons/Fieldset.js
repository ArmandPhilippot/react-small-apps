function Fieldset({ legend = "Fieldset legend", children }) {
  return (
    <fieldset className="form__fieldset">
      <legend className="form__legend">{legend}</legend>
      {children}
    </fieldset>
  );
}

export default Fieldset;
