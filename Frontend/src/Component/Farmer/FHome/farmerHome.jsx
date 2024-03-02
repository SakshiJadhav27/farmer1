import React,{useState,useEffect} from "react";
import "./farmerHome.css";
import Slider1 from '../../Silder/slider';
import { FarmerNavbar } from "../../Navbar/navbar";
import News from "./News/news"
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import gov_link from "../../../images/gov1.png"
import gov_link1 from "../../../images/gov2.png"
import gov_link2 from "../../../images/gov3.png"
import gov_link3 from "../../../images/gov4.png"
import gov_link4 from "../../../images/gov6.png"
import gov_link5 from "../../../images/gov7.png"
import gov_link6 from "../../../images/gov9.png"
import farm1 from "../../../images/farming1.jpg"
import farm2 from "../../../images/farming2.jpg"
import farm3 from "../../../images/farming3.jpg"
import farm4 from "../../../images/farming4.jpg"
import farm5 from "../../../images/farming5.jpg"


const Farming=[
    {
        Title:"Organic Farming",
        imgs:farm1,
        link:"https://www.ofai.org/",
        des:"The adoption of the health-centered lifestyle among the middle and high-class citizens of India elevated the demand for healthy, pesticide-free, chemical-free agricultural produce."
    },
    {
        Title:"Dairy Farming",
        imgs:farm2,
        link:"https://www.cedsi.in/",
        des:"Dairy farming is the most profitable livestock farming in India. It refers to the rearing of cows, buffaloes, or goats to produce milk. It does not involve the sale of these animals for meat."
    },
    {
        Title:"Poultry Farming",
        imgs:farm3,
        link:"https://www.poultryindia.co.in/",
        des:"Poultry farming includes all activities associated with raising domesticated birds such as chickens, ducks, and turkeys for their eggs and meat."
    },
    {
        Title:"Aquaculture",
        imgs:farm4,
        link:"https://ciba.icar.gov.in/",
        des:"Aquaculture or Fish Farming is the cultivation of fish in ponds or tanks for commercial purposes. There is significant market demand for fish farming in India."
    },
    {
        Title:" Medicinal Plants Farming",
        imgs:farm5,
        link:"https://nmpb.nic.in/content/medicinal-plants-cultivation",
        des:"The cultivation of herbs with medicinal properties for various purposes like Ayurveda, pharmaceuticals, and cosmetics constitutes the most profitable medicinal plant farming in India. "
    },
]
const ImageSlide=[
    {
      img:gov_link,
      link:"https://www.india.gov.in/",
    },
    {
        img:gov_link1,
        link:"https://agricoop.nic.in/",
    },
    {
        img:gov_link2,
        link:"https://amritmahotsav.nic.in/",
    },
    {
        img:gov_link3,
        link:"https://www.mygov.in/",
    },
    {
        img:gov_link4,
        link:"https://www.nic.in/",
    },
    {
        img:gov_link5,
        link:"https://digitalindia.gov.in/",
    },
    {
        img:gov_link6,
        link:"https://www.meity.gov.in/",
    },
      
]
const FarmerHome =()=>{
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
   return(
        <div>
        <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <FarmerNavbar/>
        </div>
        <br/>
        <Slider1/>
        <News/>
        <div className="farming-main" data-aos="fade-up">
            <br/>
            <h2>Most Profitable Farming in India</h2>
        <div className="farming-content">
        <ul>
          {Farming.map((farm, index) => (
            <li key={index}>
            <Link to={farm.link}>
              <img src={farm.imgs} alt={farm.Title} />
              <div className="farming-details">
                <br/>
                <h3>{farm.Title}</h3>
                <p>{farm.des}</p>
              </div>
            </Link>
            </li>
          ))}
        </ul>
      </div>
        </div>
        <div className="slider-container-image">
        <br/>
        <h2>Important Links</h2>
        <Slider {...settings}>
        {ImageSlide.map((image, index) => (
            <div key={index}>
                <br/>
             <div className="image-slider">
                <a href={image.link}>
                <img src={image.img} alt="" />
                </a>
             </div>
            </div>
        ))}
        </Slider>
        <br/>
        </div>
        <footer>
        <p>&copy; 2023 Smart Farmer Assistant. All rights reserved.</p>
        </footer>
        </div>
    )
}
export default FarmerHome;