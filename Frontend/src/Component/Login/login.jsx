import {useEffect} from "react";
import './login.css';
import farmer from '../../images/farmer_mlogin.jpg';
import farmer2 from '../../images/wholesaler.jpg';
import { Link } from 'react-router-dom';
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';
import { Navbar } from '../Navbar/navbar';

const Login = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

    return (  
      <div>
           <Navbar/>
    <div data-aos="fade-up" className="centered-container">
      <div className='image'>
      <Link to="/farmerLogin">
      <img className="centered-image" src={farmer} alt="Image 1"/>
      <p className='image-name'>Farmer</p>
      </Link>
      </div>
      
      <div className='image'>
        <Link to="/wholesaler">
      <img className="centered-image" src={farmer2} alt="Image 2"/>
      <p className='image-name'>Wholesaler</p>
      </Link>
      </div>
    </div>
    </div>

    )
}
    export default Login;
