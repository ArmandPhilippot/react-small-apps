function NoMatch({ page }) {
  return (
    <div className="notebook-page notebook-page--not-found">
      <header className="notebook-page__header">
        <h2 className="notebook-page__title">{page.title}</h2>
      </header>
      <div className="notebook-page__content">{page.body}</div>
    </div>
  );
}

export default NoMatch;
