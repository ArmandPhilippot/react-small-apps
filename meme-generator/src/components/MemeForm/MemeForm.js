import { useState } from "react";
import Fieldset from "../commons/Fieldset";
import Form from "../commons/Form";
import Input from "../commons/Input";
import InputRange from "../commons/InputRange";
import Select from "../commons/Select";

function MemeForm() {
  const horizontalOptions = ["Left", "Right", "Center"];
  const verticalOptions = ["Top", "Bottom", "Middle"];
  const [inputTextValue, setInputTextValue] = useState("Edit here...");
  const [inputRangeValue, setInputRangeValue] = useState(100);
  const [selectX, setSelectX] = useState(horizontalOptions[0]);
  const [selectY, setSelectY] = useState(verticalOptions[0]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "inputText":
        setInputTextValue(e.target.value);
        break;
      case "inputRange":
        setInputRangeValue(e.target.value);
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
    <div className="meme-form">
      <Form onSubmitHandler={onSubmit}>
        <Fieldset legend="Text settings">
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
      </Form>
    </div>
  );
}

export default MemeForm;
