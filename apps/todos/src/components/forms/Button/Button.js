function Button({ children, modifiers, onClickHandler, type = "button" }) {
  let classNames = "btn";

  if (modifiers && modifiers.length > 0) {
    for (let i = 0; i < modifiers.length; i++) {
      classNames += ` btn--${modifiers[i]}`;
    }
  }

  return (
    <button type={type} className={classNames} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;
