import style from "./main.module.css";
import ImageSlider from "./ImageSlider";
import {useState, useEffect} from "react";
import TmdbApi from "./component/TmdbApi";
import {Link} from "react-router-dom";

function Main(){
  const [movies, setMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [minReleaseDatee, setMinReleaseDatee] = useState('');
  const [maxReleaseDatee, setMaxReleaseDatee] = useState('');
  const [minReleaseDate, setMinReleaseDate] = useState('');
  const [maxReleaseDate, setMaxReleaseDate] = useState('');
  
    useEffect(() => {
      const fetchMovies = async () => {
        try{
          const data = await TmdbApi.fetchMovies('/movie/popular');
          setMovies(data.results);
        }catch(error){
          console.error('Failed to fetch movies:', error);
        }
      };
      const fetchNowMovies = async () => {
        try{
          const data = await TmdbApi.fetchMovies('/movie/now_playing');
          setNowMovies(data.results);
          setMinReleaseDatee(data.dates.minimum);
          setMaxReleaseDatee(data.dates.maximum);
        }catch(error){
          console.error('Failed to fetch movies:', error);
        }
      };
      const fetchUpcomingMovies = async () => {
        try{
          const data = await TmdbApi.fetchMovies('/movie/upcoming');
          setUpcomingMovies(data.results);
          setMinReleaseDate(data.dates.minimum);
          setMaxReleaseDate(data.dates.maximum);
        }catch(error){
          console.error('Failed to fetch movies:', error);
        }
      };
      fetchMovies();
      fetchNowMovies();
      fetchUpcomingMovies();
    }, []);

    const images = movies.slice(0,5).map(movie => ({
      url: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
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
                      {movies.filter(m => m.vote_average >= 7.3).slice(0, 5).map(m =>
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
                <section className={style.listBox}>
                  <div className={style.list}>
                    <div className={style.title}>
                      <h1><span className={style.label}>현재 상영작</span></h1>
                    </div>
                  </div>
                  <div>
                    <ul className={style.movieList}>
                      {nowMovies.filter(m => new Date(m.release_date) >= new Date(minReleaseDatee) &&
                      new Date(m.release_date) <= new Date(maxReleaseDatee) ).slice(0, 5).map(m =>
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
                <section className={style.listBox}>
                  <div className={style.list}>
                    <div className={style.title}>
                      <h1><span className={style.label}>개봉 예정작</span></h1>
                    </div>
                  </div>
                  <div>
                    <ul className={style.movieList}>
                      {upcomingMovies.filter(m => new Date(m.release_date) >= new Date(minReleaseDate) &&
                        new Date(m.release_date) <= new Date(maxReleaseDate) ).slice(0, 5).map(m =>
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