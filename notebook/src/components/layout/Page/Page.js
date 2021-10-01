import { useEffect, useRef } from "react";
import { Input, TextArea } from "../../commons";
import useToggle from "../../helpers/hooks/useToggle";
import PageToolbar from "./PageToolbar";
import "./Cover.css";
import "./Page.css";

function Page({ page, setPage, removePage, restorePage, deletedPages }) {
  const [isTitleEditable, setIsTitleEditable] = useToggle();
  const [isBodyEditable, setIsBodyEditable] = useToggle();
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  const isCover = () => page && page.id === 0;
  const is404 = () => page && page.id === null;

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
    textareaRef.current && textareaRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    let newValue = {};

    switch (e.target.name) {
      case "notebook-title":
        newValue = { title: e.target.value };
        break;
      case "notebook-body":
        newValue = { body: e.target.value };
        break;
      default:
        break;
    }

    setPage((previous) => {
      return { ...previous, ...newValue };
    });
  };

  return (
    <article
      className={`notebook-page ${isCover() ? "notebook-page--cover" : ""}`}
    >
      <header className="notebook-page__header">
        {!isTitleEditable && (
          <h2
            className="notebook-page__title"
            onClick={() => {
              if (!is404()) setIsTitleEditable();
            }}
          >
            {page.title}
          </h2>
        )}
        {isTitleEditable && (
          <form className="notebook-page__title" onSubmit={handleSubmit}>
            <Input
              ref={inputRef}
              name="notebook-title"
              value={page.title}
              onChangeHandler={handleOnChange}
              onBlurHandler={setIsTitleEditable}
            />
          </form>
        )}
      </header>
      {!isBodyEditable && (
        <div
          className="notebook-page__content"
          onClick={() => {
            if (!is404()) setIsBodyEditable();
          }}
        >
          {page.body}
        </div>
      )}
      {isBodyEditable && (
        <form className="notebook-page__content" onSubmit={handleSubmit}>
          <TextArea
            ref={textareaRef}
            name="notebook-body"
            value={page.body}
            onChangeHandler={handleOnChange}
            onBlurHandler={setIsBodyEditable}
          />
        </form>
      )}
      <footer className="notebook-page__footer">
        {!isCover() && <div className="notebook-page__number">{page.id}</div>}
        {!isCover() && (
          <PageToolbar
            removePage={removePage}
            restorePage={restorePage}
            deletedPages={deletedPages}
          />
        )}
      </footer>
    </article>
  );
}

export default Page;
