import { useCallback, useEffect, useState } from "react";
import NotebookNav from "./NotebookNav";
import NotebookPage from "./NotebookPage";
import "./Notebook.css";
import { Redirect, Route, Switch } from "react-router-dom";
import NotebookCover from "./NotebookCover";
import NoMatch from "../NoMatch/NoMatch";

function Notebook() {
  let pageId = 0;
  const [pages, setPages] = useState([
    { id: pageId, body: "", title: "My notebook", url: "/" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  useEffect(() => {
    if (currentPage) document.title = `Notebook - ${currentPage.title}`;
  });

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

  const isPageExists = (id) => {
    const pageIndex = pages.findIndex((page) => page.id === id);
    return pageIndex === -1 ? false : true;
  };

  return (
    <div className="notebook">
      <Switch>
        <Redirect
          from="/page/0"
          to={{ pathname: "/", state: pages[0] }}
          data={currentPage}
        />
        <Route
          exact
          strict
          path="/page/:number"
          render={(route) => {
            const requestedPageId = parseInt(route.match.params.number, 10);
            if (isPageExists(Number(requestedPageId)))
              return <NotebookPage data={currentPage} />;
            return (
              <Redirect
                to={{
                  pathname: "/404",
                  state: { from: route.match.url },
                }}
              />
            );
          }}
        />
        <Route exact strict path="/">
          <NotebookCover setCurrentPage={setCurrentPage} data={currentPage} />
        </Route>
        <Route exact strict path="/404">
          <NoMatch setCurrentPage={setCurrentPage} />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
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
