import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import MovieInfo from "./MovieInfo.js";
import Search from "./Search.js";
import Category from "./Category.js";

function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieInfo />} />
                <Route path="/search" element={<Search />} />
                <Route path="/category/:id" element={<Category />} />
            </Routes>
        </div>
        
    );
}

export default App;