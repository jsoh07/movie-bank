import style from "./component/home.module.css";
import Navbar from "./component/Navbar";
import Main from "./Main";

function Home() {
  return (
    <div>
      <div className={style.body}>
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default Home;

