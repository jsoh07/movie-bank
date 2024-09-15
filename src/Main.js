import style from "./main.module.css";
import ImageSlider from "./ImageSlider";
import axios from "axios"; //API 요청을 쉽게 보내기 위해 사용.
import {useState, useEffect} from "react";
import {Link} from "react-router-dom"; //페이지 간의 라우팅을 관리하기 위해 사용.

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
                                <Link>
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