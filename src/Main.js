import style from "./main.module.css";
import ImageSlider from "./ImageSlider";
import axios from "axios";
import {useState, useEffect} from "react";

const API_KEY = '2d1d80f7773d77eddbf5e11603922d4a';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function Main(){
    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    const images =[
      'https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
      'https://image.tmdb.org/t/p/w500/865DntZzOdX6rLMd405R0nFkLmL.jpg',
      'https://image.tmdb.org/t/p/w500/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg',
      'https://image.tmdb.org/t/p/w500/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
      'https://image.tmdb.org/t/p/w500/PywbVPeIhBFc33QXktnhMaysmL.jpg'
    ];
    
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
          <div>
            <div>
                <ImageSlider images={images} interval={4000} />
                <section>
                  <div>
                    <div className={style.title}>
                      <h1><span>무비뱅크 추천작</span></h1>
                    </div>
                  </div>
                  <div>
                    <div>
                      <ul>
                        {movies.filter(movie => movie.vote_average >= 7)
                        .slice(0,5).map(m =>
                        <div>
                            <li key={m.id}>
                              <h2>{m.title}</h2>
                              <h4>{m.genre_ids}</h4>
                              <div className={style.thumbImage}>
                                <img src={'https://image.tmdb.org/t/p/w500${m.poster_path}'}/>
                              </div>
                            </li>
                        </div>  
                        )}
                      </ul>
                    </div>
                  </div>
                </section>            
            </div>
          </div>
        </main>
    )
}

export default Main;