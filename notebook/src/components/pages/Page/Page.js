import { useEffect, useRef, useState } from "react";
import { TextArea } from "../../commons";
import "./Page.css";

function Page({ page, setPage }) {
  const [isEditable, setIsEditable] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current && textareaRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setPage((previous) => {
      return { ...previous, body: e.target.value };
    });
  };

  return (
    <article className="notebook-page">
      <header className="notebook-page__header">
        <h2 className="notebook-page__title">{page.title}</h2>
      </header>
      {!isEditable && (
        <div
          className="notebook-page__content"
          onClick={() => setIsEditable(!isEditable)}
        >
          {page.body}
        </div>
      )}
      {isEditable && (
        <form className="notebook-page__content" onSubmit={handleSubmit}>
          <TextArea
            ref={textareaRef}
            value={page.body}
            onChangeHandler={handleOnChange}
            onBlurHandler={() => setIsEditable(!isEditable)}
          />
        </form>
      )}
      <footer className="notebook-page__footer">
        <div className="notebook-page__number">{page.id}</div>
      </footer>
    </article>
  );
}

export default Page;
