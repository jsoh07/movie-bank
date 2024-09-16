import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";



function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const location = useLocation();
    const movies = location.state?.movies || [];

    return (
        <>
        <Navbar />
        <div>
            <h1>검색 결과: "{query}"</h1>
            <div>
                {movies.length ? (
                    movies.map(movie => (
                        <div key={movie.id}>
                            <h2>{movie.title}</h2>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        </div>
                    ))
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </div>
        </>
    )
};

export default Search;