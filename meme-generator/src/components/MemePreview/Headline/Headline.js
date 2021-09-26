import { useEffect, useRef, useState } from "react";
import Form from "../../commons/Form";
import Input from "../../commons/Input";

function Headline({ id, text, fontSize, xPos, yPos, setHeadlines }) {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    isEditing && inputRef.current.focus();
  });

  const [inputValue, setInputValue] = useState(text);
  useEffect(() => {
    setInputValue(text);
  }, [text]);

  const getXPos = () => {
    let styles = {};
    switch (xPos) {
      case "Left":
        styles = { gridColumn: 1, textAlign: "left" };
        break;
      case "Right":
        styles = { gridColumn: 2, textAlign: "right" };
        break;
      case "Center":
        styles = {
          gridColumnStart: 1,
          gridColumnEnd: "span 2",
          justifySelf: "center",
          textAlign: "center",
        };
        break;
      default:
        break;
    }
    return styles;
  };

  const getYPos = () => {
    let styles = {};
    switch (yPos) {
      case "Top":
        styles = { gridRow: 1 };
        break;
      case "Bottom":
        styles = { gridRow: 3, alignSelf: "end" };
        break;
      case "Middle":
        styles = { gridRow: 2, alignSelf: "center" };
        break;
      default:
        break;
    }
    return styles;
  };

  const styles = {
    fontSize: fontSize,
    ...getYPos(),
    ...getXPos(),
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const updateText = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    setHeadlines((previous) => {
      return previous.map((headline) => {
        if (headline.id !== id) return headline;
        return { ...headline, text: inputValue };
      });
    });
  }, [setHeadlines, id, inputValue]);

  useEffect(() => {
    setHeadlines((previous) => {
      return previous.map((headline) => {
        if (headline.id !== id) return headline;
        return { ...headline, text: inputValue };
      });
    });
  }, [setHeadlines, id, inputValue]);

  const onBlur = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <Form onSubmitHandler={onSubmit} styles={styles}>
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
          style={styles}
        >
          {inputValue}
        </p>
      )}
    </>
  );
}

export default Headline;
