import { useState } from "react";
import MemeForm from "../MemeForm/MemeForm";
import MemePreview from "../MemePreview/MemePreview";

function Main() {
  const [headlinesList, setHeadlinesList] = useState([]);

  return (
    <main className="main">
      <MemePreview headlinesList={headlinesList} />
      <MemeForm
        headlinesList={headlinesList}
        setHeadlinesList={setHeadlinesList}
      />
    </main>
  );
}

export default Main;
