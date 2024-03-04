import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Img from "../../images/slide4.jpg"
import Img1 from "../../images/slide2.jpg"
import Img2 from "../../images/slide3.jpg"
import { useLanguage } from '../LanguageTranslate/LanguageContext';
import "./silder.css";
const sliderData = [
  { id: 1, 
    image:Img,
    w:"- Atal Bihari Vajpayee",
    quot:"Agriculture is the backbone of our country, and the farmer is the backbone of agriculture."
  },
  { 
    id:2,
    image:Img1,
    w: "- Amit Shah",
    quot: "Our farmers work hard to sow the seeds of progress and harvest the fruits of prosperity for our nation." ,
  },
  {
    id:3,
    image:Img2,
    w: " - Jawaharlal Nehru",
    quot:"The fields of India bear witness to the perseverance and resilience of our farmers, who nurture the land like their own child.",
  },
 
];
const Slider = () => {
  const {translate ,changeLanguage } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div 
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div key={slide.id}>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{translate(slide.w)}</h2>
                  <p>{translate(slide.quot)}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
