import { Link, Outlet } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <header style={{ borderBottom: "2px solid lightgrey" }}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <Link to="/cats" className={style.link}>
          Cats
        </Link>
        <Link to="/converter" className={style.link}>
          Currency converter
        </Link>
        <Link to="/checklist" className={style.link}>
          Checklist
        </Link>
        <Link to="/shortlist" className={style.link}>
          Shortlist
        </Link>
        <Link to="/quiz" className={style.link}>
          Quiz
        </Link>
        <Link to="/randomuser" className={style.link}>
          Randomuser
        </Link>
      </header>

      <main className={style.container}>
        <Outlet />
      </main>

      <footer className={style.container}>2022</footer>
    </>
  );
};

export default Nav;
