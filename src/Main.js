import style from "./main.module.css";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import {useState, useEffect} from "react";

const API_KEY = '2d1d80f7773d77eddbf5e11603922d4a';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function Main(){
    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    
    
    useEffect(() => {
      const fetchMovies = async () => {
        try{
          const response = await axios.get(API_URL);
          setMovies(response.data.results);
        }catch(err){
          setError(err);
        }
      };
      fetchMovies();
    }, []);

    if(error) return <p>Error:{error.message}</p>
    
    return (
        <main className={style.main}>
          <div className={style.sliderAndListContainer}>
            <div className={style.imageSlider}>
                <ImageSlider />
                <section className={style.listBox}>
                  <div className={style.list}>
                    <div className={style.title}>
                      <h1><span className={style.label}>무비뱅크 추천작</span></h1>
                    </div>
                  </div>
                  <div>
                    <ul className={style.movieList}>
                      {movies.filter(m => m.vote_average >= 7.5).slice(0, 5).map(m =>
                        <li key={m.id} className={style.movieItem}>
                         <h2>{m.title}</h2>
                              <div className={style.thumbImage}>
                                <img src={`https://image.tmdb.org/t/p/w200${m.poster_path}`} alt={m.title} />
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