import { useEffect, useState } from "react";
import Fieldset from "../../commons/Fieldset";
import Input from "../../commons/Input";
import InputRange from "../../commons/InputRange";
import Select from "../../commons/Select";

function MemeFieldset({ headline, setHeadline }) {
  const { id, text, fontSize, fontUnit, xPos, yPos } = headline;
  const horizontalOptions = ["Left", "Right", "Center"];
  const verticalOptions = ["Top", "Bottom", "Middle"];
  const [inputTextValue, setInputTextValue] = useState(text);
  const [inputRangeValue, setInputRangeValue] = useState(fontSize);
  const [selectX, setSelectX] = useState(xPos);
  const [selectY, setSelectY] = useState(yPos);

  useEffect(() => {
    setInputTextValue(text);
  }, [text]);

  useEffect(() => {
    setHeadline((previous) => {
      return previous.map((object) => {
        if (object.id !== id) return object;
        return {
          ...object,
          text: inputTextValue,
          fontSize: inputRangeValue,
          xPos: selectX,
          yPos: selectY,
        };
      });
    });
  }, [setHeadline, id, inputTextValue, inputRangeValue, selectX, selectY]);

  const onChange = (e) => {
    switch (e.target.name) {
      case "inputText":
        setInputTextValue(e.target.value);
        break;
      case "inputRange":
        setInputRangeValue(Number(e.target.value));
        break;
      case "selectX":
        setSelectX(e.target.value);
        break;
      case "selectY":
        setSelectY(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Fieldset id={id} legend="Text settings">
      <div className="form__item">
        <Input
          label="Enter your text:"
          id="inputText"
          name="inputText"
          value={inputTextValue}
          onChangeHandler={onChange}
        />
      </div>
      <div className="form__item">
        <InputRange
          label="Choose a font-size:"
          id="inputRange"
          name="inputRange"
          value={inputRangeValue}
          unit={fontUnit}
          onChangeHandler={onChange}
        />
      </div>
      <div className="form__item">
        <Select
          label="Select the vertical position:"
          id="selectY"
          name="selectY"
          options={verticalOptions}
          value={selectY}
          onChangeHandler={onChange}
        />
      </div>
      <div className="form__item">
        <Select
          label="Select the horizontal position:"
          id="selectX"
          name="selectX"
          options={horizontalOptions}
          value={selectX}
          onChangeHandler={onChange}
        />
      </div>
    </Fieldset>
  );
}

export default MemeFieldset;
