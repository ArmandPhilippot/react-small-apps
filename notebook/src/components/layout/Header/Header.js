import "./Header.css";

function Header({ children }) {
  return (
    <header className="header">
      <h1 className="header__branding">Notebook</h1>
      {children}
    </header>
  );
}

export default Header;
