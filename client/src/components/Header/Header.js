import logo from "../../bubble-chat.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </NavLink>
      <h2>Chat-App</h2>
    </header>
  );
}

export default Header;
