import { annonces }  from '../data/annonces';
import { Link } from 'react-router-dom';
import imgHome from '../assets/img_accueil.jpg';
import Banner from '../components/Banner';
import '../style/Home.css';
import '../style/index.css';

function Home() {
  return (
    <>

    <Banner img={ imgHome } slogan="Chez vous, partout et ailleurs" />
  
      <section className="sectionHome">
        <div>
          {annonces.map((logement) => (
            <article key={logement.id}>
              <Link to={`logements/${logement.id}`}>
                <h2>{logement.title}</h2>
                <div className="filter"></div>
                <img src={logement.cover} alt="" />
              </Link>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}

export default Home;

