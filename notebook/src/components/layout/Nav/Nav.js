import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../commons";
import NavJump from "./NavJump";
import "./Nav.css";

function Nav({ pages, currentPage, addNewPage, isPageExists }) {
  const [isJumpEnabled, setIsJumpEnabled] = useState(false);

  const isCover = () => currentPage && currentPage.id === 0;
  const isFirstPage = () => currentPage && currentPage.id === 1;
  const is404 = () => currentPage && currentPage.id === null;

  useEffect(() => {
    setIsJumpEnabled(false);
  }, [currentPage.id]);

  return (
    <nav
      className="nav"
      onBlur={(e) => !e.relatedTarget && setIsJumpEnabled(false)}
    >
      {!isCover() && (
        <Link className="nav__link" to="/" onClick={(e) => e.target.blur()}>
          Back to cover
        </Link>
      )}
      {!isCover() && !isFirstPage() && isPageExists(currentPage.id - 1) && (
        <Link
          className="nav__link"
          to={`/page/${currentPage.id - 1}`}
          onFocus={() => setIsJumpEnabled(false)}
          onClick={(e) => e.target.blur()}
        >
          Previous page
        </Link>
      )}
      <Button
        additionalClassnames="nav__link"
        onClickHandler={() => setIsJumpEnabled(!isJumpEnabled)}
      >
        Jump to
      </Button>
      {isJumpEnabled && <NavJump pages={pages} />}
      {!is404() && (
        <Link
          className="nav__link"
          to={`/page/${currentPage.id + 1}`}
          onClick={(e) => {
            !isPageExists(currentPage.id + 1) && addNewPage();
            e.target.blur();
          }}
          onFocus={() => setIsJumpEnabled(false)}
        >
          Next page
        </Link>
      )}
    </nav>
  );
}

export default Nav;
