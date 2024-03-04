import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';
import New1 from "../../../../images/news2.jpg"
import New2 from "../../../../images/news3.jpg"
import New3 from "../../../../images/news4.jpg"
import New4 from "../../../../images/news5.jpg"
import { useLanguage } from '../../../LanguageTranslate/LanguageContext';


import "./news.css"

const NewsSlider = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  const [expandedIndex, setExpandedIndex] = useState(null);

  const newsData = [
    { 
      id:1,
      title: "Why majority of Punjab farmers have stayed away from 'Dilli Chalo' protest", 
      description: "India Today TV travelled to the interior of Punjab and found many farmers irrigating and manuring their fields. Here is why a majority of farmers are not participating in the 'Dilli Chalo' march by farmers.", 
      details: "Thousands of farmers from Punjab are protesting at two interstate borders with Haryana to press their demands to the Centre. However, compared to the last farmers' protest, the number of farmers joining the protest this time is not huge.Among the major demands of the farmers are a legal guarantee for the Minimum Support Price (MSP) on all crops and a complete loan waiver for all farmers. For this, the farmers are marching towards the national capital but are currently facing stiff barricading at the Haryana borders.", 
      imageUrl: New1 
    },
    { 
      id:2,
      title: "Prolonged cold, fog spell in Bihar hits Rabi crops, but wheat yield may benefit", 
      description: "Farmers report damage to potato, mustard and lentil crops, wheat unaffected  ", 
      details: "A long spell of fog and cold in January 2024 has affected Rabi crops like potato, mustard and lentil in Bihar. Farmers and agricultural scientists are concerned that the meteorological factor will likely impact production of these crops.However, wheat (a major Rabi crop in the state) is not affected by long, intensely cold and foggy nights. Agriculture scientists pointed out that such weather benefits wheat, predicting a bumper harvest of the crop in the eastern state. Scientists at Krishi Vigayan Kendra (KVK) in different districts confirmed damage of Rabi crops due to the cold wave and cold day conditions that lasted for days.“According to farmer feedback, the potato crop in Rohtas district has been the most severely impacted by inclement weather last month. It is estimated that 20 to 25 per cent of the potato crop is damaged and more than 10 per cent of the mustard crop is damaged. Thankfully, no such damage was reported to wheat crops,” Ratan Kumar, scientist at KVK, Rohtas, told this reporter.", 
      imageUrl: New2,
    },
    { 
      id:3,
      title: "Work capacity of farm labourers in key food-producing areas to reduce with rising temperatures, shows study", 
      description: "Physical work capacity begins to decline around 20°C ambient temperature & further diminishes as temperature, humidity & exposure to solar radiation increases", 
      details: "The future of global food production and security is already under threat due to climate change and the problem is going to be compounded as temperature rise affects productivity of farmers and labourers, pushing it to as low as 40 per cent in important food-producing regions like India and Pakistan. A new study by researchers from universities in the United States of America, United Kingdom and Australia revealed that the physical work capacity (PWC) in the average growing season could fall in some key food production regions due to heat exposure, by 2100. Areas in southeast and South Asia, west and central Africa and northern South America were expected to see physical work capacity reduce to 70 per cent, while in Indo-Gangetic plains in Pakistan and India, this could fall to as low as 40 per cent, by the end of the century. Agricultural workers plant, till and harvest much of the food that is produced and a reduction in their ability to do this work in the field will further affect food security, which is already threatened by reduction in crop yields due to different impacts of climate change. ", 
      imageUrl:New3, 
    },
    { 
      id:4,
      title: "Jharkhand declares drought in 17 districts", 
      description: "The state overall recorded 38 per cent less rainfall than average during last monsoon", 
      details: "The Jharkhand government has finally declared 158 blocks in 17 districts of the state as drought-affected, where about 1.5 million farmers were impacted. Only four districts in Jharkhand recorded normal rainfall during the monsoon season in 2023 and 19 districts had recorded less than normal rainfall. This time, the state overall recorded 38 per cent less than average rainfall during the monsoon. During the last monsoon season, only about half of the normal amount of farming was done. The government had set a target of 1.61 million hectares for paddy sowing during the Kharif cropping season, but only 282,000 hectares were planted. ", 
      imageUrl: New4
    },
 // Add more news items as needed
  ];

  const toggleDetails = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const {translate} = useLanguage();


  return (
    <div className='news'>
      <br/>
      <h2>NEWS</h2>
    <Slider {...settings}>
      {newsData.map((news, index) => (
        <div key={news.id} div data-aos="fade-up">
          <div className="news-card">
            <h5>{translate(news.title)}</h5>
            <img src={news.imageUrl} alt={news.title} />
            <p>{translate(news.description)}</p>
            <button onClick={() => toggleDetails(index)}>
              {expandedIndex === index ? 'Less' : 'More'}
            </button>
            {expandedIndex === index && <p>{translate(news.details)}</p>}
          </div>
        </div>
      ))}
    </Slider>
    <br/>
    <br/>
    </div>
  );
};

export default NewsSlider;
