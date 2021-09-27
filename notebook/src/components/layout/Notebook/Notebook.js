import { useState } from "react";
import NotebookNav from "./NotebookNav";
import NotebookPage from "./NotebookPage";
import "./Notebook.css";

function Notebook() {
  const [pages, setPages] = useState([]);

  const pagesList = pages.map((page) => {
    return <NotebookPage key={page.id} title={page.title} />;
  });

  return (
    <div className="notebook">
      {pagesList}
      <NotebookNav pages={pages} setPages={setPages} />
    </div>
  );
}

export default Notebook;
