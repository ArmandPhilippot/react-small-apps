import { useEffect, useRef, useState } from "react";
import Form from "../../commons/Form";
import Input from "../../commons/Input";

function Headline() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("Edit here...");
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const updateText = (e) => {
    setInputValue(e.target.value);
  };

  const onBlur = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    isEditing && inputRef.current.focus();
  });

  return (
    <>
      {isEditing ? (
        <Form onSubmitHandler={onSubmit}>
          <Input
            value={inputValue}
            ref={inputRef}
            onChangeHandler={updateText}
            onBlurHandler={onBlur}
            additionalClasses="meme-preview__headline"
          />
        </Form>
      ) : (
        <p
          className="meme-preview__headline"
          onClick={() => setIsEditing(true)}
        >
          Edit here...
        </p>
      )}
    </>
  );
}

export default Headline;
