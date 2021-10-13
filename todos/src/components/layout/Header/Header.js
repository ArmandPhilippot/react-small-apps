import { useSelector } from "react-redux";
import UserOptions from "./UserOptions/UserOptions";
import "./Header.scss";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  const closeModal = (e) => {
    if (!headerRef.current.contains(e.relatedTarget)) setIsExpanded(false);
  };

  return (
    <header ref={headerRef} className="header" onBlur={closeModal}>
      <div className="container">
        <h1 className="branding">ToDos App</h1>
        {currentUser ? (
          <UserOptions
            username={currentUser.username}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
