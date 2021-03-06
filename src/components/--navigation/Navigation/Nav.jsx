import { NavLink, Outlet } from "react-router-dom";
import CustomeLink from "../CustomeLink/CustomeLink";
import style from "./Nav.module.css";
import Icons from "../../../images/sprite.svg";

const Nav = () => {
  return (
    <>
      <header>
        {/* can use CustomeLink => this code looks clear */}
        <CustomeLink to="/">Home</CustomeLink>
        <CustomeLink to="/cats">Cats</CustomeLink>
        <CustomeLink to="/converter">Currency converter</CustomeLink>
        <CustomeLink to="/checklist">Checklist</CustomeLink>
        <CustomeLink to="/shortlist">Shortlist</CustomeLink>
        <CustomeLink to="/posts">Posts</CustomeLink>
        {/* <CustomeLink to="/shortlist">Shortlist</CustomeLink> */}

        {/* or can use NavLink & className={style.link} */}

        <NavLink to="/quiz" className={style.link}>
          Quiz
        </NavLink>
        <NavLink to="/randomuser" className={style.link}>
          Randomuser
        </NavLink>
        <NavLink to="/about" className={style.link}>
          About
        </NavLink>
      </header>

      <main className={style.container}>
        <Outlet />
      </main>

      <footer className={style.container}>
        <div class="container">
          <p class="footer-text">
            &copy; 2022 | My examples | Developed by Yana Yegorina
          </p>
        </div>
      </footer>
    </>
  );
};

export default Nav;
