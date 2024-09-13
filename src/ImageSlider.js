import {useState, useEffect} from "react";
import style from "./main.module.css";
import {Link} from "react-router-dom";

function ImageSlider({images, interval = 4000}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images, interval]);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };
    return(
        <section className={style.mainSection}>
                <div className={style.multiBanner}>
                  <h2 className={style.ir}>빅배너</h2>
                  {/* <div className={style.swiperPaginationFraction}>
                    <span className={style.swiperPaginationCurrent}>1</span>
                    |
                    <span className={style.swiperPaginationTotal}>5</span>
                  </div> */}
                  <button onClick={goToPrevSlide} type="button" tabindex="0" aria-label="Next slide" className={style.swiperButtonPrev}>이전배너</button>
                  <button onClick={goToNextSlide} type="button" tabindex="0" aria-label="Previous slide" className={style.swiperButtonNext}>다음배너</button>
                  <div className={style.swiperWrapper}>
                    <div className={style.swiperSlide}>
                      <div className={style.sliderImage}>
                        <Link>  
                          <img src={images[currentIndex]}/>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <span></span>
                </div>
        </section>
    )
}

export default ImageSlider;