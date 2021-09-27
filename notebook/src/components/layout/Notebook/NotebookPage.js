import { useParams } from "react-router-dom";

function NotebookPage() {
  const { id } = useParams();
  return <div className="notebook__page">Page {id}</div>;
}

export default NotebookPage;
