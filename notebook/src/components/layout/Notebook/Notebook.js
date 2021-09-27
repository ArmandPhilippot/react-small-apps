import { useState } from "react";
import NotebookNav from "./NotebookNav";
import NotebookPage from "./NotebookPage";
import "./Notebook.css";
import { Route, Switch } from "react-router-dom";
import NotebookCover from "./NotebookCover";

function Notebook() {
  const [pages, setPages] = useState([]);

  return (
    <div className="notebook">
      <Switch>
        <Route exact path="/" component={NotebookCover} />
        <Route path="/:id" component={NotebookPage} />
      </Switch>
      <NotebookNav pages={pages} setPages={setPages} />
    </div>
  );
}

export default Notebook;
