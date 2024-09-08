import style from "./main.module.css";

function Main(){
    return (
        <main className={style.main}>
          <div>
            <div>
              <section className={style.mainSection}>
                <div className={style.multiBanner}>
                  <h2 className={style.ir}>빅배너</h2>
                  <div className={style.swiperPaginationFraction}>
                    <span className={style.swiperPaginationCurrent}>1</span>
                    |
                    <span className={style.swiperPaginationTotal}>5</span>
                  </div>
                  <button type="button" tabindex="0" aria-label="Next slide" className={style.swiperButtonPrev}>이전배너</button>
                  <button type="button" tabindex="0" aria-label="Previous slide" className={style.swiperButtonNext}>다음배너</button>
                  <div className={style.swiperWrapper}>
                    <div className={style.swiperSlide}>
                      <div>
                        <picture></picture>
                        <picture></picture>
                      </div>
                    </div>
                    <div className={style.swiperSlide}>
                      <div>
                        <picture></picture>
                        <picture></picture>
                      </div>
                    </div>
                    <div className={style.swiperSlide}>
                      <div>
                        <picture></picture>
                        <picture></picture>
                      </div>
                    </div>
                    <div className={style.swiperSlide}>
                      <div>
                        <picture></picture>
                        <picture></picture>
                      </div>
                    </div>
                    <div className={style.swiperSlide}>
                      <div>
                        <picture></picture>
                        <picture></picture>
                      </div>
                    </div>
                  </div>
                  <span></span>
                </div>
              </section>
            </div>
          </div>
        </main>
    )
}

export default Main;