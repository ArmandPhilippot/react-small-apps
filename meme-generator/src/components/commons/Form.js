function Form({
  children,
  action = "#",
  method = "post",
  styles,
  onSubmitHandler,
}) {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmitHandler}
      className="form"
      style={styles}
    >
      {children}
    </form>
  );
}

export default Form;
