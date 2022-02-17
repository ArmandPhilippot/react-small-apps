import { Button } from "../../components/forms";

function TodoListFilters({ currentView, setCurrentView }) {
  let allModifiers = ["filters"];
  let ongoingModifiers = ["filters"];
  let completedModifiers = ["filters"];

  switch (currentView) {
    case "all":
      allModifiers.push("current");
      break;
    case "ongoing":
      ongoingModifiers.push("current");
      break;
    case "completed":
      completedModifiers.push("current");
      break;
    default:
      break;
  }

  return (
    <div className="todos-filters">
      Show:
      <Button
        modifiers={allModifiers}
        onClickHandler={() => setCurrentView("all")}
      >
        All
      </Button>
      <Button
        modifiers={ongoingModifiers}
        onClickHandler={() => setCurrentView("ongoing")}
      >
        Ongoing
      </Button>
      <Button
        modifiers={completedModifiers}
        onClickHandler={() => setCurrentView("completed")}
      >
        Completed
      </Button>
    </div>
  );
}

export default TodoListFilters;
