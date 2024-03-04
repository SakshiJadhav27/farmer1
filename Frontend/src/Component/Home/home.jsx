import React,{useEffect} from 'react';
import "./home.css";
import {Navbar} from '../Navbar/navbar';
import BG_Video from "../../images/bg_video.mp4";
import BG_image from "../../images/bg_home1.jpg";
import BG_image2 from "../../images/bg_home.jpg";
import obj from "../../images/o_home3.jpg";
import obj1 from "../../images/o_home1.png";
import obj2 from "../../images/o_home2.png";
import obj3 from "../../images/o_home4.png";
import Aos from "aos"; 
import 'aos/dist/aos.css';
import { useLanguage } from '../LanguageTranslate/LanguageContext';


const CenteredImages = () => {
  const { translate } = useLanguage();
  useEffect(()=>{
    Aos.init({duration:1500})
  }, [])
  const objectives = [
    {
      id:1,
      title: "Empowering Farmers",
      description: "Empowering farmers with access to technology and resources for improved productivity and livelihoods.",
      image:obj
    },
    { 
      id:2,
      title: "Facilitating Market Access",
      description: "Facilitating market access for farmers to sell their produce directly to consumers, wholesalers, and retailers.",
      image: obj3
    },
    { 
      id:3,
      title: "Promoting Sustainable Agriculture",
      description: "Promoting sustainable farming practices that prioritize environmental conservation and soil health.",
      image: obj2
    },
    { 
      id:4,
      title: "Providing Financial Inclusion",
      description: "Providing financial inclusion by integrating government schemes, subsidies, and credit facilities.",
      image:obj1
    },
  ];
  return (           
      <div>
        <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <Navbar/>
        </div>
        <br/>
        <br/>
        <div className="f-bg" data-aos="fade-up">
          <video src={BG_Video} autoPlay loop muted type="video/mp4"></video>
          <div className="bg-content">
           <h2>{translate('welcome')}</h2>
           <p>{translate('content')}</p>
          </div>
        </div>
        <div className="hero-section"  data-aos="fade-up">
         <div className="image-container">
          <img src={BG_image2} alt="Image1" />
          </div>
          <div className="image-container1">
          <img src={BG_image} alt="Image2" />
         </div>
         <div className="content-container">
          <h1>{translate('content1')}</h1>
          <p>{translate('info')}</p>
         </div>
         <br/>
         <br/>
         <br/>
        </div>
     <div className="objectives-section"  data-aos="fade-up">
        <br/>
      <h2>Our Objectives</h2>
      <div className="objectives-content">
        <ul>
          {objectives.map(objective=> (
            <li key={objective.id}>
              <img src={objective.image} alt={objective.title}/>
              <div className="objective-details">
                <h3>{translate(objective.title)}</h3>
                <p>{translate(objective.description)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <footer>
        <p>&copy; 2023 Smart Farmer Assistant. All rights reserved.</p>
    </footer>
  </div>
  );
};

export default CenteredImages;


