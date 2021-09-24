import React, { useEffect, useState } from "react";
import MemeFieldset from "./MemeFieldset/MemeFieldset";

function MemeForm({ headlinesList, setHeadlinesList }) {
  const [fieldsetId, setFieldsetID] = useState(1);
  const [fieldsetList, setFieldsetList] = useState([]);

  useEffect(() => {
    fieldsetList.map((fieldset) => (
      <React.Fragment key={fieldset.id}>{fieldset.item}</React.Fragment>
    ));
  }, [fieldsetList]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const removeFieldset = (e) => {
    e.preventDefault();
    const fieldset = e.currentTarget.parentElement;
    const fieldsetIdParts = fieldset.id.split("-");
    const fieldsetId = Number(fieldsetIdParts[1]);
    setFieldsetList((array) => array.filter((item) => item.id !== fieldsetId));
  };

  const addNewFieldset = () => {
    setFieldsetID(fieldsetId + 1);
    let y;
    let x;
    switch (fieldsetId) {
      case 1:
        y = "Top";
        x = "Left";
        break;
      case 2:
        y = "Top";
        x = "Right";
        break;
      case 3:
        y = "Bottom";
        x = "Left";
        break;
      case 4:
        y = "Bottom";
        x = "Right";
        break;
      default:
        y = "Top";
        x = "Center";
        break;
    }
    setFieldsetList((previousArray) => [
      ...previousArray,
      {
        id: fieldsetId,
        item: (
          <MemeFieldset
            fieldsetId={fieldsetId}
            fieldsetList={fieldsetList}
            setHeadlinesList={setHeadlinesList}
            removeFieldset={removeFieldset}
            x={x}
            y={y}
          />
        ),
      },
    ]);
  };

  return (
    <form className="meme-form" action="#" onSubmit={handleSubmit}>
      {fieldsetList.map((fieldset) => (
        <React.Fragment key={fieldset.id}>{fieldset.item}</React.Fragment>
      ))}
      {fieldsetList.length < 4 && (
        <button className="meme-form__add btn" onClick={addNewFieldset}>
          Add a new text
        </button>
      )}
    </form>
  );
}

export default MemeForm;
