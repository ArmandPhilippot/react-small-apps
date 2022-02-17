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
            activeClassName="list__link--current"
            className="list__link"
            aria-current="page"
            exact
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
