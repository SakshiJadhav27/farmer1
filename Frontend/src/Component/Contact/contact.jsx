import {useState,useEffect} from 'react';
import './contact.css';
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { Navbar } from '../Navbar/navbar';

const ContactUsPage = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div>
         <Navbar/>
    <div data-aos="fade-up" className="contact-main">
       <header>
        <h1>Contact Us</h1>
        </header>
    <div className="contact-us-page">
      <div className="contact-info">
        {/* Website information */}
        {/* Email card */}
        <div className="contact-info-item">
          <h3><TfiEmail className='icon'/> <u> Email</u></h3>
          <p>info@farmerssopt.com</p>
        </div>
        {/* Mobile card */}
        <div className="contact-info-item">
          <h3><BsTelephone className='icon'/><u>Mobile</u></h3>
          <p>+91 9834567890</p>
        </div>
        {/* Name card */}
        <div className="contact-info-item">
          <h3><MdDriveFileRenameOutline className='icon'/><u>Name</u></h3>
          <p>Farmer's Spot</p>
        </div>
        {/* Address card */}
        <div className="contact-info-item">
          <h3><FaRegAddressCard className='icon'/><u>Address</u></h3>
          <p>Sindhi society,Chembur Mumbai-0400071</p>
        </div>
     </div>
     <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:<span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:<span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:<span className="required">*</span></label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
            <small>Enter a 10-digit mobile number</small>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:<span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <footer>
        <p>&copy; 2023 Farmer's Spot. All rights reserved.</p>
    </footer>
    </div>
    </div>
  );
};

export default ContactUsPage;
