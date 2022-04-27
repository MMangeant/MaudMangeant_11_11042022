import '../style/Collapse.css';
import { useState } from 'react'

import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

function Gallery({img}) {

  const [firstImg, nextImg] = useState(0)

  return (
    <>
      <div className="diapo">
            <div>
              <img src={ img } alt="" />
            </div>
            <div className='arrows'>
              <img src={arrowLeft} alt="" className='arrowL' />
              <img src={arrowRight} alt="" className='arrowR'  onClick={() => nextImg(firstImg+1)} />
            </div>
          </div>
    </>
  );
}

export default Gallery;
