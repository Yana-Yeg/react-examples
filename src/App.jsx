import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import ConverterPage from "./pages/ConverterPage";
import HomePage from "./pages/HomePage";
import CatsPage from "./pages/CatsPage";
import ChecklistPage from "./pages/ChecklistPage";
import ShortListPage from "./pages/ShortListPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <nav style={{ borderBottom: "2px solid lightgrey" }}>
        <NavLink to="/" exact className="link" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink to="/cats" className="link" activeClassName="activeLink">
          Cats
        </NavLink>
        <NavLink to="/converter" className="link" activeClassName="activeLink">
          Currency converter
        </NavLink>
        <NavLink to="/checklist" className="link" activeClassName="activeLink">
          Checklist
        </NavLink>
        <NavLink to="/shortlist" className="link" activeClassName="activeLink">
          Shortlist
        </NavLink>
        <NavLink to="/quiz" className="link" activeClassName="activeLink">
          Quiz
        </NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/cats">
            <CatsPage />
          </Route>
          <Route path="/converter">
            <ConverterPage />
          </Route>
          <Route path="/checklist">
            <ChecklistPage />
          </Route>
          <Route path="/shortlist">
            <ShortListPage />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
