import { NavLink } from "react-router-dom";
import { List } from "../../commons";

function NavJump({ pages }) {
  const links = pages
    .filter((page) => page.id > 0)
    .map((page) => {
      return {
        id: page.id,
        body: (
          <NavLink
            key={page.id}
            className={({ isActive }) =>
              isActive ? "list__link--current" : "list__link"
            }
            aria-current="page"
            to={page.url}
          >
            {page.title}
          </NavLink>
        ),
      };
    });

  return <List data={links} modifier="nav" />;
}

export default NavJump;
