import { useSelector } from "react-redux";
import UserOptions from "./UserOptions/UserOptions";

function Header() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <header className="header">
      <h1>ToDos App</h1>
      {currentUser ? <UserOptions username={currentUser.username} /> : ""}
    </header>
  );
}

export default Header;
