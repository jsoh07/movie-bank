import Link from "react";
import style from "./app.module.css";

function App() {
  return (
    <div>
      <div className={style.body}>
        <header className={style.headerContainer}>
          <nav className={style.navbarContainer}>
            <div className={style.navbarContent}>
              {/* <Link href="#" className="logo logo"></Link> */}
              <div className={style.categoryList}>
                <ul className={style.menuList}>
                  <li className={style.menuTitle}>액션</li>
                  <li className={style.menuTitle}>공포</li>
                  <li className={style.menuTitle}>SF</li>
                  <li className={style.menuTitle}>스릴러</li>
                  <li className={style.menuTitle}>범죄</li>
                </ul>
              </div>
              <ul>
                <li>
                <div>
                  <button>
                  {/* <svg data-v-d955b8b8="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4508 8.90796C15.4508 12.4977 12.5396 15.408 8.94985 15.408C5.3611 15.408 2.45081 12.4977 2.45081 8.90796C2.45081 5.31825 5.3611 2.40796 8.94985 2.40796C12.5396 2.40796 15.4508 5.31825 15.4508 8.90796Z" stroke="#A5A5A5" stroke-width="2"></path><path d="M14.0474 13.6536L19.7904 19.2229" stroke="#A5A5A5" stroke-width="2" stroke-linecap="round"></path></svg> */}
                  <span>검색</span>
                  </button>
                </div>
                </li>
                <li>
                <div>
                    <button>
                    {/* <svg data-v-17d2183c="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-53c40c25=""><rect x="7.5" y="2" width="7" height="8" rx="3.5" stroke="#A5A5A5" stroke-width="2"></rect><path d="M2 19V19C2.58146 16.0927 5.13416 14 8.09902 14H13.901C16.8658 14 19.4185 16.0927 20 19V19" stroke="#A5A5A5" stroke-width="2" stroke-linecap="round"></path></svg> */}
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

