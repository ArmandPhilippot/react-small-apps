import { useSelector } from "react-redux";
import UserOptions from "./UserOptions/UserOptions";
import "./Header.scss";

function Header() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <header className="header">
      <div className="container">
        <h1 className="branding">ToDos App</h1>
        {currentUser ? <UserOptions username={currentUser.username} /> : ""}
      </div>
    </header>
  );
}

export default Header;
