import TmdbApi from "./component/TmdbApi";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Navbar from "./component/Navbar";

function MovieInfo(){
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieInfo = async() => {
            try{
                const data = await TmdbApi.fetchMovies(`/movie/${id}`);
                setMovie(data);
            }catch(error){
                console.error('Failed to fetch movie details:', error);
            }
        };
        fetchMovieInfo();
    }, [id]);

    if(!movie) return <div>Loading...</div>;
    return (
        <>
        <Navbar />
        <div style={{padding: '20px', backgroundColor: 'rgb(33, 30, 30)', overflowX: 'hidden' }}>
            <h1 style={{color: 'white'}}>{movie.title}</h1>
            <div style={{display: 'flex'}}>
                <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} 
                style={{width: '300px', marginRight: '20px'}} />
            <div>
            <h2 style={{color: 'white'}}>Overview</h2>
            <p style={{color: 'white'}}>{movie.overview}</p>
            <h3 style={{color: 'white'}}>Release Date: {movie.release_date}</h3>
            <h3 style={{color: 'white'}}>Rating: {movie.vote_average}</h3>
            <h3 style={{color: 'white'}}>Genres:</h3>
            <ul>
                {movie.genres.map((genre) => (
                    <li key={genre.id} style={{color: 'white'}}>{genre.name}</li>
                ))}
            </ul>
            </div>    
            </div>
        </div>
        </>
    )
}

export default MovieInfo;