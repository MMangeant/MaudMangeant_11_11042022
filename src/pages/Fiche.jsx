

import { annonces } from '../data/annonces';
import { useParams, Navigate } from 'react-router-dom';
import starVide from '../assets/starVide.svg';
import starPleine from '../assets/starPleine.svg';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import '../style/Fiche.css';



function Fiche() {

  const { id } = useParams()

  const range = [1, 2, 3, 4, 5]

  const tableID = annonces.filter((logement) => logement.id === id)


  if (tableID.length === 1) {

    return (
      <>

        {annonces.map((logement) => (

          logement.id === id ?


            <div key={logement.id}>

              <Gallery pictures={logement.pictures.map((image) => (image))} />

              <div className="entete">

                <div className="enteteGauche">
                  <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                  </div>
                  <div className="tags">
                    {logement.tags.map((tag) => (
                      <div key={tag}>{tag}</div>
                    ))}
                  </div>
                </div>
                <div className="enteteDroite">
                  <div className="proprio">
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt="" />
                  </div>
                  <div className="stars">
                    {range.map((rangeElem) => logement.rating >= rangeElem ? <img key={rangeElem} src={starPleine} alt="" /> : <img key={rangeElem} src={starVide} alt="" />)}
                  </div>
                </div>
              </div>

              <div className="grid-collapse">

                <Collapse label='Description' contenu={logement.description} />

                <Collapse
                  label='Équipements'
                  contenu={logement.equipments.map((equipment) => (<div key={equipment}>{equipment}</div>))}
                />

              </div>

            </div>
            : ''
        ))}

      </>
    );
  }
  else {
    return <Navigate to='/error' />
  }

}

export default Fiche;
