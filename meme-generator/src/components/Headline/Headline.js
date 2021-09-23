import { useEffect, useRef, useState } from "react";

function Headline({ position }) {
  const inputEl = useRef(null);
  const [headline, setHeadline] = useState("Edit here");
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    isClicked && inputEl.current.focus();
  });

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
        className={`meme-preview__input meme-preview__headline meme-preview__headline--${
          position === "first" ? "first" : "last"
        }`}
        value={headline}
        ref={inputEl}
        onChange={handleChange}
        onBlur={() => setIsClicked(false)}
      />
    </form>
  ) : (
    <p
      className={`meme-preview__headline meme-preview__headline--${
        position === "first" ? "first" : "last"
      }`}
      onClick={onTextClick}
    >
      {headline}
    </p>
  );
}

export default Headline;
