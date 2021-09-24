import { useEffect, useRef, useState } from "react";

function Headline({ headlineSettings }) {
  const inputEl = useRef(null);
  const [headline, setHeadline] = useState("");
  useEffect(() => {
    setHeadline(headlineSettings.text);
  }, [headline, headlineSettings]);

  const [fontSize, setFontSize] = useState("");
  useEffect(() => {
    setFontSize(`${headlineSettings.size}%`);
  }, [fontSize, headlineSettings]);

  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    isClicked && inputEl.current.focus();
  });

  const getYPosition = () => {
    let styles = {};
    switch (headlineSettings.y) {
      case "Top":
        styles = { top: 0 };
        break;
      case "Middle":
        styles = { top: "50%" };
        break;
      case "Bottom":
        styles = { bottom: 0 };
        break;
      default:
        break;
    }
    return styles;
  };

  const getXPosition = () => {
    let styles = {};
    switch (headlineSettings.x) {
      case "Left":
        styles = { left: "2%" };
        break;
      case "Center":
        styles = { left: 0, right: 0, textAlign: "center" };
        break;
      case "Right":
        styles = { right: "2%" };
        break;
      default:
        break;
    }
    return styles;
  };

  const styles = {
    fontSize,
    position: "absolute",
    ...getYPosition(),
    ...getXPosition(),
  };

  const onTextClick = () => {
    setIsClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(false);
  };

  const handleChange = (e) => {
    setHeadline(e.target.value);
  };

  return isClicked ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={`meme-preview__input meme-preview__headline`}
        value={headline}
        ref={inputEl}
        onChange={handleChange}
        onBlur={() => setIsClicked(false)}
        style={styles}
      />
    </form>
  ) : (
    <p
      className={`meme-preview__headline`}
      onClick={onTextClick}
      style={styles}
    >
      {headline}
    </p>
  );
}

export default Headline;
