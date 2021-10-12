import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../forms";

function UserOptions({ username }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayUserOptions = () => {
    return (
      <nav>
        <ul>
          <li>Account</li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Button onClickHandler={() => setIsExpanded(!isExpanded)}>
        {username}
      </Button>
      {isExpanded ? displayUserOptions() : ""}
    </>
  );
}

export default UserOptions;
