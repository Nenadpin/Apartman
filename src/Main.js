import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import imgen from "./images/britain-16.png";
import imgsr from "./images/serbia.png";
import img1 from "./images/2.jpg";
import img2 from "./images/4.jpg";
import img3 from "./images/7.jpg";
import img4 from "./images/11.jpg";
import img5 from "./images/16.jpg";

const Main = ({ setLng }) => {
  const items = [
    <img src={img1} className="sliderimg" alt="" />,
    <img src={img2} className="sliderimg" alt="" />,
    <img src={img3} className="sliderimg" alt="" />,
    <img src={img4} className="sliderimg" alt="" />,
    <img src={img5} className="sliderimg" alt="" />,
  ];

  return (
    <>
      <div className="main">
        <AliceCarousel
          autoWidth
          items={items}
          autoPlay
          infinite
          disableDotsControls
          animationType="fadeout"
          animationDuration={3000}
          disableButtonsControls
        />
      </div>
      <div className="flags">
        <img src={imgen} alt="English" onClick={() => setLng("en")} />
        <img src={imgsr} alt="Serbian" onClick={() => setLng("sr")} />
      </div>
    </>
  );
};

export default Main;
