import { useEffect, useRef, useState } from "react";
import { Input, TextArea } from "../../commons";
import "./Page.css";

function Page({ page, setPage }) {
  const [isTitleEditable, setIsTitleEditable] = useState(false);
  const [isBodyEditable, setIsBodyEditable] = useState(false);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

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
    <article className="notebook-page">
      <header className="notebook-page__header">
        {!isTitleEditable && (
          <h2
            className="notebook-page__title"
            onClick={() => setIsTitleEditable(!isTitleEditable)}
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
              onBlurHandler={() => setIsTitleEditable(!isTitleEditable)}
            />
          </form>
        )}
      </header>
      {!isBodyEditable && (
        <div
          className="notebook-page__content"
          onClick={() => setIsBodyEditable(!isBodyEditable)}
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
            onBlurHandler={() => setIsBodyEditable(!isBodyEditable)}
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
