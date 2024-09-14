import {useState, useEffect} from "react";
import style from "./main.module.css";
import {Link} from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length), 
    // [images]);
    const images =[
      'https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
      'https://image.tmdb.org/t/p/w200/865DntZzOdX6rLMd405R0nFkLmL.jpg',
      'https://image.tmdb.org/t/p/w200/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg',
      'https://image.tmdb.org/t/p/w200/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
      'https://image.tmdb.org/t/p/w200/PywbVPeIhBFc33QXktnhMaysmL.jpg'
    ];

    // const goToNextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // };

    // const goToPrevSlide = () => {
    //     setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    // };
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return(
        <section className={style.mainSection}>
                {/* <div className={style.multiBanner}> */}
                  {/* <h2 className={style.ir}>빅배너</h2> */}
                  {/* <button onClick={goToPrevSlide} type="button" aria-label="Next slide" className={style.swiperButtonPrev}>이전배너</button>
                  <button onClick={goToNextSlide} type="button" aria-label="Previous slide" className={style.swiperButtonNext}>다음배너</button> */}
                  {/* <div className={style.swiperWrapper}> */}
                    {/* <div className={style.swiperSlide}> */}
                      <div className={style.sliderImage}>
                        <Slider {...settings}>
                        <Link>
                        {images.map((image, index) => (
                          <div key={index}>
                            <img src={image}/>
                          </div>
                        ))}  
                        </Link>
                        </Slider>
                      </div>
                    {/* </div> */}
                  {/* </div>                   */}
                {/* </div> */}
        </section>
    )
}

export default ImageSlider;