import imgApropos from '../assets/img_apropos.jpg';

function Apropos() {
  return (
    <>
    <div className="banner">
        <div>
          <img src={imgApropos} alt="" />
        </div>
        <div className="filter"></div>
      </div>
    </>
  );
}

export default Apropos;

