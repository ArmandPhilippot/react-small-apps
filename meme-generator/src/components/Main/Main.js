import { useState } from "react";
import MemeForm from "../MemeForm/MemeForm";
import MemePreview from "../MemePreview/MemePreview";

function Main() {
  const defaultHeadline = {
    text: "Edit here...",
    fontSize: 100,
    fontUnit: "%",
    xPos: "Left",
    yPos: "Top",
  };
  const [headlines, setHeadlines] = useState(defaultHeadline);

  return (
    <main className="main">
      <MemePreview headlines={headlines} setHeadlines={setHeadlines} />
      <MemeForm headlines={headlines} setHeadlines={setHeadlines} />
    </main>
  );
}

export default Main;
