import ListItem from "./ListItem";
import "./List.css";

function List({ type = "ul", data = [] }) {
  const dataList = data.map((object) => {
    return <ListItem key={object.id} body={object.body} />;
  });

  return (
    <>
      {type === "ol" ? (
        <ol className="list">{dataList}</ol>
      ) : (
        <ul className="list">{dataList}</ul>
      )}
    </>
  );
}

export default List;
