function Button({ body, onClickHandler, modifier }) {
  const classNames = modifier ? `btn btn--${modifier}` : "btn";

  return (
    <button className={classNames} onClick={onClickHandler}>
      {body}
    </button>
  );
}

export default Button;
