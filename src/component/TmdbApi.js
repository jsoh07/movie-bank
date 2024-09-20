import axios from 'axios';//API 요청을 쉽게 보내기 위해 사용.

const API_KEY = '2d1d80f7773d77eddbf5e11603922d4a';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async(endpoint) => {
    try{
        const url = `${BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}&api_key=${API_KEY}`;
        const response = await axios.get(url);
        return response.data;
    }catch(error){
        console.error('Error fetching data from TMDB:', error);
        throw error;
    }
};

export default {fetchMovies};