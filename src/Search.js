import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import style from "./search.module.css";
import {Link} from "react-router-dom";


function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const location = useLocation();
    const movies = location.state?.movies || [];

    return (
        <>
        <Navbar />
        <div className={style.searchBox}>
            <h1>검색 결과: "{query}"</h1>
            <div className={style.searchContainer}>
                {movies.length ? (
                    movies.map((movie, index) => (
                        <div key={movie.id} className={style.searchList}>
                            <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            
                        </div>
                    ))
                ) : (
                    <h1>검색 결과가 없습니다.</h1>
                )}
            </div>
        </div>
        </>
    )
};

export default Search;