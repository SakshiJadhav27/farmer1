import React,{useState,useEffect} from "react";
import "./wholesalerHome.css";
import { WholesalerNavbar } from "../../Navbar/navbar";
import w_home from "../../../images/wholesaler_home.jpg"
import w_home1 from "../../../images/wholesaler_home2.jpg"
const WholesalerHome =()=>{
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: w_home,
      description: "Farmer's markets offer fresh, seasonal produce harvested directly from local farms, ensuring optimal taste, quality, and nutritional value.",
    },
    {
      src: w_home1,
      description: 'Empowering wholesalers to thrive in a rapidly changing market landscape.',
    }
  ];
  const handleImageHover = () => {
    setCurrentImage(current => (current + 1) % images.length);
  };

    return(
      <div>
        <div className="position-fixed w-100" style={{zIndex:"100000"}}>
         <WholesalerNavbar/>
        </div>
        <br/>
        <div style={{ textAlign: 'center' }}>
      <div className="wimage-container" onMouseEnter={handleImageHover}>
        <img src={images[currentImage].src} alt={`Image ${currentImage + 1}`} />
        <div className="message">
          {/*<h2>{images[currentImage].message}</h2>*/}
          <p>{images[currentImage].description}</p>
        </div>
       </div>
      </div>
    </div>
    )
}
export default WholesalerHome;