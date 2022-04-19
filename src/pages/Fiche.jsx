import { annonces }  from '../data/annonces';
import { useParams } from 'react-router-dom'
import starVide from '../assets/starVide.svg';
import starPleine from '../assets/starPleine.svg';
import '../style/Fiche.css';


function Fiche() {

  const { id } = useParams()

  const range = [1, 2, 3, 4, 5]

  return (
    <>
      {/* 
  
      <section>
        <div class="entete">
          <div class="enteteGauche">
            <h1>Cozy loft on the Canal Saint-Martin</h1>
            <p>Paris, Île-de-France</p>
            <div class="tags">
              <div>Cosy</div>
            </div>
          </div>
          <div class="enteteDroite">
            <div class="proprio">
              <p>Alexandre Dumas</p>
              <img src="" alt="">
            </div>
            <div class="stars"></div>
          </div>
        </div>
      </section> */}

      
      {annonces.map((logement) => (
        logement.id === id ? 
        <div key={logement.id}>
          <div className="banner">
            <div>
              <img src={ logement.cover } alt="" />
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

            <div className="infos">
              <div>
                <div className='labelInfos'>Description</div>
                <div className='ctnInfos'>{logement.description}</div>
              </div>
              <div>
                <div className='labelInfos'>Équipements</div>
                <div  className='ctnInfos'>
                  {logement.equipments.map((equipment) => (
                    <div>{equipment}</div>
                  ))}
                </div>
              </div>
            </div>
        
        </div>
        : ''	
			))}
      
      
    </>
  );
}

export default Fiche;
