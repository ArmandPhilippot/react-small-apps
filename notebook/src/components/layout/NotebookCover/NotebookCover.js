import { useEffect } from "react";
import "./NotebookCover.css";

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

  return <div className="notebook-page notebook-page--cover">{title}</div>;
}

export default NotebookCover;
