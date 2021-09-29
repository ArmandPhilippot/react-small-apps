import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../commons";
import NotebookJumpTo from "./NotebookJumpTo";

function NotebookNav({ currentPage, setCurrentPage, pages, addNewPage }) {
  const location = useLocation();
  const [isNavOpened, setIsNavOpened] = useState(false);

  const [nextPage, setNextPage] = useState({});
  const [prevPage, setPrevPage] = useState({});

  const isNotebookPage = (path) => path.startsWith("/page/");
  const isCoverPage = (path) => path === "/";
  const isNotebook = useCallback(
    (path) => isNotebookPage(path) || isCoverPage(path),
    []
  );

  useEffect(() => {
    if (isNotebook(location.pathname)) {
      if (!pages[currentPage.id + 1]) addNewPage();
      setNextPage(pages[currentPage.id + 1]);
      setPrevPage(() =>
        pages[currentPage.id - 1] ? pages[currentPage.id - 1] : null
      );
    }
  }, [pages, currentPage, addNewPage, isNotebook, location]);

  useEffect(() => {
    isNotebookPage(location.pathname) &&
      setCurrentPage(pages.find((page) => page.id === location.state.id));
  });

  const links = pages.map((page) => {
    const url = `/page/${page.id}`;
    return {
      id: page.id,
      body: (
        <Link to={{ pathname: url, state: { id: page.id } }}>{page.title}</Link>
      ),
    };
  });

  return (
    <nav className="notebook__nav">
      {!isCoverPage(location.pathname === "/") && (
        <Link to={{ pathname: "/", state: { id: 0 } }}>
          Back at the beginning
        </Link>
      )}
      {prevPage && (
        <Link to={{ pathname: prevPage.url, state: { id: prevPage.id } }}>
          Previous page
        </Link>
      )}
      <Button
        body="Jump to"
        onClickHandler={() => setIsNavOpened(!isNavOpened)}
      />
      {isNavOpened && <NotebookJumpTo linksList={links} />}
      {nextPage && (
        <Link to={{ pathname: nextPage.url, state: { id: nextPage.id } }}>
          Next page
        </Link>
      )}
    </nav>
  );
}

export default NotebookNav;
