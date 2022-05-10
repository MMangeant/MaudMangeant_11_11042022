import imgApropos from '../assets/img_apropos.jpg';

import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

const ctn_collapse = {
	0: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
	1: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
	2: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
	3: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}

function Apropos() {

 

  return (
    <>
      <Banner img={ imgApropos } slogan="" />

      <div className='padding-collapse'>

        <Collapse label='Fiabilité' contenu={ctn_collapse[0]} />
        <Collapse label='Respect' contenu={ctn_collapse[1]} />
        <Collapse label='Service' contenu={ctn_collapse[2]} />
        <Collapse label='Sécurité' contenu={ctn_collapse[3]} />

      </div>
    </>
  );



  
}

export default Apropos;

