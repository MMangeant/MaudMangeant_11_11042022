import '../style/Banner.css';


function Banner({img,slogan}) {

  return (
    <>
      <div className="banner">
        <h1>{ slogan }</h1>
        <div>
          <img src={ img } alt="" />
        </div>
        <div className="filter"></div>
      </div>

    </>
  );
}

export default Banner;
