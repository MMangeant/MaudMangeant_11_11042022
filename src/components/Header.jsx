import logo from '../assets/logo.svg';
import '../style/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
       
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/apropos">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
