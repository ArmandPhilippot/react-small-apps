import { useEffect, useRef, useState } from "react";

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
    <div className="notebook__page page">
      <div className="page__title">{title}</div>
      {isEditable ? (
        <textarea
          ref={textareaRef}
          className="page__content"
          value={textareaValue}
          onChange={handleOnChange}
          onBlur={handleEditable}
        />
      ) : (
        <div className="page__content" onClick={handleEditable}>
          {textareaValue}
        </div>
      )}
      <div className="page__footer">{id}</div>
    </div>
  );
}

export default NotebookPage;
