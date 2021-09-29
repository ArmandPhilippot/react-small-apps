import "./Button.css";

function Button({
  body,
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
      {body}
    </button>
  );
}

export default Button;
