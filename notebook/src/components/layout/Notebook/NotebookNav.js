import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List } from "../../commons";

function NotebookNav({ currentPage, setCurrentPage, pages, addNewPage }) {
  const location = useLocation();

  const [nextPage, setNextPage] = useState({});
  const [prevPage, setPrevPage] = useState({});

  useEffect(() => {
    if (!pages[currentPage.id + 1]) addNewPage();
    setNextPage(pages[currentPage.id + 1]);
    setPrevPage(() =>
      pages[currentPage.id - 1] ? pages[currentPage.id - 1] : null
    );
  }, [pages, currentPage.id, addNewPage]);

  useEffect(() => {
    setCurrentPage(pages.find((page) => page.id === location.state.id));
  });

  const isCoverPage = location.pathname === "/";

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
      {!isCoverPage && (
        <Link to={{ pathname: "/", state: { id: 0 } }}>
          Back at the beginning
        </Link>
      )}
      {prevPage && (
        <Link to={{ pathname: prevPage.url, state: { id: prevPage.id } }}>
          Previous page
        </Link>
      )}
      {nextPage && (
        <Link to={{ pathname: nextPage.url, state: { id: nextPage.id } }}>
          Next page
        </Link>
      )}
      <List data={links} />
    </nav>
  );
}

export default NotebookNav;
