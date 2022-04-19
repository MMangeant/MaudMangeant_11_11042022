import logo from '../assets/logo.svg';
import '../style/Footer.css';

function Footer() {
  return (
    <>
      <footer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
    </>
  );
}

export default Footer;