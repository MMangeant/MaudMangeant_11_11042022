import '../style/Gallery.css';
import { useState } from 'react'

import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

function Gallery({ pictures }) {

  const [firstImg, nextImg] = useState(0);

  return (
    <>
      <div className="diapo">
        <div>
          <img src={pictures[firstImg]} alt="" />
        </div>
        <div className='arrows'>
          <img src={arrowLeft} alt="" className='arrowL'
            onClick={() => firstImg === 0 ? (nextImg(pictures.length - 1)) : (nextImg(firstImg - 1))} />
          <img src={arrowRight} alt="" className='arrowR'
            onClick={() => firstImg === pictures.length - 1 ? (nextImg(0)) : (nextImg(firstImg + 1))} />
        </div>
      </div>
    </>
  );
}

export default Gallery;



