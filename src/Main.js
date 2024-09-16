import style from "./main.module.css";
import ImageSlider from "./ImageSlider";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"; //페이지 간의 라우팅을 관리하기 위해 사용.
import TmdbApi from "./TmdbApi";

function Main(){
    const[movies, setMovies] = useState([]);
    
    useEffect(() => {
      const fetchMovies = async () => {
        try{
          const data = await TmdbApi.fetchMovies('/movie/popular');
          setMovies(data.results);
        }catch(error){
          console.error('Failed to fetch movies:', error);
        }
      };

      fetchMovies();
    }, []);

    const images = movies.slice(0,5).map(movie => ({
      url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      id: movie.id
    }));

    return (
        <main className={style.main}>
          <div className={style.sliderAndListContainer}>
            <div className={style.imageSlider}>
            <ImageSlider images={images} interval={4000} />
                <section className={style.listBox}>
                  <div className={style.list}>
                    <div className={style.title}>
                      <h1><span className={style.label}>믿고 보는 무비뱅크 에디터 추천작</span></h1>
                    </div>
                  </div>
                  <div>
                    <ul className={style.movieList}>
                      {movies.filter(m => m.vote_average >= 7.5).slice(0, 5).map(m =>
                        <li key={m.id} className={style.movieItem}>
                              <div className={style.thumbImage}>
                                <Link to={`/movie/${m.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} alt={m.title} />
                                </Link>
                              </div>
                        </li>
                      )}
                    </ul>
                  </div>
                </section>            
            </div>
          </div>
        </main>
    )
}

export default Main;