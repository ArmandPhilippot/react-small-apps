import { useEffect } from "react";

function NotebookCover({ setCurrentPage, data }) {
  const { title } = data;

  useEffect(() => {
    setCurrentPage({
      id: 0,
      body: "",
      title: "My notebook",
      url: `/`,
    });
  }, [setCurrentPage]);

  return <div className="notebook__page notebook__page--cover">{title}</div>;
}

export default NotebookCover;
