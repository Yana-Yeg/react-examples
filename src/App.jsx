import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import ConverterPage from "./pages/ConverterPage";
import HomePage from "./pages/HomePage";
import CatsPage from "./pages/CatsPage";

function App() {
  return (
    <>
      <nav style={{ borderBottom: "2px solid lightgrey" }}>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/cats">Cats</NavLink>
        <NavLink to="/converter">Currency converter</NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/cats">
            <CatsPage />
          </Route>
          <Route path="/converter">
            <ConverterPage />
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
