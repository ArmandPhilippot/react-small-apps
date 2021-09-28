import { useCallback, useState } from "react";
import NotebookNav from "./NotebookNav";
import NotebookPage from "./NotebookPage";
import "./Notebook.css";
import { Redirect, Route, Switch } from "react-router-dom";
import NotebookCover from "./NotebookCover";

function Notebook() {
  let pageId = 0;
  const [pages, setPages] = useState([
    { id: pageId, body: "", title: "My notebook", url: "/" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const addNewPage = useCallback(() => {
    pageId++;
    const newPage = {
      id: pageId,
      body: "",
      title: `Page ${pageId}`,
      url: `/page/${pageId}`,
    };
    setPages((previous) => [...previous, newPage]);
  }, [pageId]);

  return (
    <div className="notebook">
      <Switch>
        <Redirect
          from="/page/0"
          to={{ pathname: "/", state: pages[0] }}
          data={currentPage}
        />
        <Route exact strict path="/page/:number">
          <NotebookPage data={currentPage} />
        </Route>
        <Route exact strict path="/">
          <NotebookCover data={currentPage} />
        </Route>
      </Switch>
      <NotebookNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        addNewPage={addNewPage}
      />
    </div>
  );
}

export default Notebook;
