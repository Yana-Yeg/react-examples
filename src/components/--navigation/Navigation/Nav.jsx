import { NavLink, Outlet } from "react-router-dom";
import CustomeLink from "../CustomeLink/CustomeLink";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <header style={{ borderBottom: "2px solid lightgrey" }}>
        {/* can use CustomeLink => this code looks clear */}
        <CustomeLink to="/">Home</CustomeLink>
        <CustomeLink to="/cats">Cats</CustomeLink>
        <CustomeLink to="/converter">Currency converter</CustomeLink>
        <CustomeLink to="/checklist">Checklist</CustomeLink>
        <CustomeLink to="/shortlist">Shortlist</CustomeLink>

        {/* or can use NavLink & className={style.link} */}

        <NavLink to="/quiz" className={style.link}>
          Quiz
        </NavLink>
        <NavLink to="/randomuser" className={style.link}>
          Randomuser
        </NavLink>
      </header>

      <main className={style.container}>
        <Outlet />
      </main>

      <footer className={style.container}>2022</footer>
    </>
  );
};

export default Nav;
