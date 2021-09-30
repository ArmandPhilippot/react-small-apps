import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Footer, Header, Main, Nav } from "./components/layout";
import { HomePage, NoMatch, Page } from "./components/pages";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { defaultPages } from "./config/pages";

let pageId = 0;

function App() {
  const [pages, setPages] = useState(defaultPages);
  const [currentPage, setCurrentPage] = useState({});
  const location = useLocation();

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

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route
            exact
            strict
            path="/page/:number"
            render={(route) => {
              const requestedPageId = parseInt(route.match.params.number, 10);
              if (requestedPageId === 0) return <Redirect to="/" />;
              if (isPageExists(requestedPageId))
                return <Page page={currentPage} setPage={setCurrentPage} />;
              return <Redirect to="/404" />;
            }}
          />
          <Route exact strict path="/404">
            <NoMatch page={currentPage} />
          </Route>
          <Route exact strict path="/">
            <HomePage page={currentPage} />
          </Route>
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
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
