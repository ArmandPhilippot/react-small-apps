function Button({ body, modifier, onClick }) {
  const classNames = `btn ${modifier ? `btn--${modifier}` : ""}`;

  return (
    <button className={classNames} onClick={onClick}>
      {body}
    </button>
  );
}

export default Button;
