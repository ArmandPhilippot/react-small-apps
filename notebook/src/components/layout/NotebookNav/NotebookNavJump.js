import { List } from "../../commons";

function NotebookJumpTo({ linksList }) {
  return (
    <div className="notebook-nav__jump-to">
      <List data={linksList} />
    </div>
  );
}

export default NotebookJumpTo;
