function Button({ children, modifier, onClickHandler, type = "button" }) {
  const classNames = modifier ? `btn btn--${modifier}` : "btn";

  return (
    <button type={type} className={classNames} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
