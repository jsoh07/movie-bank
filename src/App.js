import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import MovieInfo from "./MovieInfo.js";
function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieInfo />} />
            </Routes>
        </div>
        
    );
}

export default App;