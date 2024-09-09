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
            </div>
          </div>
        </main>
    )
}

export default Main;