import Board from "../board/Board";
import MainNavbar from "../mainNavbar/MainNavbar";
import Navbar from "../navBar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.MainContainer}>
      <MainNavbar />
      <div className={style.leftNright}>
      <div className={style.left}>
        <Sidebar />
      </div>
      <div className={style.right}>
        <Navbar />
        <Board />
      </div>
      </div>
    </div>
  );
}

export default Home;
