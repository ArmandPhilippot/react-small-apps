import { useState } from "react";
import Button from "../commons/Button";
import Form from "../commons/Form";
import MemeFieldset from "./MemeFieldset/MemeFieldset";

function MemeForm({ headlines, setHeadlines }) {
  const [fieldsetId, setFieldsetId] = useState(1);
  const horizontalOptions = ["Left", "Right", "Center"];
  const verticalOptions = ["Top", "Bottom", "Middle"];

  const fieldsetData = {
    id: fieldsetId,
    legend: `Text settings ${fieldsetId}`,
    text: "Edit here...",
    fontSize: 100,
    fontUnit: "%",
    xPos: horizontalOptions[(fieldsetId - 1) % horizontalOptions.length],
    yPos: verticalOptions[(fieldsetId - 1) % verticalOptions.length],
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const fieldsetsList = headlines.map((headline) => {
    return (
      <MemeFieldset
        key={headline.id}
        headline={headline}
        setHeadline={setHeadlines}
        xOptions={horizontalOptions}
        yOptions={verticalOptions}
      />
    );
  });

  const addNewFieldset = () => {
    setFieldsetId((previous) => previous + 1);
    setHeadlines((array) => [...array, fieldsetData]);
  };

  return (
    <div className="meme-form">
      <Form onSubmitHandler={onSubmit}>
        {fieldsetsList}
        {fieldsetsList.length < 4 && (
          <Button body="Add new text" onClick={addNewFieldset} modifier="add" />
        )}
      </Form>
    </div>
  );
}

export default MemeForm;
