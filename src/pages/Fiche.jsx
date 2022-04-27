import { annonces }  from '../data/annonces';
import { useParams } from 'react-router-dom'
import starVide from '../assets/starVide.svg';
import starPleine from '../assets/starPleine.svg';
import Collapse from '../components/Collapse';
import '../style/Fiche.css';
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';


function Fiche() {

  const { id } = useParams()

  const range = [1, 2, 3, 4, 5]

  return (
    <>

      
      {annonces.map((logement) => (



        logement.id === id ? 
        <div key={logement.id}>

          <div className="diapo">
            <div>
              <img src={ logement.cover } alt="" />
            </div>
            <div className='arrows'>
              <img src={arrowLeft} alt="" className='arrowL' />
              <img src={arrowRight} alt="" className='arrowR'/>
            </div>
          </div>


            <div className="entete">
              <div className="enteteGauche">
                <div>
                  <h1>{logement.title}</h1>
                  <p>{logement.location}</p>
                </div>
                <div className="tags">
                {logement.tags.map((tag) => (
                  <div>{tag}</div>
                  ))}
                  
                </div>
              </div>
              <div className="enteteDroite">
                <div className="proprio">
                  <p>{logement.host.name}</p>
                  <img src={logement.host.picture} alt="" />
                </div>
                <div className="stars">
                  {range.map((rangeElem) => logement.rating >= rangeElem ? <img src={ starPleine } alt="" /> : <img src={ starVide } alt="" />)}
                </div>
              </div>
            </div>

            <div className="grid-collapse">
              
              <Collapse label='Description' contenu={logement.description} />

              <Collapse 
                  label='Équipements' 
                  contenu={logement.equipments.map((equipment) => (<div>{equipment}</div>))} 
              />
      
            </div>
        
        </div>
        : ''	
			))}
      
      
    </>
  );
}

export default Fiche;
