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
          <Link to="/">Accueil</Link>
          <Link to="/apropos">A propos</Link>
        </nav>
        
      </header>
    </>
  );
}

export default Header;
