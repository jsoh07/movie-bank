import { useState, useEffect, useRef } from "react";
import style from "./main.module.css";
import { Link } from "react-router-dom";

function ImageSlider({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            goToNextSlide();
        }, interval);

        return () => clearInterval(slideInterval);
    }, [currentIndex, interval]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, [currentIndex]);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    return (
        <section>
            <div className={style.multiBanner}>
                <button onClick={goToPrevSlide} type="button"  className={style.swiperButtonPrev}>이전배너</button>
                <button onClick={goToNextSlide} type="button"  className={style.swiperButtonNext}>다음배너</button>
                <div className={style.swiperWrapper} ref={sliderRef}>
                    {images.map((item, index) => (
                        <div key={index} className={style.swiperSlide}>
                            <div className={style.sliderImage}>
                                <Link to={`/movie/${item.id}`}>
                                    <img src={item.url} alt={`Slide ${index}`} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ImageSlider;
