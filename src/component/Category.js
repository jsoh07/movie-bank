import TmdbApi from "./component/TmdbApi";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import style from "./search.module.css";
import {Link} from "react-router-dom";

function Category() {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies  = async() => {
            try{
                const data = await TmdbApi.fetchMovies(`/discover/movie?with_genres=${id}`);
                setMovies(data.results);
            }catch(error){
                console.error('Failed to fetch movie details:', error);
            }
        };
        fetchMovies();
    }, [id]);

    const categoryMap = {
        28: "액션",
        16: '애니',
        878: 'SF',
        53: '스릴러',
        80: '범죄'    
    };

    return(
    <>
    <Navbar />
    <div className={style.searchBox}>
      <h1>장르: {categoryMap[id]}</h1>
      <div className={style.searchContainer}>
        {movies.length === 0 ? (
          <p>영화를 찾을 수 없습니다.</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className={style.searchList}>
                <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                </Link>
            </div>
          ))
        )}
      </div>
    </div>
    </>
    )
}


export default Category;