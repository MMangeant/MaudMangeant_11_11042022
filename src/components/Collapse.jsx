import '../style/Collapse.css';
import { useState } from 'react'

import arrowDown from '../assets/arrowDown.svg';
import arrowUp from '../assets/arrowUp.svg';

function Collapse({label,contenu}) {

  const [isClosed, setIsClosed] = useState(true)

  return (
    <>
      { isClosed ? (
          <div className="collapse">
            <div className='label-collapse' onClick={() => setIsClosed(false)}>
              {label}
              <img src={ arrowDown } alt="" />
            </div>

          </div>
          ) : (
            <div className='collapse'>
              <div className='label-collapse' onClick={() => setIsClosed(true)}>
                {label}
                <img src={ arrowUp } alt="" />
              </div>
              <div className='ctn-collapse'>{contenu}</div>
            </div>
          )
        }
    </>
  );
}

export default Collapse;
