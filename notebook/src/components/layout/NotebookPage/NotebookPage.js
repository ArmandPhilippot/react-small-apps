import { useEffect, useRef, useState } from "react";
import TextArea from "../../commons/FormElements/TextArea";
import "./NotebookPage.css";

function NotebookPage({ data, setData }) {
  const { id, body, title } = data;
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setTextareaValue(body);
  }, [body]);

  useEffect(() => {
    textareaRef.current && textareaRef.current.focus();
  });

  const handleEditable = () => {
    setIsEditable(!isEditable);
  };

  const handleOnChange = (e) => {
    setData((previous) => {
      return { ...previous, body: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <article className="notebook-page">
      <header className="notebook-page__header">
        <h2 className="notebook-page__title">{title}</h2>
      </header>
      <div className="notebook-page__content">
        {isEditable ? (
          <form
            action="#"
            method="post"
            className="notebook-page__content-wrapper"
            onSubmit={handleSubmit}
          >
            <TextArea
              ref={textareaRef}
              value={textareaValue}
              onChangeHandler={handleOnChange}
              onBlurHandler={handleEditable}
            />
          </form>
        ) : (
          <div
            className="notebook-page__content-wrapper"
            onClick={handleEditable}
          >
            {textareaValue}
          </div>
        )}
      </div>
      <footer className="notebook-page__footer">
        <div className="notebook-page__number">{id}</div>
      </footer>
    </article>
  );
}

export default NotebookPage;
