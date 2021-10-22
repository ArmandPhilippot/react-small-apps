import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Fieldset, Input, TextArea } from "../../components/forms";
import { addTodo } from "../../store/todos/todos.slice";

function TodoForm({ userId, closeForm }) {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    closeForm((prev) => !prev);
  };

  const handleSave = () => {
    const newTodo = { userId, title: titleValue, body: bodyValue };
    dispatch(addTodo(newTodo));
  };

  return (
    <form onSubmit={handleSubmit} className="form form--todo">
      <Fieldset legend="Add a new todo">
        <Input label="Title" value={titleValue} updateValue={setTitleValue} />
        <TextArea
          label="Details"
          value={bodyValue}
          updateValue={setBodyValue}
        />
        <Button
          type="submit"
          modifiers={["submit"]}
          onClickHandler={handleSave}
        >
          Save
        </Button>
      </Fieldset>
    </form>
  );
}

export default TodoForm;
