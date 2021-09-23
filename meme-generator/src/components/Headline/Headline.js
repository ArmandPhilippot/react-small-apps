import { useState } from "react";

function Headline({ position }) {
  const [headline, setHeadline] = useState("Edit here");

  return (
    <p
      className={`meme-generator__headline meme-generator__headline--${
        position === "first" ? "first" : "last"
      }`}
    >
      {headline}
    </p>
  );
}

export default Headline;
