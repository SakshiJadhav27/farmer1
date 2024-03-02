import {useEffect} from 'react';
import "./about.css";
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';
import { Navbar } from '../Navbar/navbar';
//import Background from "../../images/about-background.jpg";

const AboutUs = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
    <div>
    <div className="position-fixed w-100" style={{zIndex:"100000"}}>
      <Navbar/>
    </div>
    <br/>
    <br/>
    <br />
    <div data-aos="fade-up" className="about-us">
      <header>
        <h3></h3>
        <h3></h3>

        <h1>About Us</h1>
        <h3></h3>
        <h2><center>Facilitating marketing of organic produce</center></h2>
        <h3></h3>
      </header>
      <main>
        <section className="introduction">
         {/* <h2>Introduction</h2>*/}
          <p>Welcome to our website! We are dedicated to providing innovative solutions for farmers to enhance their productivity and efficiency.</p>
         </section>
         <section className="our-story">
          {/*<h2>Our Story</h2>*/}
          <p className='p1'>The Smart Farmer Assistant project was born out of our passion for leveraging technology to empower farmers and revolutionize agriculture. We recognized the challenges faced by farmers in accessing markets, managing their crops, and staying informed about weather conditions and government schemes. In response, we embarked on a journey to develop a comprehensive platform that connects farmers with wholesalers, provides real-time weather updates, and facilitates access to relevant government schemes and resources.</p>
          <p className='p2'>Smart Farmer Assistant aims to revolutionize the agricultural industry by providing farmers with innovative tools and resources to optimize their farming practices and improve their livelihoods. Our mission is to empower farmers with technology-driven solutions that enhance productivity, efficiency, and sustainability in agriculture.</p>
        </section>
        <section className='project'>
        {/*<h2>Project Background</h2>*/}
        <p className='p3'>Smart Farmer Assistant was born out of a shared vision to leverage technology for the betterment of agriculture. Recognizing the challenges faced by farmers in accessing market information, agricultural inputs, and advisory services, we set out to develop a comprehensive platform that addresses these needs.</p>
        <p className='p4'>Since its inception, Smart Farmer Assistant has evolved into a robust ecosystem that connects farmers, agricultural suppliers, and service providers, facilitating seamless transactions and knowledge exchange.</p>
        </section>
     </main>
      <footer>
        <p>&copy; 2023 Smart Farmer Assistant. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default AboutUs;
