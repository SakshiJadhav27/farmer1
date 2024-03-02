import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Img from "../../images/slide4.jpg"
import Img1 from "../../images/slide2.jpg"
import Img2 from "../../images/slide3.jpg"
import "./silder.css";
const sliderData = [
  {
    image:Img,
    heading: "- George Washington",
    desc: "Farming is not just a job; it's a way of life that teaches valuable lessons in patience and hard work.",
  },
  {
    image:Img1,
    heading: "- Masanobu Fukuoka",
    desc: "The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.",
  },
  {
    image:Img2,
    heading: "- John F. Kennedy",
    desc: "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways.",
  },
 
];
const Slider = () => {
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
              <div>
                <img src={slide.image} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
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
