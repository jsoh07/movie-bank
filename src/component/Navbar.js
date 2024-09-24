import {Link} from "react-router-dom";
import style from "./navbar.module.css";
import TmdbApi from "./TmdbApi";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Navbar(){
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchMovies = async(query = "") => {
    try{
      const endpoint = query 
      ? `/search/movie?query=${encodeURIComponent(query)}`
      : '/movie/popular';
      const data = await TmdbApi.fetchMovies(endpoint);
      return data.results;
    }catch(error){
      console.error('Failed to fetch movies:', error);
      return [];
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const movies = await fetchMovies(searchTerm);
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`, { state: {movies} });
  };

  const categories = [
    { id: 28, name: '액션' },
    { id: 16, name: '애니' },
    { id: 878, name: 'SF' },
    { id: 53, name: '스릴러' },
    { id: 80, name: '범죄' }
  ];

    return(
        <header className={style.headerContainer}>
          <nav className={style.navbarContainer}>
            <div className={style.navbarContent}>
              <Link to="/movie-bank" className={style.logo}>
                <img src={`${process.env.PUBLIC_URL}/movieBankLogo.png`} className={style.logo} alt="movie bank" />
              </Link>
              <div className={style.categoryList}>
                <ul className={style.menuList}>
                {categories.map((category) => (
                  <Link to={`/category/${category.id}`} key={category.id} className={style.titleLink} style={{textDecoration: "none"}}>
                    <li className={style.menuTitle}>{category.name}</li>
                  </Link>
                ))}
                </ul>
              </div>
              <ul className={style.search}>
                <li className={style.searchList}>
                <div className={style.headerSearch}>
                  <label calssName={style.searchIcon}>
                    <svg data-v-d955b8b8="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4508 8.90796C15.4508 12.4977 12.5396 15.408 8.94985 15.408C5.3611 15.408 2.45081 12.4977 2.45081 8.90796C2.45081 5.31825 5.3611 2.40796 8.94985 2.40796C12.5396 2.40796 15.4508 5.31825 15.4508 8.90796Z" stroke="#A5A5A5" stroke-width="2"></path><path d="M14.0474 13.6536L19.7904 19.2229" stroke="#A5A5A5" stroke-width="2" stroke-linecap="round"></path></svg>
                    <span className={style.s_hidden}>검색</span>
                  </label>
                  <form onSubmit={handleSearch}>
                    <input type="text" className={style.searchInputBox} placeholder="제목으로 찾아보세요" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  />
                  </form>
                </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
    )
}

export default Navbar;