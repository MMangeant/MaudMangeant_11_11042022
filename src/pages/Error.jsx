import { Link } from 'react-router-dom'
import '../style/Error.css';

function Error() {
  return (
    <>
    <section className='sectionError'>
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
    </>
  );
}

export default Error;