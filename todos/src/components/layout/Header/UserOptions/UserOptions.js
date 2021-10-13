import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../forms";
import "./UserOptions.scss";

function UserOptions({ username }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayUserOptions = () => {
    return (
      <nav className="nav nav--user">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/account" className="nav__link">
              Account
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/logout" className="nav__link">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <Button modifier="user" onClickHandler={() => setIsExpanded(!isExpanded)}>
        {username}
      </Button>
      {isExpanded ? displayUserOptions() : ""}
    </>
  );
}

export default UserOptions;
