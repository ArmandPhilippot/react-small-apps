function Form({ children, action = "#", method = "post", onSubmitHandler }) {
  return (
    <form
      action={action}
      method={method}
      onSubmit={onSubmitHandler}
      className="form"
    >
      {children}
    </form>
  );
}

export default Form;
