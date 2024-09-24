import { useState, useEffect, useRef } from "react";
import style from "../main.module.css";
import { Link } from "react-router-dom";

function ImageSlider({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        if (images.length > 0) {
            setCurrentIndex(0); // 첫 슬라이드로 초기화
        }
    }, [images]); // images가 변경될 때마다 실행

    useEffect(() => {
        if (images.length === 0) return; // 이미지가 없으면 실행하지 않음

        const slideInterval = setInterval(() => {
            goToNextSlide();
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images, interval]); // images와 interval에 의존

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        console.log('Current index:', currentIndex); // 상태 변화 로그
    }, [currentIndex]);

    const goToNextSlide = () => {
        if (images.length === 0) return; // 이미지가 없으면 실행하지 않음
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % images.length;
            console.log('Next index:', nextIndex); // 다음 인덱스 로그 추가
            return nextIndex;
        });
    };

    const goToPrevSlide = () => {
        if (images.length === 0) return; // 이미지가 없으면 실행하지 않음
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <section>
            <div className={style.multiBanner}>
                <button onClick={goToPrevSlide} type="button" className={style.swiperButtonPrev}>이전배너</button>
                <button onClick={goToNextSlide} type="button" className={style.swiperButtonNext}>다음배너</button>
                {images.length > 0 && (
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
                )}
            </div>
        </section>
    );
}

export default ImageSlider;
