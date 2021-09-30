import "./List.css";

function List({ type = "ul", data = [] }) {
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
        <ol className="list">{listItems}</ol>
      ) : (
        <ul className="list">{listItems}</ul>
      )}
    </>
  );
}

export default List;
