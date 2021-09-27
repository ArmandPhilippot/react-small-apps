import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, List } from "../../commons";

function NotebookNav({ pages, setPages }) {
  const [pageId, setPageId] = useState(1);

  const newPage = {
    id: pageId,
    title: `Page ${pageId}`,
    url: "#",
  };

  const links = pages.map((page) => {
    const url = `/${page.id}`;
    return {
      id: page.id,
      body: <Link to={url}>{page.title}</Link>,
    };
  });

  const addNewPage = () => {
    setPageId((previous) => previous + 1);
    setPages((previous) => [...previous, newPage]);
  };

  return (
    <nav className="notebook__nav">
      <Link to="/">Back at the beginning</Link>
      <List data={links} />
      <Button body="New page" onClickHandler={addNewPage} />
    </nav>
  );
}

export default NotebookNav;
