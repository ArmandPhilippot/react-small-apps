import { useEffect, useRef, useState } from "react";
import Fieldset from "../../commons/Fieldset";
import Input from "../../commons/Input";
import InputRange from "../../commons/InputRange";
import Select from "../../commons/Select";

function MemeFieldset({
  fieldsetId,
  setHeadlinesList,
  removeFieldset,
  y = "Top",
  x = "Center",
}) {
  const verticalOptions = [
    { value: "Top", name: "top" },
    { value: "Middle", name: "middle" },
    { value: "Bottom", name: "bottom" },
  ];
  const horizontalOptions = [
    { value: "Left", name: "left" },
    { value: "Center", name: "center" },
    { value: "Right", name: "right" },
  ];
  const inputText = useRef(null);
  const [inputTextValue, setInputTextValue] = useState("Edit here");
  const [inputRangeValue, setInputRangeValue] = useState("100");
  const [selectXValue, setSelectXValue] = useState(x);
  const [selectYValue, setSelectYValue] = useState(y);

  useEffect(() => {
    const newHeadline = {
      id: fieldsetId,
      text: inputTextValue,
      size: inputRangeValue,
      x: selectXValue,
      y: selectYValue,
    };
    setHeadlinesList((array) => {
      if (array.length === 0) return [newHeadline];

      const headlineIndex = array.find(
        (headline) => headline.id === newHeadline.id
      );
      if (headlineIndex) {
        return array.map((headline) => {
          if (headline.id === newHeadline.id) return newHeadline;
          return headline;
        });
      } else {
        array.push(newHeadline);
        return array;
      }
    });
  });

  return (
    <Fieldset id={fieldsetId} legend={`Text settings ${fieldsetId}`}>
      <button className="meme-form__delete" onClick={removeFieldset}>
        Delete
      </button>
      <div className="form__item">
        <Input
          ref={inputText}
          value={inputTextValue}
          setInputValue={setInputTextValue}
          label="Enter a text:"
          type="text"
        />
      </div>
      <div className="form__item">
        <Select
          setSelectValue={setSelectYValue}
          label="Choose a vertical position:"
          options={verticalOptions}
          value={selectYValue}
        />
      </div>
      <div className="form__item">
        <Select
          setSelectValue={setSelectXValue}
          label="Choose a horizontal position:"
          options={horizontalOptions}
          value={selectXValue}
        />
      </div>
      <div className="form__item">
        <InputRange
          inputValue={inputRangeValue}
          setInputValue={setInputRangeValue}
          label="Select a font size:"
          value={inputRangeValue}
          min="50"
          max="250"
          unit="%"
        />
      </div>
    </Fieldset>
  );
}

export default MemeFieldset;
