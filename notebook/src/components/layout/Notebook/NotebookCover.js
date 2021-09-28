function NotebookCover({ data }) {
  const { title } = data;

  return <div className="notebook__page notebook__page--cover">{title}</div>;
}

export default NotebookCover;
