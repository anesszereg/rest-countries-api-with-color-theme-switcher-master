import { BsFillSunFill } from "react-icons/bs";
import './Navbar.css';

function NavBar({isDarkMode}) {
  return (
    <nav className={`nav-bar ${isDarkMode ? "dark" : "" }`}>
      <header className="nav-bar__heading">Where in the world?</header>
      <button
        className={`nav-bar__wrap ${isDarkMode ? "dark" : ""}`}
        // onClick={handleToggleDarkMode}
      >
        <BsFillSunFill
  />

        Dark Mode
      </button>
    </nav>
  );
}

export default NavBar;
