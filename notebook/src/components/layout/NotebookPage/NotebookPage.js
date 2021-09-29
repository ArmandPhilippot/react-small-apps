import { useEffect, useRef, useState } from "react";
import "./NotebookPage.css";

function NotebookPage({ data }) {
  const { id, body, title } = data;
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState(body);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    textareaRef.current && textareaRef.current.focus();
  });

  const handleEditable = () => {
    setIsEditable(!isEditable);
  };

  const handleOnChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <article className="notebook-page">
      <header className="notebook-page__header">
        <h2 className="notebook-page__title">{title}</h2>
      </header>
      <div className="notebook-page__content">
        {isEditable ? (
          <textarea
            ref={textareaRef}
            className="notebook-page__content-wrapper"
            value={textareaValue}
            onChange={handleOnChange}
            onBlur={handleEditable}
          />
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
