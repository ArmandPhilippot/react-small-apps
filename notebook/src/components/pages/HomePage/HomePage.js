import "./HomePage.css";

function HomePage({ page }) {
  return (
    <article className="notebook-page notebook-page--cover">
      <header className="notebook-page__header">
        <h2 className="notebook-page__title">{page.title}</h2>
      </header>
      <div className="notebook-page__content">{page.body}</div>
    </article>
  );
}

export default HomePage;
