import { annonces }  from '../data/annonces';
import { useParams } from 'react-router-dom'


function Fiche() {

  const { id } = useParams()

  return (
    <>
      {/* <div class="banner">
        <div>
          <img src="images/img_fiche.jpg" alt="">
        </div>
      </div>
  
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
      <div>{ id }</div>
    </>
  );
}

export default Fiche;
