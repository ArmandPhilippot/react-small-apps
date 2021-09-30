import "./Button.css";

function Button({
  children,
  onClickHandler,
  onBlurHandler,
  modifier,
  additionalClassnames,
}) {
  let classNames = modifier ? `btn btn--${modifier}` : "btn";
  classNames = additionalClassnames
    ? `${classNames} ${additionalClassnames}`
    : classNames;

  return (
    <button
      className={classNames}
      onClick={onClickHandler}
      onBlur={onBlurHandler}
    >
      {children}
    </button>
  );
}

export default Button;
