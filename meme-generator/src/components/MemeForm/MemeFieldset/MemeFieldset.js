import { useState } from "react";
import Fieldset from "../../commons/Fieldset";
import Input from "../../commons/Input";
import InputRange from "../../commons/InputRange";
import Select from "../../commons/Select";

function MemeFieldset({ y = "Top", x = "Center" }) {
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
  const [inputTextValue, setInputTextValue] = useState("");
  const [inputRangeValue, setInputRangeValue] = useState("");
  const [selectXValue, setSelectXValue] = useState("");
  const [selectYValue, setSelectYValue] = useState("");

  return (
    <Fieldset legend="Text settings">
      <div className="form__item">
        <Input
          inputValue={inputTextValue}
          setInputValue={setInputTextValue}
          label="Enter a text:"
          type="text"
          value="Edit here"
        />
      </div>
      <div className="form__item">
        <Select
          selectValue={selectYValue}
          setSelectValue={setSelectYValue}
          label="Choose a vertical position:"
          options={verticalOptions}
          defaultValue={y}
        />
      </div>
      <div className="form__item">
        <Select
          selectValue={selectXValue}
          setSelectValue={setSelectXValue}
          label="Choose a horizontal position:"
          options={horizontalOptions}
          defaultValue={x}
        />
      </div>
      <div className="form__item">
        <InputRange
          inputValue={inputRangeValue}
          setInputValue={setInputRangeValue}
          label="Select a font size:"
          value="20"
        />
      </div>
    </Fieldset>
  );
}

export default MemeFieldset;
