import { useState } from "react";
import { Button, List } from "../../commons";

function NotebookNav({ pages, setPages }) {
  const [pageId, setPageId] = useState(1);

  const newPage = {
    id: pageId,
    title: `Page ${pageId}`,
    url: "#",
  };

  const links = pages.map((page) => {
    return {
      id: page.id,
      body: <a href={page.url}>{page.title}</a>,
    };
  });

  const addNewPage = () => {
    setPageId((previous) => previous + 1);
    setPages((previous) => [...previous, newPage]);
  };

  return (
    <nav className="notebook__nav">
      <List data={links} />
      <Button body="New page" onClickHandler={addNewPage} />
    </nav>
  );
}

export default NotebookNav;
