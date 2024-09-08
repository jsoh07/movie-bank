import style from "./app.module.css";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <div className={style.body}>
        <header className={style.headerContainer}>
          <nav className={style.navbarContainer}>
            <div className={style.navbarContent}>
              <Link href="/" className={style.logo}>
              <img src="/movieBankLogo.png" className={style.logo} alt="movie bank" />
              </Link>  
              <div className={style.categoryList}>
                <ul className={style.menuList}>
                  <li className={style.menuTitle}>
                    <Link href="/" className={style.titleLink} style={{textDecoration: "none"}}>액션</Link>
                  </li>
                  <li className={style.menuTitle}>
                    <Link href="/" className={style.titleLink} style={{textDecoration: "none"}}>공포</Link>
                  </li>
                  <li className={style.menuTitle}>
                    <Link href="/" className={style.titleLink} style={{textDecoration: "none"}}>SF</Link>
                  </li>
                  <li className={style.menuTitle}>
                    <Link href="/" className={style.titleLink} style={{textDecoration: "none"}}>스릴러</Link>
                  </li>
                  <li className={style.menuTitle}>
                    <Link href="/" className={style.titleLink} style={{textDecoration: "none"}}>범죄</Link>
                  </li>
                </ul>
              </div>
              <ul>
                <li>
                <div>
                  <button>
                  
                  <span>검색</span>
                  </button>
                </div>
                </li>
                <li>
                <div>
                    <button>
                  
                    <span>프로필</span>
                    </button>
                </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>

        </main>
        <footer>

        </footer>
      </div>
    </div>
  );
}

export default App;

