import style from "./common.module.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import {Switch} from "react-router-dom";

function Home() {
  return (
    <div>
      <div className={style.body}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

