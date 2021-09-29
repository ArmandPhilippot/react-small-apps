import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../../commons";
import NotebookNavJump from "./NotebookNavJump";
import "./NotebookNav.css";

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
  }, [pages, currentPage.id, addNewPage, isNotebook, location]);

  useEffect(() => {
    isNotebookPage(location.pathname) &&
      setCurrentPage(pages.find((page) => page.id === location.state.id));
  }, [location, pages, setCurrentPage]);

  const links = pages
    .map((page) => {
      const url = `/page/${page.id}`;
      return {
        id: page.id,
        body: (
          <NavLink
            activeClassName="list__link--current"
            className="list__link"
            aria-current="page"
            exact
            to={{ pathname: url, state: { id: page.id } }}
          >
            {page.title}
          </NavLink>
        ),
      };
    })
    .filter((page) => page.id !== 0);

  return (
    <nav
      className="notebook-nav"
      onBlur={(e) => !e.relatedTarget && setIsNavOpened(false)}
    >
      {!isCoverPage(location.pathname === "/") && (
        <Link
          className="notebook-nav__link"
          to={{ pathname: "/", state: { id: 0 } }}
          onFocus={() => setIsNavOpened(false)}
        >
          Back to cover
        </Link>
      )}
      {prevPage && (
        <Link
          className="notebook-nav__link"
          to={{ pathname: prevPage.url, state: { id: prevPage.id } }}
          onFocus={() => setIsNavOpened(false)}
        >
          Previous page
        </Link>
      )}
      <Button
        additionalClassnames="notebook-nav__link"
        body="Jump to"
        onClickHandler={() => setIsNavOpened(!isNavOpened)}
      />
      {isNavOpened && <NotebookNavJump linksList={links} />}
      {nextPage && (
        <Link
          className="notebook-nav__link"
          to={{ pathname: nextPage.url, state: { id: nextPage.id } }}
          onFocus={() => setIsNavOpened(false)}
        >
          Next page
        </Link>
      )}
    </nav>
  );
}

export default NotebookNav;
