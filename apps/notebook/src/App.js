import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Header, Main, Nav, Page } from "./components/layout";
import { useCallback, useEffect, useState } from "react";
import { defaultPages } from "./config/pages";
import "./App.css";

let pageId = 0;

function App() {
  const storedPages = JSON.parse(localStorage.getItem("notebook-pages"));
  const initialPages = storedPages || defaultPages;
  const [pages, setPages] = useState(initialPages);
  const [currentPage, setCurrentPage] = useState({});
  const [deletedPages, setDeletedPages] = useState([]);
  const location = useLocation();

  pageId = storedPages ? storedPages.at(storedPages.length - 1).id : pageId;

  const isCover = () => currentPage && currentPage.id === 0;
  const isPageExists = useCallback(
    (id) => {
      const pageIndex = pages.findIndex((page) => page.id === id);
      return pageIndex === -1 ? false : true;
    },
    [pages]
  );

  const addNewPage = useCallback(() => {
    pageId++;
    const newPage = {
      id: pageId,
      body: "",
      title: `Page ${pageId}`,
      url: `/page/${pageId}`,
    };
    setPages((previous) => [...previous, newPage]);
  }, []);

  const removePage = useCallback(() => {
    const currentPageId = currentPage.id;
    const pagesCopy = pages.slice(0);
    const currentPageIndex = pages.findIndex(
      (page) => page.id === currentPageId
    );
    setDeletedPages((prev) => [...prev, currentPage]);
    pagesCopy.splice(currentPageIndex, 1);
    const newPages = pagesCopy.map((page) => {
      if (page.id <= currentPageId) return page;
      const newId = page.id - 1;
      const newURL = `/page/${newId}`;
      return { ...page, id: newId, url: newURL };
    });
    setCurrentPage(...newPages.filter((page) => page.id === currentPageId));
    setPages(newPages);
    pageId = pageId - 1;
  }, [pages, currentPage]);

  const restorePage = useCallback(() => {
    const deletedPage = deletedPages.pop();
    const pagesCopy = pages.slice(0);
    const restoredPageIndex = pagesCopy.findIndex(
      (page) => page.id === deletedPage.id
    );
    const newPages = pagesCopy.map((page) => {
      if (page.id < deletedPage.id) return page;
      const newId = page.id + 1;
      const newURL = `/page/${newId}`;
      return { ...page, id: newId, url: newURL };
    });
    newPages.splice(restoredPageIndex, 0, deletedPage);
    setCurrentPage(...newPages.filter((page) => page.id === deletedPage.id));
    setPages(newPages);
  }, [pages, deletedPages]);

  useEffect(() => {
    !isPageExists(1) && addNewPage();
  }, [isPageExists, addNewPage]);

  useEffect(() => {
    const requestedPage = pages.find((page) => page.url === location.pathname);
    if (requestedPage) {
      setCurrentPage(requestedPage);
    } else {
      setCurrentPage(() => pages.find((page) => page.url === "/404"));
    }
  }, [location.pathname, pages]);

  useEffect(() => {
    if (currentPage) document.title = `Notebook - ${currentPage.title}`;
  }, [currentPage]);

  useEffect(() => {
    setPages((prevPages) => {
      return prevPages.map((page) => {
        if (page.id !== currentPage.id) return page;
        return { ...page, body: currentPage.body };
      });
    });
  }, [currentPage.id, currentPage.body]);

  useEffect(() => {
    setPages((prevPages) => {
      return prevPages.map((page) => {
        if (page.id !== currentPage.id) return page;
        return { ...page, title: currentPage.title };
      });
    });
  }, [currentPage.id, currentPage.title]);

  useEffect(() => {
    localStorage.setItem("notebook-pages", JSON.stringify(pages));
  }, [pages]);

  return (
    <>
      <Header />
      <Main>
        <div className={`notebook ${isCover() ? "notebook--cover" : ""}`}>
          <div className="notebook-page notebook-page--mirror"></div>
          <Routes>
            <Route
              path="/"
              element={
                <Page
                  page={currentPage}
                  setPage={setCurrentPage}
                  removePage={removePage}
                  restorePage={restorePage}
                  deletedPages={deletedPages}
                />
              }
            />
            <Route path="/page" element={<Navigate replace to="/404" />} />
            <Route path="/page/0" element={<Navigate replace to="/" />} />
            <Route
              path="/page/:number"
              element={
                <Page
                  page={currentPage}
                  setPage={setCurrentPage}
                  removePage={removePage}
                  restorePage={restorePage}
                  deletedPages={deletedPages}
                />
              }
            />
            <Route
              element={
                <Page
                  page={currentPage}
                  setPage={setCurrentPage}
                  removePage={removePage}
                  restorePage={restorePage}
                  deletedPages={deletedPages}
                />
              }
              path="/404"
            />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
        <Nav
          pages={pages}
          currentPage={currentPage}
          addNewPage={addNewPage}
          isPageExists={isPageExists}
        />
      </Main>
      <Footer />
    </>
  );
}

export default App;
