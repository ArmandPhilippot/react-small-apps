import "./List.css";

function List({ type = "ul", data = [], modifier = "" }) {
  const classNames = modifier ? `list list--${modifier}` : "list";

  const listItems = data.map((object) => {
    return (
      <li key={object.id} className="list__item">
        {object.body}
      </li>
    );
  });

  return (
    <>
      {type === "ol" ? (
        <ol className={classNames}>{listItems}</ol>
      ) : (
        <ul className={classNames}>{listItems}</ul>
      )}
    </>
  );
}

export default List;
