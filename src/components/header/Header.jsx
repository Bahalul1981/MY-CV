import "../properties/App.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="header-for-all-components">
        <nav>
          <ul>
            <li>
              <Link to="/cv">CV</Link>
            </li>
            <li>
              <Link to="/more">MORE ABOUT ME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/">MAIN</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
